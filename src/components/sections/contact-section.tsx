import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { contactLinks, resumeFiles } from "@/data/profile";
import { SectionTitle } from "@/components/ui/section-title";

export function ContactSection() {
  const { translation, language } = useLanguage();
  const { contact } = translation;
  const resumeUrl = resumeFiles[language];

  return (
    <section id="contact" className="section contact">
      <SectionTitle index="04" title={contact.title} />

      <motion.div
        className="contact__card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="contact__subtitle">{contact.subtitle}</p>

        <ul className="contact__links">
          {contactLinks.map(function renderLink(link) {
            return (
              <li key={link.label}>
                <a
                  className="contact__link"
                  href={link.href}
                  target={link.icon === "mail" || link.icon === "phone" ? undefined : "_blank"}
                  rel="noreferrer"
                >
                  <span className="contact__link-label">{link.label}</span>
                  <span className="contact__link-value">{link.value}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <a className="button button--primary contact__resume" href={resumeUrl} download>
          {contact.downloadResume}
        </a>
      </motion.div>
    </section>
  );
}
