import React from 'react'
import avatar from '../assets/avatar.png'
import  './Navbar.css'

function Navbar() {

  return (
      <header>
        <nav>
          <ul>
            <li>facebook</li>
            <li><span>Meu perfil</span> <img src={avatar} alt="Avatar" width="24"/></li>
          </ul>
        </nav>
      </header>
  );
}

export default Navbar;