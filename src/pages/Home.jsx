export default function Home({ onNavigate }) {
  return (
    <>
      <div className="home-about-wrap">
        <img src="/home_about.png" alt="About" className="home-about-image" />
        <div className="home-about-overlay">
          <h2 className="home-about-title">Who We Are</h2>
          <p className="home-about-body">
            A compact indie team dedicated to the art of tactical storytelling. Our mission is to craft historically inspired, epic RPGs that elevate strategy, driven by highly capable characters whose intellect and ambition shape the fate of empires.
          </p>
          <button className="home-about-button" type="button" onClick={() => onNavigate('about')}>Learn More</button>
        </div>
      </div>

      <div className="home-games-wrap">
        <img src="/home_games.png" alt="Games" className="home-games-image" />
        <div className="home-games-overlay">
          <h2 className="home-games-title">What We're Working On</h2>
          <p className="home-games-body">
            Daughters of Tian is a narrative RPG of intellect and ambition. When her sister is murdered, small-town thief Danqing infiltrates the capital seeking vengeance. Disguised as a maid to the marginalized Princess Lingyue, what begins as a web of lies transforms into a formidable alliance.
          </p>
          <button className="home-games-button" type="button" onClick={() => onNavigate('games')}>Learn More</button>
        </div>
      </div>

      <div className="home-services-wrap">
        <img src="/home_services.png" alt="Services" className="home-services-image" />
        <div className="home-services-overlay">
          <h2 className="home-services-title">What We Can Do</h2>
          <p className="home-services-body">
            We don't just build our own worlds. We help shape yours. Fishjar Studio partners with creators, developers, and publishers to provide specialized artistic, narrative, and technical services. From crafting intricate scripts and 2D art assets to Unity game development, we act as a dedicated vessel to bring your ambitions to life.
          </p>
          <button className="home-services-button" type="button" onClick={() => onNavigate('services')}>Learn More</button>
        </div>
      </div>
    </>
  );
}
