import logoimg from "../images/logo.svg";
// import mainjpeg from "../images/main.jpeg";
import InternalLinks from "./InternalLinks";
import ExternalLinks from "./ExternalLinks";
import { internallinks,externallinks } from "../data/links";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logoimg} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {internallinks.map((data) => {
            return <InternalLinks {...data} />;
          })}
        </ul>

        <ul className="nav-icons">
          {externallinks.map((data) => {
            return <ExternalLinks {...data} />;
          })}
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
