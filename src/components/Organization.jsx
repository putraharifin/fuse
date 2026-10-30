import { useLanguage } from "../context/LanguageContext";

function Organization() {
  const { t } = useLanguage();
  const { title, roles } = t.organization;

  return (
    <section id="organisasi" className="container pb-5">
      <h2 className="section-title">{title}</h2>
      
      <div className="text-center mt-5">
        {/* TINGKAT 1: KETUA */}
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-md-6">
            <div className="p-4 border rounded shadow-sm bg-white org-card">
              <p className="text-uppercase tracking-wider small fw-bold mb-1" style={{ color: "var(--primary)" }}>
                {roles.chair}
              </p>
              <h5 className="fw-bold m-0" style={{ color: "var(--dark)", fontSize: "1.15rem" }}>
                Dr. Ir. Abdi Hanra Sebayang, S.T., M.T., IPM.
              </h5>
            </div>
          </div>
        </div>

        {/* GARIS PENGHUBUNG HIRARKI */}
        <div className="d-none d-md-flex flex-column align-items-center mb-4">
          <div style={{ width: "2px", height: "24px", background: "linear-gradient(to bottom, var(--primary), var(--secondary))" }}></div>
          <div style={{ width: "50%", height: "2px", background: "linear-gradient(to right, var(--secondary), var(--primary), var(--secondary))" }}></div>
        </div>

        {/* TINGKAT 2: SEKRETARIS & BENDAHARA */}
        <div className="row justify-content-center g-4">
          {/* SEKRETARIS */}
          <div className="col-12 col-md-5">
            <div className="p-4 border rounded shadow-sm bg-white org-card">
              <p className="text-uppercase tracking-wider small fw-bold mb-1" style={{ color: "var(--primary)" }}>
                {roles.secretary}
              </p>
              <h5 className="fw-bold m-0" style={{ color: "var(--dark)", fontSize: "1.05rem" }}>
                Dedy Ramadani Dalimunthe, S.E.
              </h5>
            </div>
          </div>

          {/* BENDAHARA */}
          <div className="col-12 col-md-5">
            <div className="p-4 border rounded shadow-sm bg-white org-card">
              <p className="text-uppercase tracking-wider small fw-bold mb-1" style={{ color: "var(--primary)" }}>
                {roles.treasurer}
              </p>
              <h5 className="fw-bold m-0" style={{ color: "var(--dark)", fontSize: "1.05rem" }}>
                Prof. Arridina Susan Silitonga, S.T., M.Eng., Ph.D
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Organization;
