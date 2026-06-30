import Header from './Header';
import Footer from './Footer';

export default function Layout({ currentPage, onNavigate, children }) {
  return (
    <>
      <Header currentPage={currentPage} onNavigate={onNavigate} />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
}
