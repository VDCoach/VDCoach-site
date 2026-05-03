export default function PolitiqueConfidentialite({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-background-cream text-primary font-sans">
      {/* Header simple */}
      <header className="bg-primary text-white py-6 px-6">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <button onClick={onBack} className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2">
            ← Retour
          </button>
          <div className="text-2xl font-bold tracking-tighter">VD<span className="font-light">Coach</span></div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-10">Politique de confidentialité</h1>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">1. Responsable du traitement</h2>
          <p className="text-primary/70 leading-relaxed">
            <strong>David Voisard</strong> — Auto-entrepreneur<br />
            SIRET : 819 687 948 00011<br />
            Saint-Herblain (44800)<br />
            Email : vdcoachsportif@gmail.com
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">2. Données collectées</h2>
          <p className="text-primary/70 leading-relaxed mb-4">
            Le site vdcoach.fr collecte les données personnelles suivantes :
          </p>
          <div className="bg-white rounded-2xl p-6 border border-primary/10 space-y-4">
            <div>
              <p className="font-semibold mb-1">Via le formulaire de contact</p>
              <p className="text-primary/70 text-sm">Nom, adresse email, numéro de téléphone, message. Ces données sont collectées dans le but de répondre à vos demandes de contact ou de devis.</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Via Google Analytics</p>
              <p className="text-primary/70 text-sm">Données de navigation anonymisées (pages visitées, durée de visite, type d'appareil, localisation approximative). Ces données sont utilisées pour améliorer le site et comprendre son audience.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">3. Base légale du traitement</h2>
          <p className="text-primary/70 leading-relaxed">
            Les traitements reposent sur les bases légales suivantes :<br /><br />
            — <strong>Formulaire de contact</strong> : intérêt légitime (répondre à une demande entrante) et, le cas échéant, exécution d'un contrat.<br />
            — <strong>Google Analytics</strong> : consentement de l'utilisateur (via les paramètres de cookies du navigateur) ou intérêt légitime à l'analyse d'audience anonymisée.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">4. Durée de conservation</h2>
          <p className="text-primary/70 leading-relaxed">
            Les données du formulaire de contact sont conservées pendant une durée maximale de <strong>3 ans</strong> à compter du dernier contact, puis supprimées.<br /><br />
            Les données collectées par Google Analytics sont conservées selon la politique de Google, généralement <strong>14 mois</strong> (paramètre par défaut).
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">5. Partage des données</h2>
          <p className="text-primary/70 leading-relaxed">
            Vos données ne sont ni vendues ni cédées à des tiers. Elles peuvent être transmises aux prestataires techniques suivants, dans la stricte mesure nécessaire à leur mission :<br /><br />
            — <strong>Netlify</strong> (hébergement et réception du formulaire de contact) — États-Unis, garanties RGPD applicables.<br />
            — <strong>Google LLC</strong> (Google Analytics) — États-Unis, encadrement par les clauses contractuelles types de la Commission européenne.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">6. Cookies</h2>
          <p className="text-primary/70 leading-relaxed">
            Le site utilise des cookies déposés par <strong>Google Analytics</strong> afin de mesurer l'audience. Ces cookies ne collectent pas de données permettant de vous identifier directement.<br /><br />
            Vous pouvez désactiver ces cookies à tout moment via les paramètres de votre navigateur ou via l'extension <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Google Analytics Opt-out</a>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">7. Vos droits</h2>
          <p className="text-primary/70 leading-relaxed">
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants :<br /><br />
            — Droit d'<strong>accès</strong> à vos données<br />
            — Droit de <strong>rectification</strong><br />
            — Droit à l'<strong>effacement</strong> (« droit à l'oubli »)<br />
            — Droit à la <strong>limitation</strong> du traitement<br />
            — Droit à la <strong>portabilité</strong> de vos données<br />
            — Droit d'<strong>opposition</strong> au traitement<br /><br />
            Pour exercer ces droits, contactez-nous à : <a href="mailto:vdcoachsportif@gmail.com" className="underline hover:text-primary">vdcoachsportif@gmail.com</a><br /><br />
            En cas de réclamation, vous pouvez saisir la <strong>CNIL</strong> : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">www.cnil.fr</a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">8. Modifications</h2>
          <p className="text-primary/70 leading-relaxed">
            Cette politique de confidentialité peut être mise à jour à tout moment. La date de dernière mise à jour figure en bas de page. Nous vous invitons à la consulter régulièrement.
          </p>
        </section>

        <p className="text-sm text-primary/40 mt-12">Dernière mise à jour : mai 2026</p>
      </main>

      <footer className="bg-primary text-white py-8 px-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} VDCoach Sportif Nantes. Tous droits réservés.
      </footer>
    </div>
  );
}
