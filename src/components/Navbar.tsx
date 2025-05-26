import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 p-4 shadow-md">
      <div className="max-w-auto mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-white font-bold text-2xl">Portal de Empleos</Link>
        </div>
        <div className="hidden md:flex space-x-6" id='hidden_navbar'>
          <Link to="/homepage" className="text-white hover:text-indigo-200">Ver ofertas</Link>
          <Link to="/about" className="text-white hover:text-indigo-200">Sobre Nosotros</Link>
          <Link to="/contact" className="text-white hover:text-indigo-200">Contacto</Link>
          <Link to="/signin" className="text-white hover:text-indigo-200">Cerrar sesión</Link>
        </div>
        <div className="md:hidden">
          <button className="text-white" onClick={() => document.getElementById('hidden_navbar')?.classList.toggle('hidden')}>
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
