import { useLanguage } from "@/hooks/use-language";

export function Footer() {
  const { translation } = useLanguage();
  const { footer } = translation;
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>{footer.builtWith}</p>
      <p>
        © {year} Kevin Mistrele. {footer.rights}
      </p>
    </footer>
  );
}
