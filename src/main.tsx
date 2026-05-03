import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MentionsLegales from './MentionsLegales';
import PolitiqueConfidentialite from './PolitiqueConfidentialite';
import './index.css';

type Page = 'home' | 'mentions' | 'confidentialite';

function Root() {
  const [page, setPage] = useState<Page>('home');

  const goHome = () => {
    setPage('home');
    window.scrollTo(0, 0);
  };

  if (page === 'mentions') return <MentionsLegales onBack={goHome} />;
  if (page === 'confidentialite') return <PolitiqueConfidentialite onBack={goHome} />;
  return <App onNavigate={setPage} />;
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Root />);
