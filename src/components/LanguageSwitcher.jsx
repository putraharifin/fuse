import { useLanguage } from "../context/LanguageContext";

const options = [
  { code: "id", label: "ID" },
  { code: "en", label: "EN" },
];

function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang-switch" role="group" aria-label="Pilih bahasa / Select language">
      {options.map((option) => (
        <button
          key={option.code}
          type="button"
          className={`lang-btn${lang === option.code ? " active" : ""}`}
          onClick={() => setLang(option.code)}
          aria-pressed={lang === option.code}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;