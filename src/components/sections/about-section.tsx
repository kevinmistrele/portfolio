import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { skills } from "@/data/profile";
import { SectionTitle } from "@/components/ui/section-title";
import profilePhoto from "@/assets/Foto github.png";

const skillsVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const skillVariant = {
  hidden: { opacity: 0, scale: 0.75 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 220, damping: 16 },
  },
};

function ProfilePhoto() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [14, -14]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-14, 14]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      className="about__photo-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, x: -32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      style={{ perspective: 900 }}
    >
      <motion.div
        className="about__photo-tilt"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        transition={{ type: "spring", stiffness: 180, damping: 28 }}
      >
        <div className="about__photo-glow" aria-hidden="true" />
        <div className="about__photo-ring">
          <div className="about__photo-inner">
            <img
              src={profilePhoto}
              alt="Kevin Mistrele"
              className="about__photo-img"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function AboutSection() {
  const { translation } = useLanguage();
  const { about } = translation;

  return (
    <section id="about" className="section about">
      <SectionTitle index="01" title={about.title} />

      <div className="about__grid">
        <ProfilePhoto />

        <div className="about__main">
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 className="about__skills-title">{about.skillsTitle}</h3>
            <motion.ul
              className="about__skills-list"
              variants={skillsVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {skills.map(function renderSkill(skill) {
                return (
                  <motion.li
                    key={skill}
                    variants={skillVariant}
                    className="about__skill"
                    whileHover={{ scale: 1.08, y: -2 }}
                  >
                    {skill}
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
