import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { SectionTitle } from "@/components/ui/section-title";

export function ExperienceSection() {
  const { translation } = useLanguage();
  const { experience } = translation;

  return (
    <section id="experience" className="section experience">
      <SectionTitle index="02" title={experience.title} />

      <ol className="timeline">
        {experience.items.map(function renderItem(item) {
          return (
            <motion.li
              key={item.company}
              className="timeline__item"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="timeline__marker" aria-hidden="true" />
              <div className="timeline__content">
                <header className="timeline__header">
                  <h3 className="timeline__role">{item.role}</h3>
                  <span className="timeline__period">{item.period}</span>
                </header>
                <p className="timeline__company">{item.company}</p>
                <ul className="timeline__highlights">
                  {item.highlights.map(function renderHighlight(highlight) {
                    return <li key={highlight.slice(0, 24)}>{highlight}</li>;
                  })}
                </ul>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </section>
  );
}
