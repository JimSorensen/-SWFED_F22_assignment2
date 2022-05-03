import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>MODEL MANAGEMENT</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/auth" activeClassName={classes.active}>
              Log ind
            </NavLink>
          </li>
          <li>
            <NavLink to="/auth" activeClassName={classes.active}>
              Log ud
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" activeClassName={classes.active}>
              Profil
            </NavLink>
          </li>
          <li>
            <NavLink to="/models" activeClassName={classes.active}>
              Alle modeler
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-model" activeClassName={classes.active}>
              Tilføj Model
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
