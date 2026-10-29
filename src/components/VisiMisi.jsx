import { useLanguage } from "../context/LanguageContext";

function VisiMisi() {
  const { t } = useLanguage();
  const { visionTitle, vision, missionTitle, missions } = t.visiMisi;

  return (
    <section id="visi" className="container pb-5">
      <div className="row">
        {/* Visi */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div className="card h-100 border-0">
            <div className="card-header text-white text-center">
              <h3>{visionTitle}</h3>
            </div>

            <div className="card-body">
              <p className="justify-text mb-0">{vision}</p>
            </div>
          </div>
        </div>

        {/* Misi */}
        <div className="col-lg-6">
          <div className="card h-100 border-0">
            <div className="card-header text-white text-center">
              <h3>{missionTitle}</h3>
            </div>

            <div className="card-body">
              <ol className="justify-text mission-list">
                {missions.map((misi, index) => (
                  <li key={index}>
                    <strong>{misi.title}:</strong> {misi.text}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisiMisi;