import styles from "./aboutme.module.css";

export default function AboutMe() {
  return (
    <>
      <section className="container" id="goals">
        <div className={`${styles.goals} row`}>
          <div className={`col-md-12 text-center`}>
            <h1 className={`${styles.goalTitle} text-uppercase`}>My Tech Journey</h1>
          </div>

          <div className={`${styles.goalContainer} col-lg-9`}>
            <h6 className={styles.goalSubtitle}>About Me</h6>
            <p className={styles.goalText}>
              I’m Joshua Adeyanju, a passionate Web Developer focused on
              creating responsive, user-friendly, and visually appealing web
              applications. <br />
              I specialize in front-end development using HTML, CSS, JavaScript,
              and React, and I’m steadily growing my back-end skills with
              Node.js and Express to become a well-rounded full-stack developer.
              <br />
              I enjoy turning ideas into real solutions that solve everyday
              problems while ensuring a smooth user experience. Beyond coding, I
              love sharing knowledge—helping others understand web development
              concepts and guiding them on their learning journey. <br />
              When I’m not coding, I’m exploring new tools, refining my design
              sense, or contributing to projects that challenge me to grow and
              create value through technology.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
