import { useLanguage } from "../context/LanguageContext";

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="row align-items-center">
          {/* Teks di kiri */}
          <div className="col-lg-7 text-center text-lg-start">
            <h1>{t.hero.title}</h1>

            <p>{t.hero.description}</p>

            <a href="#tentang" className="btn hero-btn">
              {t.hero.cta}
            </a>
          </div>

          {/* Logo di kanan */}
          <div className="col-lg-5 text-center">
            <img
              src="/Logo_putih.PNG"
              className="hero-logo"
              alt={t.brand.logoAlt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;