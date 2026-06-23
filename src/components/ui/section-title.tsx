import { motion } from "framer-motion";

interface SectionTitleProps {
  index: string;
  title: string;
}

export function SectionTitle({ index, title }: SectionTitleProps) {
  return (
    <motion.div
      className="section-title"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <span className="section-title__index">{index}</span>
      <h2 className="section-title__text">{title}</h2>
    </motion.div>
  );
}
