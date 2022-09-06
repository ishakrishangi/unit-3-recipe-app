import React from "react";
import {Link} from "react-router-dom"
import classes from './Header.module.css'

const Header = () => {
  return (
    <header>
      <h2>Devmountain Eatery</h2>
      <nav className={classes.nav}>
        {/* <ul>
          <li>
            <Link to='/welcome'>Welcome</Link>
          </li>
          <li>
            <Link to='/Products'>Products</Link>
          </li>
        </ul> */}
        <Link to=""><button className={classes.navBtn}>Home</button></Link>
        <Link to="newRecipe"> <button className={classes.navBtn}>Add Recipe</button></Link>
         
      </nav>
    </header>
  );
};

export default Header;
