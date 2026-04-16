"use client";

import { useState } from "react";
import Link from "next/link";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [clientType, setClientType] = useState("Privato");
  const [oggetto, setOggetto] = useState("");
  const [messaggio, setMessaggio] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, cognome, email, clientType, oggetto, messaggio }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        setErrorMsg(data.error ?? "Errore durante l'invio");
        setStatus("error");
        return;
      }
      setStatus("success");
      setNome(""); setCognome(""); setEmail(""); setOggetto(""); setMessaggio("");
      setClientType("Privato");
      setPrivacyAccepted(false);
    } catch {
      setErrorMsg("Errore di rete");
      setStatus("error");
    }
  }

  return (
    <section className="pt-32 pb-24 w-full px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Hero Section */}
      <div className="mb-20 relative">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-0 -right-24 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]"></div>
        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-none">
            Entra nel  
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#81ecff] to-primary">
              Portale
            </span>
            <br />
           
          </h1>
          <p className="max-w-2xl text-on-surface-variant text-lg md:text-xl font-light leading-relaxed">
            Inizia oggi la tua esperienza immersiva. Scrivici per un preventivo o una consulenza gratuita. 
            I nostri esperti di realtà aumentata trasformeranno la tua visione in realtà digitale.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto">
        {/* Contact Form Card */}
        <div className="bg-[#24252d]/40 backdrop-blur-[24px] border border-[#47474e]/15 p-8 md:p-12 rounded-[2rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 blur-3xl rounded-full"></div>
          <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Nome</label>
                <input
                  type="text"
                  name="nome"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Mario"
                  className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-on-surface transition-all duration-300 py-3"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Cognome</label>
                <input
                  type="text"
                  name="cognome"
                  required
                  value={cognome}
                  onChange={(e) => setCognome(e.target.value)}
                  placeholder="Rossi"
                  className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-on-surface transition-all duration-300 py-3"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Email</label>
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="mario.rossi@vision.ar"
                className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-on-surface transition-all duration-300 py-3"
              />
            </div>

            <div className="space-y-4">
              <label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Tipo di Cliente</label>
              <div className="flex gap-4">
                <label className="flex-1 cursor-pointer group">
                  <input type="radio" name="client_type" value="Privato" className="hidden peer" checked={clientType === "Privato"} onChange={() => setClientType("Privato")} />
                  <div className="px-6 py-4 rounded-xl border border-outline-variant bg-surface-container peer-checked:border-primary peer-checked:bg-primary/10 transition-all text-center group-hover:border-primary/50">
                    <span className="text-on-surface-variant peer-checked:text-primary font-medium">Privato</span>
                  </div>
                </label>
                <label className="flex-1 cursor-pointer group">
                  <input type="radio" name="client_type" value="Azienda" className="hidden peer" checked={clientType === "Azienda"} onChange={() => setClientType("Azienda")} />
                  <div className="px-6 py-4 rounded-xl border border-outline-variant bg-surface-container peer-checked:border-primary peer-checked:bg-primary/10 transition-all text-center group-hover:border-primary/50">
                    <span className="text-on-surface-variant peer-checked:text-primary font-medium">Azienda</span>
                  </div>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Oggetto</label>
              <input
                type="text"
                name="oggetto"
                required
                value={oggetto}
                onChange={(e) => setOggetto(e.target.value)}
                placeholder="Richiesta Preventivo Evento"
                className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-on-surface transition-all duration-300 py-3"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Messaggio</label>
              <textarea
                name="messaggio"
                required
                value={messaggio}
                onChange={(e) => setMessaggio(e.target.value)}
                placeholder="Descrivi il tuo progetto..."
                rows={4}
                className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 text-on-surface transition-all duration-300 py-3 resize-none"
              ></textarea>
            </div>

            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                required
                checked={privacyAccepted}
                onChange={(e) => setPrivacyAccepted(e.target.checked)}
                className="mt-1 w-5 h-5 rounded border-outline-variant bg-surface-container-low accent-primary cursor-pointer shrink-0"
              />
              <span className="text-xs text-on-surface-variant leading-relaxed">
                Ho letto la{" "}
                <Link
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Privacy Policy
                </Link>{" "}
                e acconsento al trattamento dei miei dati personali per rispondere alla
                mia richiesta, ai sensi dell'art. 6, par. 1, lett. a) del Regolamento UE
                2016/679 (GDPR).
              </span>
            </label>

            <button
              type="submit"
              disabled={status === "sending" || !privacyAccepted}
              className="w-full py-5 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold text-lg tracking-tight hover:shadow-[0_0_20px_rgba(129,236,255,0.4)] active:scale-95 transition-all duration-150 flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Invio in corso..." : "Invia Messaggio"}
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                rocket_launch
              </span>
            </button>

            {status === "success" && (
              <p className="text-center text-primary font-medium">
                Messaggio inviato! Ti abbiamo mandato una conferma via email.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-red-400 font-medium">
                {errorMsg ?? "Errore durante l'invio, riprova."}
              </p>
            )}
          </form>
        </div>

        {/* Contatti Diretti - sotto il form */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="mailto:simone@omosex.it"
            className="bg-[#24252d]/40 backdrop-blur-[24px] border border-[#47474e]/15 p-6 rounded-2xl flex gap-4 items-center hover:border-primary/40 hover:bg-[#24252d]/60 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>alternate_email</span>
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-1">Email</p>
              <p className="text-on-surface text-lg truncate">simone@omosex.it</p>
            </div>
          </a>

          <a
            href="tel:+393337948898"
            className="bg-[#24252d]/40 backdrop-blur-[24px] border border-[#47474e]/15 p-6 rounded-2xl flex gap-4 items-center hover:border-primary/40 hover:bg-[#24252d]/60 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-1">Telefono</p>
              <p className="text-on-surface text-lg">+39 333 79 48 898</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
