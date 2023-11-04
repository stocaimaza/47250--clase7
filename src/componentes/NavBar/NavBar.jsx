import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img className='logoMarolio' src={"../img/logo.png"} alt="Logo Marolio" />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to="categoria/2">Lacteos</NavLink>
          </li>

          <li>
            <NavLink to="categoria/3">Almacen</NavLink>
          </li>
          
        </ul>
      </nav>

      <CartWidget />
    </header>
  )
}

export default NavBar