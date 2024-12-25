function ExternalLinks(props) {
    const {iconclass,href} = props;
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="nav-icon"
      >
        <i className={iconclass}></i>
      </a>
    </li>
  );
}
export default ExternalLinks