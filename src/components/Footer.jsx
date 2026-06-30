import { studio } from '../data/studio';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {studio.name}</span>
        <a href={`mailto:${studio.contact.email}`}>{studio.contact.email}</a>
      </div>
    </footer>
  );
}
