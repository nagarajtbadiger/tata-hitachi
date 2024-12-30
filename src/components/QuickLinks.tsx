import React from "react";
import { QuickLinks } from "../constants"; 

const quickNav = () => {
  return (
    <ul className="quickLinks flex items-start gap-4 justify-start flex-col bg-white lg:flex-row lg:gap-5 px-4 py-3 lg:py-0">
      {QuickLinks.map((item, index) => (
        <li key={index} className="leading-none">
          <a
            href={item.href}
            target="_blank"
            rel="noopener"
            className="hover:text-orange-600"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default quickNav;
