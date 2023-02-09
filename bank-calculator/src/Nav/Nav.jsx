import React from 'react';
import { NavLink } from 'react-router-dom';
import p from './Nav.module.css'

const Nav = () => {
    return <div>
    <NavLink className={activeLink => activeLink.isActive ? p.activeLink1 : p.item1} to = 'estateCalculator'><div className={p.item3}>Недвижимость</div></NavLink>
    <NavLink className={activeLink => activeLink.isActive ? p.activeLink2 : p.item2} to = 'creditCalculator'><div className={p.item4}>Кредит</div></NavLink>
    </div>
}

export default Nav;