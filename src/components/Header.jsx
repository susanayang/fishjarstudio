import { studio } from '../data/studio';

export default function Header({ currentPage, onNavigate }) {
  return (
    <header className="site-header">
      <div className="header-banner">
        <button
          className="brand-logo"
          type="button"
          onClick={() => onNavigate('home')}
          aria-label={`${studio.name} home`}
        >
          <img
            src="/fishjar_logo_cropped.png"
            alt={studio.name}
            className="brand-logo-image"
          />
        </button>
        <nav className="header-nav">
          {studio.nav.map((item) => (
            <button
              key={item.id}
              className="nav-link"
              type="button"
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
