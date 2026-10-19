import FrontendCard from "./FrontendCard";

export default function Skills() {
  return (
    <>
      <section id="skill" className={`py-5 bg-light`}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">My Skills</h2>
            <p className="text-muted">
              A blend of front-end creativity, back-end logic, and a love for
              sharing knowledge.
            </p>
          </div>

          <div className="row gy-4">
            <FrontendCard />
          </div>
        </div>
      </section>
    </>
  );
}
