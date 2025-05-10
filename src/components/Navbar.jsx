import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? 'active' : ''}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/topics-viewed-in-class"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Topics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/our-team"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Our Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    )
}

export default Navbar