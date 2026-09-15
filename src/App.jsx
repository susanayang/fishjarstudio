import { useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Games from './pages/Games';
import Services from './pages/Services';

const PAGES = {
  home: Home,
  about: About,
  games: Games,
  services: Services,
};

function HomeHero() {
  return (
    <div className="hero-wrap">
      <img
        src="/home_hero.png"
        alt="Fishjar Studio hero"
        className="hero-image"
      />
      <img
        src="/home_hero.svg"
        alt=""
        className="hero-svg"
      />
      <div className="hero-gradient" />
      <div className="hero-text">
        <h1 className="hero-title">Fishjar Studio</h1>
        <p className="hero-subtitle">A small vessel for untold stories and epic RPGs</p>
      </div>
    </div>
  );
}

function AboutHero() {
  return (
    <div className="hero-wrap">
      <img src="/about_hero.png" alt="About" className="hero-image" />
      <div className="hero-gradient" />
      <div className="hero-text">
        <h1 className="hero-title">About Us</h1>
      </div>
    </div>
  );
}

function GamesHero() {
  return (
    <div className="hero-wrap">
      <img src="/games_hero.png" alt="Games" className="hero-image" />
      <div className="hero-gradient" />
      <div className="hero-text">
        <h1 className="hero-title">Daughters <br /> of Tian</h1>
      </div>
    </div>
  );
}

function ServicesHero() {
  return (
    <div className="hero-wrap">
      <img src="/services_hero.png" alt="Services" className="hero-image" />
      <div className="hero-gradient" />
      <div className="hero-text">
        <h1 className="hero-title">Services</h1>
      </div>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const PageComponent = PAGES[currentPage];
  const isHome = currentPage === 'home';
  const isAbout = currentPage === 'about';
  const isGames = currentPage === 'games';
  const isServices = currentPage === 'services';

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage} hero={isHome ? <HomeHero /> : isAbout ? <AboutHero /> : isGames ? <GamesHero /> : isServices ? <ServicesHero /> : null}>
      <PageComponent onNavigate={setCurrentPage} />
    </Layout>
  );
}
