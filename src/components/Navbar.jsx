import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex-shrink-0">
            <NavLink to="" className="text-xl font-bold text-indigo-600">MySite</NavLink>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(prev => !prev)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isOpen}
              aria-label="Toggle navigation">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex space-x-8">
            <NavLink to="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Inicio</NavLink>
            <NavLink to="/topics-viewed-in-class" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Temas Vistos en Clase</NavLink>
            <NavLink to="/our-team" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Integrantes</NavLink>
            <NavLink to="/contact-us" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Contacto</NavLink>
          </div>
        </div>
      </div>

      <div id="mobile-menu" className={`${isOpen ? 'block' : 'hidden'} md:hidden px-2 pt-2 pb-3 space-y-1`}>
        <NavLink to="/" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">Inicio</NavLink>
        <NavLink to="/topics-viewed-in-class" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">Temas Vistos en Clase</NavLink>
        <NavLink to="/our-team" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">Integrantes</NavLink>
        <NavLink to="/contact-us" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">Contacto</NavLink>
      </div>
    </nav>
  )
}

export default Navbar