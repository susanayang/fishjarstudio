import { servicesData } from '../data/services';
import Section from '../components/Section';

export default function Services() {
  return (
    <>
      <Section title={servicesData.headline}>
        <div className="services-list">
          {servicesData.offerings.map((service) => (
            <div key={service.title} className="service-item">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <p>{servicesData.outreach}</p>
      </Section>
    </>
  );
}
