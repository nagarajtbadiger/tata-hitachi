import { navItems } from "../constants";

const Nav = () => {
  return (
    <nav>
      <ul className="flex flex-col w-[70px] m-0 p-0">
        {navItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className="flex flex-col justify-center text-center px-1 py-2 text-[11px] hover:bg-orange-500"
            >
              <i className={`${item.iconClass} text-[20px]`}></i>
              {item.label}
              {item.hasDropdown && <span className="dropdown-icon">▼</span>}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
