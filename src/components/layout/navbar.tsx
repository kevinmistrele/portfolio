import { useLanguage } from "@/hooks/use-language";
import { LanguageSwitcher } from "@/components/layout/language-switcher";

export function Navbar() {
  const { translation } = useLanguage();
  const { nav } = translation;

  return (
    <header className="navbar">
      <a className="navbar__brand" href="#hero">
        kevin<span className="navbar__brand-accent">.dev</span>
      </a>

      <nav className="navbar__links" aria-label="Primary">
        <a href="#about">{nav.about}</a>
        <a href="#experience">{nav.experience}</a>
        <a href="#projects">{nav.projects}</a>
        <a href="#contact">{nav.contact}</a>
      </nav>

      <LanguageSwitcher />
    </header>
  );
}
