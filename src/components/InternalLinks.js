function InternalLinks(props) {
    const {text,href} = props
  return (
    <li>
      <a href={href} className="nav-link">
        {" "}
        {text}{" "}
      </a>
    </li>
  );
}
export default InternalLinks