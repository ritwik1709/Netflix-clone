import React from 'react';
import '../Styles/Header.scss';
import Logo from '../logo.png';
import { Link } from 'react-router-dom';
import {FiSearch} from 'react-icons/fi'

const Header = () => {
  return (
    <nav className='header'>
        <img src={Logo} alt="Netflix Logo" />

        <div>
          <Link to={"/TvShows"}>TVShows</Link>
          <Link to={"/Movies"}>Movies</Link>
          <Link to={"/RecentlyAdded"}>Recently Added</Link>
          <Link to={"/MyList"}>MyList</Link>
        </div>
        <FiSearch/>
    </nav>

  )
}

export default Header