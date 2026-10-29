import { useLanguage } from "../context/LanguageContext";

const pengurus = [
  { id: 1, role: "chair" },
  { id: 2, role: "viceChair" },
  { id: 3, role: "secretary" },
  { id: 4, role: "treasurer" },
];

function Organization() {
  const { t } = useLanguage();
  const { title, namePlaceholder, roles } = t.organization;

  return (
    <section id="organisasi" className="container pb-5">
      <h2 className="section-title">{title}</h2>

      <div className="row g-4">
        {pengurus.map((orang) => (
          <div className="col-6 col-md-3" key={orang.id}>
            <div className="card org-card text-center border-0 h-100">
              <img
                src="/person.png"
                className="card-img-top"
                alt={roles[orang.role]}
              />

              <div className="card-body pt-2">
                <h5>{namePlaceholder}</h5>
                <p>{roles[orang.role]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Organization;