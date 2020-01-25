import React from 'react'

import '../Css/Nav.css'

function Nav() {
    return (
        <div className='navbar-perso-container' id='acceuil'>
            <ul className='navbar-perso'>
                <a href='#acceuil'><li>Acceuil</li></a>
                <a href='#about'><li>A propos</li></a>
                <a href='#imgcaroussel'><li>En Image</li></a>
                <li className='logo-header'></li>
                <a href='#blog'><li>Blog</li></a>
                <a href='#contact'><li>Nous Contactez</li></a>
                <a href='#contact'><li>Social</li></a>
            </ul>
            <div className='banner-caroussel'>
                <h1 className='logo-banner'></h1>
                <h2>Confort & Intimité</h2>
            </div>
            
        </div>
    )
}

export default Nav
