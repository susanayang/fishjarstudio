import { useState } from 'react';
import Layout from './components/Layout';
import About from './pages/About';
import Games from './pages/Games';
import Services from './pages/Services';

const PAGES = {
  about: About,
  games: Games,
  services: Services,
};

function HomeHero() {
  return (
    <div className="home-hero-wrap">
      <img
        src="/home_hero.png"
        alt="Fishjar Studio hero"
        className="home-hero-image"
      />
      <div className="home-hero-gradient" />
      <div className="home-hero-text">
        <h1 className="home-hero-title">Fishjar Studio</h1>
        <p className="home-hero-subtitle">A small vessel for untold stories and epic RPGs</p>
      </div>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('about');
  const PageComponent = PAGES[currentPage];
  const isHome = currentPage === 'about';

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage} hero={isHome ? <HomeHero /> : null}>
      <PageComponent onNavigate={setCurrentPage} />
    </Layout>
  );
}
