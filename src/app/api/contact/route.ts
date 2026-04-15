import { NextResponse } from "next/server";
import { Resend } from "resend";

type Payload = {
  nome?: string;
  cognome?: string;
  email?: string;
  clientType?: string;
  oggetto?: string;
  messaggio?: string;
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !fromEmail || !toEmail) {
    console.error("Contact route: missing env vars", {
      hasApiKey: !!apiKey,
      hasFrom: !!fromEmail,
      hasTo: !!toEmail,
    });
    return NextResponse.json(
      { ok: false, error: "Email service non configurato" },
      { status: 500 },
    );
  }
  const resend = new Resend(apiKey);

  let data: Payload;
  try {
    data = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Body non valido" }, { status: 400 });
  }

  const nome = (data.nome ?? "").trim();
  const cognome = (data.cognome ?? "").trim();
  const email = (data.email ?? "").trim();
  const clientType = (data.clientType ?? "").trim();
  const oggetto = (data.oggetto ?? "").trim();
  const messaggio = (data.messaggio ?? "").trim();

  if (!nome || !cognome || !email || !oggetto || !messaggio) {
    return NextResponse.json(
      { ok: false, error: "Campi obbligatori mancanti" },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Email non valida" }, { status: 400 });
  }

  const adminHtml = `
    <h2>Nuova richiesta dal form Contattaci</h2>
    <p><strong>Nome:</strong> ${escapeHtml(nome)} ${escapeHtml(cognome)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Tipo cliente:</strong> ${escapeHtml(clientType || "—")}</p>
    <p><strong>Oggetto:</strong> ${escapeHtml(oggetto)}</p>
    <p><strong>Messaggio:</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(messaggio)}</p>
  `;

  const userHtml = `
    <h2>Ciao ${escapeHtml(nome)}, grazie per averci contattato!</h2>
    <p>Abbiamo ricevuto correttamente la tua richiesta e un nostro esperto ti ricontatterà a breve.</p>
    <p>Ecco un riepilogo del messaggio che ci hai inviato:</p>
    <blockquote style="border-left:3px solid #3b82f6;padding-left:12px;color:#555">
      <p><strong>Oggetto:</strong> ${escapeHtml(oggetto)}</p>
      <p style="white-space:pre-wrap">${escapeHtml(messaggio)}</p>
    </blockquote>
    <p>A presto,<br/>Il team di Vision</p>
  `;

  try {
    const [adminRes, userRes] = await Promise.all([
      resend.emails.send({
        from: fromEmail,
        to: toEmail,
        replyTo: email,
        subject: `[Vision] Nuova richiesta: ${oggetto}`,
        html: adminHtml,
      }),
      resend.emails.send({
        from: fromEmail,
        to: email,
        subject: "Abbiamo ricevuto la tua richiesta — Vision",
        html: userHtml,
      }),
    ]);

    if (adminRes.error || userRes.error) {
      console.error("Resend error", adminRes.error, userRes.error);
      return NextResponse.json(
        { ok: false, error: "Invio email fallito" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error", err);
    return NextResponse.json(
      { ok: false, error: "Errore interno" },
      { status: 500 },
    );
  }
}
