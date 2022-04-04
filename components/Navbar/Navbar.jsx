import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

function Navbar() {
  return (
    <div className={s.nav}>
      <div className={s.nav}>
        <NavLink to="/Profile" activeClassName={s.activelink}>Profile</NavLink>
      </div>
      <div className={s.activelink}>
        <NavLink to="/Dialogs">Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/News">News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/Music">Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/Settings">Settings</NavLink>
      </div>
    </div>
  );
}
export default Navbar;
