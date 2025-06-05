import React from 'react';
import { Link } from 'react-scroll';

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    smooth={true}
    className="cursor-pointer hover:text-blue-600 transition-colors"
  >
    {children}
  </Link>
);

export default NavLink;