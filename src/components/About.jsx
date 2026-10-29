import { useLanguage } from "../context/LanguageContext";

function About() {
  const { t } = useLanguage();

  return (
    <section id="tentang" className="container py-5 mt-4">
      <h2 className="section-title">{t.about.title}</h2>

      <div className="card border-0 p-4">
        <p className="justify-text">{t.about.p1}</p>

        <p className="justify-text mb-0">{t.about.p2}</p>
      </div>
    </section>
  );
}

export default About;