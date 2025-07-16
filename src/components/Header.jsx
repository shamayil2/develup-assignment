import DevelUp from "../assets/DevelUp.png";
import SearchIcon from "../assets/SearchIcon.svg";
const Header = () => {
  return (
    <>
      <header className="du-header">
        <nav class="header-content navbar navbar-expand-lg ">
          <div class="container-fluid">
            <a class="navbar-brand logo" href="#">
              <img src={DevelUp} alt="" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">
                    Post a job
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    Become a trainer
                  </a>
                </li>
              </ul>
              <div class="navbar-text">
                <img className="header-search" src={SearchIcon} alt="" />
                <a href="">Log in</a>
                <button className="start">Get started</button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
