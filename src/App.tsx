import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Activity, Dumbbell, Route, CheckCircle2, Mail, MapPin, Phone, Star, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    const formData = new FormData(e.currentTarget);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      setFormStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setFormStatus('error');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background-cream text-primary font-sans selection:bg-primary selection:text-white">
      {/* Header */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background-cream/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter" onClick={() => scrollTo('accueil')} style={{cursor: 'pointer'}}>
            VD<span className="font-light">Coach</span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden xl:flex gap-8 font-medium text-sm tracking-wide">
            <button onClick={() => scrollTo('accueil')} className="hover:text-primary/70 transition-colors">Accueil</button>
            <button onClick={() => scrollTo('prestations')} className="hover:text-primary/70 transition-colors">Prestations</button>
            <button onClick={() => scrollTo('tarifs')} className="hover:text-primary/70 transition-colors">Tarifs</button>
            <button onClick={() => scrollTo('temoignages')} className="hover:text-primary/70 transition-colors">Témoignages</button>
            <button onClick={() => scrollTo('faq')} className="hover:text-primary/70 transition-colors">FAQ</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-primary/70 transition-colors">Contact</button>
          </nav>

          {/* Action Button (Desktop) */}
          <a 
            href="https://cal.eu/vdcoach-sportif"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex bg-primary text-background-cream px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-light transition-colors"
          >
            Réserver une séance
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background-cream shadow-lg py-6 px-6 flex flex-col gap-6 font-medium text-lg">
            <button onClick={() => scrollTo('accueil')} className="text-left">Accueil</button>
            <button onClick={() => scrollTo('prestations')} className="text-left">Prestations</button>
            <button onClick={() => scrollTo('tarifs')} className="text-left">Tarifs</button>
            <button onClick={() => scrollTo('contact')} className="text-left text-primary">Contact</button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="accueil" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-primary/80 font-medium tracking-widest uppercase text-sm mb-4">VDCoach Sportif</h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Votre <span className="italic font-light">coach sportif</span> à domicile sur Nantes.
            </h1>
            <p className="text-lg md:text-xl text-primary/80 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Un accompagnement premium et sur-mesure pour atteindre vos objectifs physiques et mentaux, directement chez vous.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://cal.eu/vdcoach-sportif"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-background-cream px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-primary-light transition-colors group text-lg"
              >
                Réserver ma séance
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={() => scrollTo('prestations')}
                className="bg-transparent border border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary/5 transition-colors text-lg"
              >
                Découvrir les prestations
              </button>
            </div>
          </motion.div>
          {/* Hero Image Concept */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none relative mt-10 lg:mt-0">
             <div className="aspect-[4/5] bg-primary/5 rounded-[2.5rem] overflow-hidden relative border border-primary/10">
               {/* Suggestion for user to place their image here, using an elegant placeholder for now */}
               <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-primary/40">
                  <div className="w-24 h-24 border-4 border-primary/20 rounded-full flex items-center justify-center mb-6">
                     <span className="text-4xl font-bold">VD</span>
                  </div>
                  <p className="text-sm">Emplacement pour votre<br/>photo professionnelle</p>
               </div>
             </div>
             
             {/* Floating badge */}
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg">100%</p>
                  <p className="text-sm text-primary/70 font-medium">Sur-mesure</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Prestations Section */}
      <section id="prestations" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center md:text-left mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Des programmes adaptés à vos ambitions.</h2>
              <p className="text-lg text-primary/70">Quel que soit votre niveau ou votre objectif, nous définissons ensemble le chemin pour y parvenir efficacement et en toute sécurité.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-background-cream p-10 rounded-[2rem] hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-8 shadow-sm">
                <Activity size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Remise en forme</h3>
              <p className="text-primary/70 leading-relaxed mb-6">
                Retrouvez vitalité et énergie au quotidien. Un programme progressif pour tonifier votre corps et améliorer votre cardio sans brusquer.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-primary text-background-cream p-10 rounded-[2rem] hover:-translate-y-2 transition-transform duration-300 shadow-xl">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-background-cream mb-8 backdrop-blur-sm">
                <Dumbbell size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Musculation</h3>
              <p className="text-background-cream/80 leading-relaxed mb-6">
                Développement musculaire, force et posture. Entraînements ciblés avec matériel professionnel apporté directement chez vous.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-background-cream p-10 rounded-[2rem] hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-8 shadow-sm">
                <Route size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Course à pieds</h3>
              <p className="text-primary/70 leading-relaxed mb-6">
                Préparation spécifique (10km, semi, marathon) ou initiation. Accompagnement technique en extérieur sur les bords de l'Erdre ou la Loire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs Section */}
      <section id="tarifs" className="py-24 px-6 bg-background-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Des tarifs clairs, sans engagement.</h2>
            <p className="text-lg text-primary/70">Séances d'une heure, matériel inclus, directement à votre domicile sur Nantes et son agglomération.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Solo */}
            <div className="bg-white p-8 rounded-[2rem] border border-primary/10 flex flex-col items-center text-center">
              <h3 className="text-xl font-medium mb-2">Séance Solo</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-bold">55€</span>
                <span className="text-primary/60">/h</span>
              </div>
              <p className="text-sm text-primary/70 mb-8 border-t border-primary/5 pt-6 w-full">
                Accompagnement 100% individualisé. La formule idéale pour une progression optimale.
              </p>
              <a href="https://cal.eu/vdcoach-sportif" target="_blank" rel="noopener noreferrer" className="block text-center mt-auto w-full py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors">
                Choisir
              </a>
            </div>

            {/* Duo */}
            <div className="bg-primary text-white p-8 rounded-[2rem] shadow-xl flex flex-col items-center text-center relative transform md:-translate-y-4">
              <div className="absolute top-0 transform -translate-y-1/2 bg-white text-primary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Populaire
              </div>
              <h3 className="text-xl font-medium mb-2 mt-4">Séance Duo</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-bold">65€</span>
                <span className="text-white/60">/h</span>
              </div>
              <p className="text-sm text-white/80 mb-8 border-t border-white/10 pt-6 w-full">
                Soit 32,50€ par personne. Idéal pour se motiver en couple ou entre amis.
              </p>
              <a href="https://cal.eu/vdcoach-sportif" target="_blank" rel="noopener noreferrer" className="block text-center mt-auto w-full py-3 rounded-full bg-white text-primary font-semibold hover:bg-background-cream transition-colors">
                Choisir
              </a>
            </div>

            {/* Trio */}
            <div className="bg-white p-8 rounded-[2rem] border border-primary/10 flex flex-col items-center text-center">
              <h3 className="text-xl font-medium mb-2">Séance Trio</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-bold">75€</span>
                <span className="text-primary/60">/h</span>
              </div>
              <p className="text-sm text-primary/70 mb-8 border-t border-primary/5 pt-6 w-full">
                Soit 25€ par personne. Créez votre petit groupe pour des séances conviviales.
              </p>
              <a href="https://cal.eu/vdcoach-sportif" target="_blank" rel="noopener noreferrer" className="block text-center mt-auto w-full py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors">
                Choisir
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="temoignages" className="py-24 px-6 bg-primary text-background-cream">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ils ont atteint leurs objectifs.</h2>
            <p className="text-lg text-background-cream/70">Ne me croyez pas sur parole, écoutez ceux qui l'ont fait.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Sophie M.", goal: "Remise en forme", text: "Après ma grossesse, j'avais besoin d'être accompagnée. VDCoach a su me redonner confiance avec un programme doux mais efficace." },
              { name: "Thomas R.", goal: "Prise de masse", text: "Je stagnais à la salle. Le fait d'avoir un coach à domicile m'a fait gagner un temps précieux et les résultats sont là." },
              { name: "Claire & Julien", goal: "Préparation 10km", text: "La formule Duo était parfaite pour nous motiver à courir en hiver. On a battu notre record personnel !" }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem]"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="italic mb-6 text-background-cream/90">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-background-cream/60">{testimonial.goal}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Questions fréquentes</h2>
          </motion.div>

          <div className="space-y-4">
            {[
              { q: "Dois-je acheter du matériel ?", a: "Non, je me déplace avec tout le matériel nécessaire (haltères, élastiques, tapis, kettlebells) pour assurer une séance complète." },
              { q: "Quelle est la zone de déplacement ?", a: "Je me déplace gratuitement sur Nantes et dans un rayon de 15km autour (Rezé, Saint-Herblain, Orvault, Carquefou...)." },
              { q: "Combien de séances par semaine sont recommandées ?", a: "Pour des résultats visibles, je recommande 2 séances par semaine. Mais 1 séance encadrée + 1 séance en autonomie (programme fourni) est aussi un excellent compromis." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-primary/10 rounded-2xl overflow-hidden"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-lg hover:bg-background-cream transition-colors"
                >
                  {item.q}
                  <ChevronDown className={`transform transition-transform transition-duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-primary/70"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-background-cream">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Prêt à commencer ?</h2>
            <p className="text-lg text-primary/70 mb-8">
              Le plus simple pour démarrer est de prendre rendez-vous directement dans mon agenda. Vous pouvez aussi me laisser un message classique.
            </p>
            <a 
              href="https://cal.eu/vdcoach-sportif" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-light transition-colors mb-12 shadow-lg"
            >
              Planifier un appel gratuit
              <ArrowRight size={20} />
            </a>

            <div className="space-y-6 border-t border-primary/10 pt-8 mt-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-background-cream rounded-full flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Zone d'intervention</h4>
                  <p className="text-primary/70">Nantes et agglomération</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-background-cream rounded-full flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Téléphone</h4>
                  <p className="text-primary/70">06 62 11 07 86</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-background-cream rounded-full flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-primary/70">vdcoachsportif@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-background-cream p-8 md:p-10 rounded-[2rem]">
            <form name="contact-coach" method="POST" data-netlify="true" className="flex flex-col gap-6" onSubmit={handleFormSubmit}>
              <input type="hidden" name="form-name" value="contact-coach" />
              <div>
                <label htmlFor="nom" className="block text-sm font-semibold mb-2">Nom & Prénom</label>
                <input 
                  type="text" 
                  id="nom" 
                  name="nom"
                  className="w-full bg-white px-4 py-3 rounded-xl border border-primary/10 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Jean Dupont"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    className="w-full bg-white px-4 py-3 rounded-xl border border-primary/10 focus:outline-none focus:border-primary transition-colors"
                    placeholder="jean@exemple.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">Téléphone</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone" 
                    className="w-full bg-white px-4 py-3 rounded-xl border border-primary/10 focus:outline-none focus:border-primary transition-colors"
                    placeholder="06 XX XX XX XX"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">Votre message / Vos objectifs</label>
                <textarea 
                  id="message"
                  name="message" 
                  rows={4}
                  className="w-full bg-white px-4 py-3 rounded-xl border border-primary/10 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Bonjour, je souhaite me remettre en forme..."
                  required
                ></textarea>
              </div>

              {formStatus === 'success' && (
                <div className="bg-green-50 text-green-800 p-4 rounded-xl border border-green-200">
                  <p className="font-bold">Message envoyé avec succès !</p>
                  <p className="text-sm">Je vous recontacte très rapidement.</p>
                </div>
              )}
              {formStatus === 'error' && (
                <div className="bg-red-50 text-red-800 p-4 rounded-xl border border-red-200">
                  <p className="font-bold">Une erreur est survenue.</p>
                  <p className="text-sm">Veuillez réessayer ou me contacter par téléphone.</p>
                </div>
              )}

              <button 
                type="submit" 
                disabled={formStatus === 'submitting'}
                className="bg-primary text-white py-4 rounded-full font-semibold text-lg hover:bg-primary-light transition-colors mt-2 disabled:opacity-70 transition-opacity"
              >
                {formStatus === 'submitting' ? 'Envoi en cours...' : 'Envoyer ma demande'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold tracking-tighter">
            VD<span className="font-light">Coach</span>
          </div>
          <p className="text-white/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} VDCoach Sportif Nantes. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

