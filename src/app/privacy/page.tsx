import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy | Vision AR",
  description:
    "Informativa sul trattamento dei dati personali ai sensi dell'art. 13 del Regolamento UE 2016/679 (GDPR).",
};

const LAST_UPDATED = "15 aprile 2026";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="pt-32 pb-24 w-full px-6 md:px-12 lg:px-24 overflow-hidden">
          {/* Hero */}
          <div className="mb-16 relative">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
            <div className="absolute top-0 -right-24 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]"></div>
            <div className="relative z-10">
              <p className="text-xs uppercase tracking-widest text-secondary font-bold mb-4">
                Informativa Legale
              </p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-none">
                Privacy <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#81ecff] to-primary">
                  Policy
                </span>
              </h1>
              <p className="max-w-2xl text-on-surface-variant text-lg font-light leading-relaxed">
                Informativa sul trattamento dei dati personali ai sensi dell'art. 13 del
                Regolamento UE 2016/679 (GDPR) e del D.Lgs. 196/2003 aggiornato.
              </p>
              <p className="text-xs uppercase tracking-widest text-on-surface-variant mt-6">
                Ultimo aggiornamento: {LAST_UPDATED}
              </p>
            </div>
          </div>

          {/* Content card */}
          <article className="max-w-4xl bg-[#24252d]/40 backdrop-blur-[24px] border border-[#47474e]/15 p-8 md:p-12 rounded-[2rem] space-y-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 blur-3xl rounded-full"></div>

            <Section number="01" title="Titolare del Trattamento">
              <p>
                Il Titolare del trattamento dei dati personali raccolti tramite il
                presente sito è:
              </p>
              <div className="bg-surface-container-low/50 border border-outline-variant/30 rounded-2xl p-6 my-4 space-y-2">
                <p className="text-on-surface-variant">
                  <strong className="text-primary">[DA COMPILARE]</strong> Ragione
                  sociale
                </p>
                <p className="text-on-surface-variant">
                  <strong className="text-primary">[DA COMPILARE]</strong> Sede legale
                </p>
                <p className="text-on-surface-variant">
                  <strong className="text-primary">[DA COMPILARE]</strong> Partita IVA /
                  Codice Fiscale
                </p>
                <p className="text-on-surface-variant">
                  <strong className="text-primary">[DA COMPILARE]</strong> PEC
                </p>
                <p className="text-on-surface-variant">
                  Email di contatto:{" "}
                  <a
                    href="mailto:domenico.formisano2001@gmail.com"
                    className="text-primary hover:underline"
                  >
                    domenico.formisano2001@gmail.com
                  </a>
                </p>
              </div>
              <p className="text-sm italic text-on-surface-variant">
                Nota: Vision è attualmente un progetto in fase di pre-lancio. I dati
                identificativi del Titolare saranno aggiornati al momento della
                costituzione legale dell'attività.
              </p>
            </Section>

            <Section number="02" title="Dati Personali Raccolti">
              <p>
                Attraverso il form presente nella pagina <em>Contattaci</em> raccogliamo
                i seguenti dati forniti volontariamente dall'utente:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
                <li>Nome e cognome</li>
                <li>Indirizzo email</li>
                <li>Tipologia di cliente (privato o azienda)</li>
                <li>Oggetto della richiesta</li>
                <li>Contenuto del messaggio</li>
              </ul>
              <p>
                Non raccogliamo categorie particolari di dati (dati sanitari, opinioni
                politiche, ecc.) né dati di minori di 14 anni.
              </p>
            </Section>

            <Section number="03" title="Finalità del Trattamento">
              <p>
                I dati personali conferiti sono trattati esclusivamente per le seguenti
                finalità:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
                <li>
                  Rispondere alle richieste di informazioni, preventivi o consulenza
                  inviate tramite il form di contatto.
                </li>
                <li>
                  Inviare all'utente un'email automatica di conferma della ricezione
                  della richiesta.
                </li>
              </ul>
              <p>
                I dati <strong>non</strong> vengono utilizzati per finalità di marketing,
                profilazione o comunicazione a terzi per scopi commerciali.
              </p>
            </Section>

            <Section number="04" title="Base Giuridica">
              <p>
                Il trattamento si fonda sul <strong>consenso esplicito</strong>{" "}
                dell'interessato, prestato mediante apposita casella di spunta al momento
                dell'invio del form, ai sensi dell'art. 6, par. 1, lett. a) del GDPR.
                Il conferimento dei dati è facoltativo; il mancato conferimento comporta
                l'impossibilità di dare seguito alla richiesta.
              </p>
            </Section>

            <Section number="05" title="Modalità di Trattamento e Destinatari">
              <p>
                I dati sono trattati in forma elettronica, con misure di sicurezza
                adeguate a prevenire perdite, accessi non autorizzati o usi illeciti.
              </p>
              <p>
                Per l'erogazione del servizio ci avvaliamo dei seguenti fornitori
                (Responsabili del Trattamento esterni):
              </p>
              <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
                <li>
                  <strong className="text-on-surface">Resend Inc.</strong> (2261 Market
                  Street, San Francisco, CA 94114, USA) — fornitore del servizio di
                  invio email transazionali. Il trasferimento dei dati verso gli Stati
                  Uniti avviene sulla base delle Clausole Contrattuali Standard
                  approvate dalla Commissione Europea (art. 46 GDPR).
                </li>
                <li>
                  <strong className="text-on-surface">Google LLC</strong> — fornitore
                  della casella email Gmail utilizzata dal Titolare per ricevere le
                  richieste.
                </li>
              </ul>
              <p>
                I dati <strong>non</strong> vengono diffusi e non sono oggetto di
                processi decisionali automatizzati.
              </p>
            </Section>

            <Section number="06" title="Periodo di Conservazione">
              <p>
                I dati personali contenuti nelle email ricevute vengono conservati per
                il tempo strettamente necessario a gestire la richiesta e per
                l'eventuale follow-up commerciale successivo, e comunque non oltre{" "}
                <strong>24 mesi</strong> dall'ultimo contatto, salvo obblighi di legge.
                L'utente può in ogni momento richiederne la cancellazione anticipata.
              </p>
            </Section>

            <Section number="07" title="Diritti dell'Interessato">
              <p>
                L'utente può esercitare in qualsiasi momento i diritti previsti dagli
                articoli 15-22 del GDPR:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
                <li>diritto di accesso ai propri dati (art. 15);</li>
                <li>diritto di rettifica (art. 16);</li>
                <li>diritto alla cancellazione — "diritto all'oblio" (art. 17);</li>
                <li>diritto di limitazione del trattamento (art. 18);</li>
                <li>diritto alla portabilità dei dati (art. 20);</li>
                <li>diritto di opposizione (art. 21);</li>
                <li>diritto di revocare il consenso in qualsiasi momento.</li>
              </ul>
              <p>
                Per esercitare questi diritti è sufficiente inviare una richiesta
                all'indirizzo{" "}
                <a
                  href="mailto:domenico.formisano2001@gmail.com"
                  className="text-primary hover:underline"
                >
                  domenico.formisano2001@gmail.com
                </a>
                . L'interessato ha inoltre diritto di proporre reclamo all'Autorità
                Garante per la Protezione dei Dati Personali (
                <a
                  href="https://www.garanteprivacy.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  garanteprivacy.it
                </a>
                ).
              </p>
            </Section>

            <Section number="08" title="Cookie">
              <p>
                Il presente sito utilizza <strong>esclusivamente cookie tecnici</strong>{" "}
                necessari al corretto funzionamento della navigazione (ad esempio per
                mantenere la sessione). Non sono presenti cookie di profilazione, né
                strumenti di analisi statistica o tracciamento pubblicitario di terze
                parti. Per tali ragioni non è richiesto alcun consenso preventivo ai
                sensi della normativa vigente.
              </p>
              <p>
                Qualora in futuro venissero introdotti cookie analitici o di marketing,
                la presente informativa sarà aggiornata e sarà richiesto un consenso
                specifico tramite apposito banner.
              </p>
            </Section>

            <Section number="09" title="Modifiche alla Presente Informativa">
              <p>
                Il Titolare si riserva il diritto di modificare la presente informativa
                in qualsiasi momento, dandone comunicazione agli utenti mediante
                pubblicazione della versione aggiornata su questa stessa pagina. Si
                invita l'utente a consultarla periodicamente.
              </p>
              <p className="text-sm text-on-surface-variant">
                Versione in vigore dal <strong>{LAST_UPDATED}</strong>.
              </p>
            </Section>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative">
      <div className="flex items-baseline gap-4 mb-4">
        <span className="text-xs font-bold tracking-widest text-secondary">
          {number}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-on-surface">
          {title}
        </h2>
      </div>
      <div className="space-y-4 text-on-surface-variant leading-relaxed pl-0 md:pl-10">
        {children}
      </div>
    </section>
  );
}
