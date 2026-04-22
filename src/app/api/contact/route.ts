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

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.visionvr.it";
  const logoUrl = `${siteUrl}/logo-wordmark.png`;

  const userHtml = `<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Abbiamo ricevuto la tua richiesta</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1a1a1a;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f4f5;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">

          <tr>
            <td align="center" style="background-color:#050505;padding:40px 24px;">
              <img src="${logoUrl}" alt="Vision" width="320" style="display:block;height:auto;max-width:320px;width:100%;" />
            </td>
          </tr>

          <tr>
            <td style="padding:48px 40px 16px 40px;">
              <h1 style="margin:0 0 16px 0;font-size:28px;line-height:1.3;font-weight:700;color:#050505;letter-spacing:-0.02em;">
                Ciao ${escapeHtml(nome)}, grazie di averci scritto!
              </h1>
              <p style="margin:0;font-size:16px;line-height:1.6;color:#404040;">
                Abbiamo ricevuto correttamente la tua richiesta e non vediamo l'ora di scoprire come possiamo portare la realtà virtuale nel tuo prossimo evento.
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:24px 40px 8px 40px;">
              <p style="margin:0 0 16px 0;font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#0d59f2;">
                Cosa succede adesso
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="32" valign="top" style="padding:4px 0;">
                    <div style="width:24px;height:24px;border-radius:50%;background:linear-gradient(135deg,#13d6ec,#0d59f2);color:#ffffff;font-size:13px;font-weight:700;text-align:center;line-height:24px;">1</div>
                  </td>
                  <td valign="top" style="padding:4px 0 16px 12px;font-size:15px;line-height:1.5;color:#404040;">
                    Un nostro esperto leggerà la tua richiesta entro <strong>24 ore lavorative</strong>.
                  </td>
                </tr>
                <tr>
                  <td width="32" valign="top" style="padding:4px 0;">
                    <div style="width:24px;height:24px;border-radius:50%;background:linear-gradient(135deg,#13d6ec,#0d59f2);color:#ffffff;font-size:13px;font-weight:700;text-align:center;line-height:24px;">2</div>
                  </td>
                  <td valign="top" style="padding:4px 0 16px 12px;font-size:15px;line-height:1.5;color:#404040;">
                    Ti ricontatteremo con una proposta su misura per il tuo evento.
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:16px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f7f7f8;border-radius:12px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 12px 0;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#71717a;">
                      Riepilogo della tua richiesta
                    </p>
                    <p style="margin:0 0 8px 0;font-size:15px;line-height:1.5;color:#1a1a1a;">
                      <strong style="color:#050505;">Oggetto:</strong> ${escapeHtml(oggetto)}
                    </p>
                    <p style="margin:0;font-size:15px;line-height:1.6;color:#404040;white-space:pre-wrap;">${escapeHtml(messaggio)}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding:32px 40px 8px 40px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="border-radius:8px;background:linear-gradient(135deg,#13d6ec,#0d59f2);">
                    <a href="${siteUrl}/solutions" style="display:inline-block;padding:14px 32px;font-size:15px;font-weight:700;color:#050505;text-decoration:none;border-radius:8px;">
                      Scopri le nostre esperienze
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:32px 40px 40px 40px;">
              <p style="margin:0;font-size:15px;line-height:1.6;color:#404040;">
                A presto,<br/>
                <strong style="color:#050505;">Il team Vision</strong>
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:0 40px;">
              <div style="height:1px;background-color:#e4e4e7;"></div>
            </td>
          </tr>

          <tr>
            <td style="padding:32px 40px;">
              <p style="margin:0 0 16px 0;font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#71717a;">
                Contatti
              </p>
              <p style="margin:0 0 8px 0;font-size:14px;line-height:1.6;color:#404040;">
                Email: <a href="mailto:info@visionvr.it" style="color:#0d59f2;text-decoration:none;">info@visionvr.it</a>
              </p>
              <p style="margin:0 0 8px 0;font-size:14px;line-height:1.6;color:#404040;">
                Telefono: <a href="tel:+393337948898" style="color:#0d59f2;text-decoration:none;">+39 333 79 48 898</a>
              </p>
              <p style="margin:0;font-size:14px;line-height:1.6;color:#404040;">
                Sito: <a href="${siteUrl}" style="color:#0d59f2;text-decoration:none;">www.visionvr.it</a>
              </p>
            </td>
          </tr>

        </table>

        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">
          <tr>
            <td align="center" style="padding:24px 16px;">
              <p style="margin:0 0 8px 0;font-size:12px;line-height:1.5;color:#a1a1aa;">
                Questa è un'email automatica inviata in risposta alla tua richiesta di contatto.
              </p>
              <p style="margin:0;font-size:12px;line-height:1.5;color:#a1a1aa;">
                &copy; ${new Date().getFullYear()} Vision &middot; <a href="${siteUrl}/privacy" style="color:#a1a1aa;text-decoration:underline;">Privacy Policy</a>
              </p>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>
</body>
</html>`;

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
