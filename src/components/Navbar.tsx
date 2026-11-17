import { Link, useLocation } from "react-router-dom";

interface NavItem {
  id: string;
  label: string;
}

interface NavbarProps {
  items: NavItem[];
}

const Navbar = ({ items }: NavbarProps) => {
  const { pathname } = useLocation();
  const sectionHref = (id: string) => `${pathname === "/" ? "" : "/"}#${id}`;
  const primaryLinks = [
    items.find((item) => item.id === "portfolio"),
    items.find((item) => item.id === "about"),
  ].filter((item): item is NavItem => item !== undefined);

  return (
    <nav className="wireframe-nav" aria-label="Main navigation">
      <Link to="/" className="wireframe-nav-brand" aria-label="Hamza Osailan home">
        HAMZA OSAILAN
      </Link>

      <ul className="wireframe-nav-links">
        {primaryLinks.map((item) => (
          <li key={item.id}>
            <Link to={sectionHref(item.id)}>
              {item.id === "portfolio" ? "Work" : item.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link className="wireframe-nav-contact" to={sectionHref("contact")}>
        Contact <span aria-hidden="true">&rarr;</span>
      </Link>
    </nav>
  );
};

export default Navbar;
