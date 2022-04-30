import React, {useState} from 'react';
import Logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function Navbar() {

  const [openMenu, changeOpenMenu] = useState(false);
  const toggleMenu = () => {
    changeOpenMenu(!openMenu)
  }

  return (
    <div className='navbar'>
        <div className='leftNav' id={openMenu ? 'open' : 'close'}>
            <img src={Logo} alt='' />
            <div className='hideMenu'>
              <Link to='/'> Home </Link>
              <Link to='menu'> Menu </Link>
              <Link to='about'> About </Link>
              <Link to='contact'> Contact </Link>
            </div>
        </div>
        <div className='rightNav'>
            <Link to='/'> Home </Link>
            <Link to='menu'> Menu </Link>
            <Link to='about'> About </Link>
            <Link to='contact'> Contact </Link>
            <button onClick={toggleMenu}>
              <ReorderIcon />
            </button>
        </div>
    </div>
  )
}

export default Navbar