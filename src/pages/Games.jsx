import { gamesData } from '../data/games';
import Section from '../components/Section';

export default function Games() {
  return (
    <>
      <Section title="Games In Progress">
        <div className="games-grid">
          {gamesData.map((game) => (
            <article key={game.id} className="game-card">
              <h3>{game.title}</h3>
              <p className="game-meta">{game.genre} • {game.status}</p>
              <p>{game.description}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
