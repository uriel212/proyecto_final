import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed w-full z-50 bg-dark-glass glass-card py-4 px-8 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/">
          <div className="text-2xl font-bold gradient-text">
            INTRO<span className="text-white">SISTEMAS</span>
          </div>
        </NavLink>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(prev => !prev)}
            className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-slate-100 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink
            to="/"
            className="hover:text-neon transition-colors"
          >
            Inicio
          </NavLink>
          <NavLink
            to="/topics-viewed-in-class"
            className="hover:text-cyber transition-colors"
          >
            Temas Vistos en Clase
          </NavLink>
          <NavLink
            to="/our-team"
            className="hover:text-matrix transition-colors"
          >
            Integrantes
          </NavLink>
          <NavLink
            to="/contact-us"
            className="hover:text-neon transition-colors"
          >
            Contacto
          </NavLink>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden px-2 pt-2 pb-3 space-y-1`}>
        <NavLink
          to="/"
          className="block hover:text-neon transition-colors px-3 py-2 rounded-md text-base font-medium"
        >
          Inicio
        </NavLink>
        <NavLink
          to="/topics-viewed-in-class"
          className="block hover:text-cyber transition-colors px-3 py-2 rounded-md text-base font-medium"
        >
          Temas Vistos en Clase
        </NavLink>
        <NavLink
          to="/our-team"
          className="block hover:text-matrix transition-colors px-3 py-2 rounded-md text-base font-medium"
        >
          Integrantes
        </NavLink>
        <NavLink
          to="/contact-us"
          className="block hover:text-neon transition-colors px-3 py-2 rounded-md text-base font-medium"
        >
          Contacto
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar