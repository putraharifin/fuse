import { useLanguage } from "../context/LanguageContext";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img src="/Logo_putih.PNG" width="70" alt={t.brand.logoAlt} />

            <h4 className="mt-3">{t.footer.orgName}</h4>

            <p>
              {t.footer.address.map((line, index) => (
                <span key={index}>
                  {line}
                  {index < t.footer.address.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

          <div className="col-lg-6 text-lg-end copyright">
            &copy; {new Date().getFullYear()} IETM
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;