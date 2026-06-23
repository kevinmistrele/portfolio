import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { skills } from "@/data/profile";
import { SectionTitle } from "@/components/ui/section-title";

export function AboutSection() {
  const { translation } = useLanguage();
  const { about } = translation;

  return (
    <section id="about" className="section about">
      <SectionTitle index="01" title={about.title} />

      <div className="about__grid">
        <motion.div
          className="about__text"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          {about.paragraphs.map(function renderParagraph(paragraph) {
            return <p key={paragraph.slice(0, 24)}>{paragraph}</p>;
          })}
        </motion.div>

        <motion.div
          className="about__skills"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="about__skills-title">{about.skillsTitle}</h3>
          <ul className="about__skills-list">
            {skills.map(function renderSkill(skill) {
              return (
                <li key={skill} className="about__skill">
                  {skill}
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
