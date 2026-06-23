import type { Language, LanguageOption } from "@/types/language";
import { useLanguage } from "@/hooks/use-language";

const options: LanguageOption[] = [
  { code: "pt", label: "PT", flag: "🇧🇷" },
  { code: "en", label: "EN", flag: "🇺🇸" },
  { code: "es", label: "ES", flag: "🇪🇸" },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  function handleSelect(next: Language) {
    setLanguage(next);
  }

  return (
    <div className="language-switcher" role="group" aria-label="Language">
      {options.map(function renderOption(option) {
        const isActive = option.code === language;

        return (
          <button
            key={option.code}
            type="button"
            className={
              isActive
                ? "language-switcher__button language-switcher__button--active"
                : "language-switcher__button"
            }
            onClick={() => handleSelect(option.code)}
            aria-pressed={isActive}
          >
            <span aria-hidden="true">{option.flag}</span>
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
