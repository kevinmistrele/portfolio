import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { HeroScene } from "@/components/scene/hero-scene";

export function HeroSection() {
  const { translation } = useLanguage();
  const { hero } = translation;

  return (
    <section id="hero" className="hero">
      <div className="hero__scene">
        <HeroScene />
      </div>

      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="hero__greeting">{hero.greeting}</p>
        <h1 className="hero__name">{hero.name}</h1>
        <h2 className="hero__role">{hero.role}</h2>
        <p className="hero__tagline">{hero.tagline}</p>

        <div className="hero__actions">
          <a className="button button--primary" href="#projects">
            {hero.primaryCta}
          </a>
          <a className="button button--ghost" href="#contact">
            {hero.secondaryCta}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
