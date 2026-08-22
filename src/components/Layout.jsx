import Header from './Header';
import Footer from './Footer';

export default function Layout({ currentPage, onNavigate, hero, children }) {
  return (
    <>
      <Header currentPage={currentPage} onNavigate={onNavigate} />
      {hero}
      <main className="container">{children}</main>
      <Footer />
    </>
  );
}
