import { NavLink, useLocation } from 'react-router-dom';

import styles from './Navigation.module.css';
export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeNavLink : styles.navLink
            }
            state={{ from: location }}
            to="/movies"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
