import React from 'react';
import Logo from './ui/Logo';
import NavLink from './ui/NavLink';

const Header = () => {
  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Logo />
          <nav className="hidden md:flex space-x-8">
            <NavLink to="inicio">Início</NavLink>
            <NavLink to="recursos">Recursos</NavLink>
            <NavLink to="planos">Planos</NavLink>
            <NavLink to="parceiros">Parceiros</NavLink>
            <NavLink to="contato">Contato</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;