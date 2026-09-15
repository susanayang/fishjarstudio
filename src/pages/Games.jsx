export default function Games() {
  return (
    <>
      <div className="games-content">
        <p className="games-summary">
          You are a small-town thief who wants revenge on the Empress who destroyed your life. To do so, you must infiltrate the heart of the empire. Side by side with a powerless princess, you will navigate the deadly currents of court politics to achieve a singular, impossible dream—she will be Emperor, and you will be her Chancellor.
        </p>
      </div>
      <div className="games-summary-wrap">
        <img src="/games_summary.png" alt="Games Summary" className="games-summary-image" />
      </div>
      <div className="games-disguise-wrap">
        <div className="games-disguise-content">
          <img src="/games_danqing_bush.png" alt="Danqing in bush" className="games-disguise-image" />
          <div className="games-disguise-text">
            <h2 className="games-disguise-title">Disguise yourself to slip past authorities</h2>
          </div>
          <img src="/games_danqing_servant.png" alt="Danqing as servant" className="games-disguise-image games-disguise-image-right" />
        </div>
      </div>
      <div className="games-gallery-wrap">
        <img src="/games_garden.png" alt="Garden" className="games-gallery-image" />
        <img src="/games_feast.png" alt="Feast" className="games-gallery-image" />
      </div>
      <div className="games-section-wrap">
        <h2 className="games-section-title">Navigate lively villages and hidden rooms</h2>
      </div>
      <div className="games-gallery-wrap">
        <img src="/games_city.jpg" alt="City" className="games-gallery-image" />
        <img src="/games_garden.png" alt="Garden" className="games-gallery-image" />
      </div>
      <div className="games-coming-wrap">
        <div className="games-coming-content">
          <div className="games-coming-text">
            <h2 className="games-coming-title">Coming to Steam soon</h2>
          </div>
          <div className="games-coming-image">
            <img src="/games_danqing_walk.gif" alt="Danqing walking" className="games-coming-gif" />
          </div>
        </div>
      </div>
    </>
  );
}
