import logo from "../assets/images/logo.jpg";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <>
      <nav className={`${styles.navbar} navbar navbar-expand-lg`}>
        <a className={`${styles.navbarBrand} navbar-brand`} href="#home">
          <img src={logo} alt="" className="logo" />
          <span id="name">Jshuashrewd</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className={`${styles.navItem} nav-item`}>
              <a
                href="#home"
                className={`${styles.navLink} nav-link active`}
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a href="#goals" className={`${styles.navLink} nav-link`}>
                About
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a href="#skill" className={`${styles.navLink} nav-link`}>
                Skills
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a href="#project" className={`${styles.navLink} nav-link`}>
                Projects
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a href="#service" className={`${styles.navLink} nav-link`}>
                Services
              </a>
            </li>
            <li className={`${styles.navItem} nav-item`}>
              <a href="#contact" className={`${styles.navLink} nav-link`}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
