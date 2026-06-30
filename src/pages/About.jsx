import { studio } from '../data/studio';
import { aboutData } from '../data/about';
import Section from '../components/Section';
import Button from '../components/Button';

export default function About({ onNavigate }) {
  return (
    <>
      <Section title={studio.name}>
        <p>{studio.tagline}</p>
      </Section>

      <Section title="Mission & Values">
        <p>{aboutData.mission}</p>
        <ul>
          {aboutData.values.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section title="The Team">
        {aboutData.team.map((member) => (
          <div key={member.name}>
            <strong>{member.name}</strong> - {member.role}
          </div>
        ))}
      </Section>

      <Section>
        <h3>Ready to see what we're working on?</h3>
        <Button label="Check Out Our Games" onClick={() => onNavigate('games')} />
      </Section>
    </>
  );
}
