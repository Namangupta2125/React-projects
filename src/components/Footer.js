import InternalLinks from "./InternalLinks";
import ExternalLinks from "./ExternalLinks";
import { internallinks,externallinks } from "../data/links";
function Footer() {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {internallinks.map((data) => {
          return <InternalLinks {...data} />;
        })}
      </ul>
      <ul className="footer-icons">
        {externallinks.map((data) => {
          return <ExternalLinks {...data} />;
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
}
export default Footer