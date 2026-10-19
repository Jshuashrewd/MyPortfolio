export default function FrontendCard() {
  return (
    <>
      <div className="col-md-6 col-lg-4">
        <div className="card border-0 shadow-sm skill-card p-4 h-100">
          <div className="card-body">
            <h5 className="fw-bold mb-3">
              <i className="fas fa-code text-primary me-2"></i>Frontend
              Development
            </h5>

            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <span>HTML5</span>
                <span>95%</span>
              </div>
              <div className="progress" style={{ height: "6px" }}>
                <div
                  className="progress-bar bg-primary"
                  style={{ width: "95%" }}
                ></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <span>CSS3</span>
                <span>90%</span>
              </div>
              <div className="progress" style={{ height: "6px" }}>
                <div
                  className="progress-bar bg-primary"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between">
                <span>JavaScript (ES6+)</span>
                <span>85%</span>
              </div>
              <div className="progress" style={{ height: "6px" }}>
                <div
                  className="progress-bar bg-primary"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="d-flex justify-content-between">
                <span>React</span>
                <span>80%</span>
              </div>
              <div className="progress" style={{ height: "6px" }}>
                <div
                  className="progress-bar bg-primary"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
