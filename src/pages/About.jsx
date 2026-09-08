import { useState } from 'react';

const teamSlides = [
  {
    title: 'Jie Yu',
    subtitle: 'Narrative Designer',
    paragraph: 'The creator of our plots, characters, and studio. She started this studio with one mission: to write women who don\'t need saving, but might just save everyone else.',
    image: '/jie_character.png',
  },
  {
    title: 'VV',
    subtitle: 'Level Designer',
    paragraph: 'The one who decides exactly how difficult the game is going to get. If a puzzle in this game makes you want to smash your screen and also immediately try again, that\'s them.',
    image: '/vv_character.png',
  },
  {
    title: 'Mian Mian',
    subtitle: 'Environmental Artist',
    paragraph: 'Turns empty space into somewhere inhabitable. All the villages, beautiful landscapes, and fancy rooms in the game? That\'s them.',
    image: '/mianmian_character.png',
  },
];

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? teamSlides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === teamSlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="about-content">
        <p className="about-intro">
          Founded in 2025 to tell stories of capable female characters, we proudly showcased debut title, <em>Daughters of Tian</em>, at both ChinaJoy 2025 and GDC 2026 with a planned release on Steam by the end of 2026.
        </p>
      </div>
      <div className="about-map-wrap">
        <img src="/about_map.png" alt="Map" className="about-map-image" />
      </div>
      <div className="about-team-wrap">
        <img src="/about_team_bg.png" alt="Team" className="about-team-bg-image" />
        <div className="about-team-carousel">
          <button className="carousel-btn carousel-btn-prev" onClick={goToPrev} aria-label="Previous">&#10094;</button>
          <div className="carousel-viewport">
            <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {teamSlides.map((slide, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-text">
                    <h3 className="carousel-title">{slide.title}</h3>
                    <h4 className="carousel-subtitle">{slide.subtitle}</h4>
                    <p className="carousel-paragraph">{slide.paragraph}</p>
                  </div>
                  <div className="carousel-image">
                    <img src={slide.image} alt={slide.title} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-btn carousel-btn-next" onClick={goToNext} aria-label="Next">&#10095;</button>
        </div>
      </div>
    </>
  );
}
