import { studio } from '../data/studio';

export default function Header({ currentPage, onNavigate }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <button
          className="brand"
          type="button"
          onClick={() => onNavigate('about')}
        >
          {studio.name}
        </button>
        <nav>
          {studio.nav.map((item) => (
            <button
              key={item.id}
              className={`nav-link${currentPage === item.id ? ' active' : ''}`}
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
