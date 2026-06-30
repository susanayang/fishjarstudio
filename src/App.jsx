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

export default function App() {
  const [currentPage, setCurrentPage] = useState('about');
  const PageComponent = PAGES[currentPage];

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      <PageComponent onNavigate={setCurrentPage} />
    </Layout>
  );
}
