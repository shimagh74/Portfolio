import { Link } from "react-scroll";

const menu = [
  {
    name: "Services",
    href: "services",
  },
  {
    name: "Certificates",
    href: "certificates",
  },
  {
    name: "Projects",
    href: "projects",
  },
  {
    name: "FAQ",
    href: "FAQ",
  },
  {
    name: "Contact",
    href: "Contact",
  },
];

const Nav = () => {
  return (
    <nav className="z-50 flex gap-8">
      {menu.map((item, index) => (
        <Link
          to={item.href}
          spy={true}
          smooth={true}
          key={index}
          className="cursor-pointer text-lg font-medium capitalize text-lighted"
        >
          <span className="pb-2 transition-all hover:border-b-2 hover:border-blue hover:text-blue">
            {item.name}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
