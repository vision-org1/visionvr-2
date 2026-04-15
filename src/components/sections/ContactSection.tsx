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
            Entra nel <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#81ecff] to-primary">
              Portale
            </span>
          </h1>
          <p className="max-w-2xl text-on-surface-variant text-lg md:text-xl font-light leading-relaxed">
            Inizia oggi la tua esperienza immersiva. Scrivici per un preventivo o una consulenza gratuita. 
            I nostri esperti di realtà aumentata trasformeranno la tua visione in realtà digitale.
          </p>
        </div>
      </div>

      {/* Main Content Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Form Card */}
        <div className="lg:col-span-7 bg-[#24252d]/40 backdrop-blur-[24px] border border-[#47474e]/15 p-8 md:p-12 rounded-[2rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 blur-3xl rounded-full"></div>
          <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-secondary font-bold">Nome</label>
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
                <label className="text-xs uppercase tracking-widest text-secondary font-bold">Cognome</label>
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
              <label className="text-xs uppercase tracking-widest text-secondary font-bold">Email</label>
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
              <label className="text-xs uppercase tracking-widest text-secondary font-bold">Tipo di Cliente</label>
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
              <label className="text-xs uppercase tracking-widest text-secondary font-bold">Oggetto</label>
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
              <label className="text-xs uppercase tracking-widest text-secondary font-bold">Messaggio</label>
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

        {/* Sidebar Info Section */}
        <aside className="lg:col-span-5 flex flex-col gap-8">
          {/* Contact Info Card */}
          <div className="bg-[#24252d]/40 backdrop-blur-[24px] border border-[#47474e]/15 p-8 rounded-[2rem] flex-1">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="text-primary material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
              Contatti Diretti
            </h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>alternate_email</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-secondary font-bold mb-1">Email di Supporto</p>
                  <p className="text-on-surface text-lg">simone@omosex.it</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-secondary font-bold mb-1">Headquarters</p>
                  <p className="text-on-surface text-lg"><br /></p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-tertiary/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-secondary font-bold mb-1">Orari Portale</p>
                  <p className="text-on-surface text-lg">Lun - Ven: 09:00 - 19:00</p>
                </div>
              </div>
            </div>

            
          </div>

          {/* Interactive Map Teaser */}
          <div className="h-64 rounded-[2rem] overflow-hidden relative group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO4CD8qEHY7FRG7S6v8z-0lJFxdD5vVVLxI9gtu0kOrqkiVEKrfW8jKm_oP5vKTMZHcqoiJVnY9pzu-dS6KM1E-_Qw5iUWgvLVt4vxG2le7Yz85oxJWJAFwRFmg06s_UwZYQKdEBhHUEmoOrFReoRqldkPxE75JKPE8NRpKZRPEYeUEd2H6XfZCTMmthjLSlVVNUpeV2K5PpCuQOGlzoj8fLzbqRPkEWJeiA_A4Od8rzy2MJHb5FrMFVN1AhLna7_sN44va_l05R0" 
              alt="Location Map" 
              className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <div className="flex items-center gap-2 bg-primary/20 backdrop-blur-md px-3 py-1 rounded-full border border-primary/30 mb-2 w-fit">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-[10px] font-bold text-primary tracking-widest uppercase">Live Location</span>
              </div>
              <p className="text-xl font-bold tracking-tight">Portici HQ</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a //rimosso bottone e inserito link a google
                href="https://www.google.com/maps/place/80055+Portici+NA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-on-primary px-6 py-3 rounded-full font-bold text-sm inline-block"
              >
                Apri Mappa
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
