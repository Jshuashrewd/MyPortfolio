import profile from "../assets/images/image.webp";
import styles from "./landing.module.css";

const Landing = () => {
  return (
    <>
      <section className={styles.first}>
        <div className={`${styles.landing} row`}>
          <div className="col-lg-6">
            <img
              src={profile}
              alt="profile picture"
              className={styles.titleImage}
            />
          </div>

          <div className={`${styles.landingContent} col-lg-6`}>
            <h6 className={styles.landingText}>
              This is me - Web Developer & Tech Educator
            </h6>
            <h1 className={styles.landingTitle}>Joshua Adeyanju</h1>
            <p className={styles.landingParagraph}>
              I build responsive, user-centered web applications and help others
              learn modern web development skills.
            </p>
            <div className="row">
              <a className="nav-link col-sm-4" href="#projects">
                <button className={`${styles.viewBtn} btn-md`}>
                  View My Work
                </button>
              </a>
              <a className="nav-link col-sm-4" href="#contact">
                <button className={`${styles.contactBtn} btn-md`}>
                  Contact Me
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
