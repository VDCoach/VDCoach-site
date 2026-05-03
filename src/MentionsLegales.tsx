export default function MentionsLegales({ onBack }: { onBack: () => void }) {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-10">Mentions légales</h1>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">1. Éditeur du site</h2>
          <p className="text-primary/70 leading-relaxed">
            Le site <strong>vdcoach.fr</strong> est édité par :<br /><br />
            <strong>David Voisard</strong><br />
            Auto-entrepreneur — Coaching sportif<br />
            SIRET : 819 687 948 00011<br />
            Siège social : Saint-Herblain (44800)<br />
            Email : vdcoachsportif@gmail.com<br />
            Téléphone : 06 62 11 07 86
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">2. Hébergement</h2>
          <p className="text-primary/70 leading-relaxed">
            Le site est hébergé par :<br /><br />
            <strong>Netlify, Inc.</strong><br />
            512 2nd Street, Suite 200<br />
            San Francisco, CA 94107 — États-Unis<br />
            Site : <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">www.netlify.com</a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">3. Propriété intellectuelle</h2>
          <p className="text-primary/70 leading-relaxed">
            L'ensemble du contenu du site vdcoach.fr (textes, images, graphismes, logo, icônes) est la propriété exclusive de David Voisard, sauf mention contraire. Toute reproduction, distribution, modification ou utilisation de ces contenus, sans autorisation expresse et préalable de l'éditeur, est strictement interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">4. Responsabilité</h2>
          <p className="text-primary/70 leading-relaxed">
            David Voisard s'efforce d'assurer l'exactitude et la mise à jour des informations publiées sur ce site. Toutefois, il ne peut garantir l'exhaustivité ni l'absence d'erreur. L'éditeur se réserve le droit de modifier les contenus à tout moment et sans préavis. L'utilisation des informations contenues sur le site se fait sous la seule responsabilité de l'utilisateur.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">5. Liens hypertextes</h2>
          <p className="text-primary/70 leading-relaxed">
            Le site peut contenir des liens vers des sites tiers. David Voisard n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leurs pratiques en matière de protection des données.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">6. Droit applicable</h2>
          <p className="text-primary/70 leading-relaxed">
            Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
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
