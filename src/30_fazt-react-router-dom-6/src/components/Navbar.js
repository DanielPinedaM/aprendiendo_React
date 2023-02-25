// @ts-nocheck
import { NavLink } from 'react-router-dom';
import './navbar.css';

/* 
Navbar.js componente q contiene los enlaces
NavLink   sirve para NO recargar la pagina cuando se abre un enlace y detectar la pagina visitada */
export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/about'>
            about
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'blue')} to='/users'>
            users
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/users/new'>
            new
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/dashboard'>
            Dashboard
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
