import React from 'react'

import '../Css/Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
           <ul>
           <a href='#acceuil'><li>Acceuil</li></a>
           <a href='#about'><li>A propos</li></a>
           <a href='#imgcaroussel'><li>En Image</li></a>
            <li className='logo-footer'></li>
            <a href='#blog'><li>Blog</li></a>
            <a href='#contact'> <li>Nous Contacte</li></a>
            <a href='#contact'><li>Social</li></a>
           </ul>
        </div>
    )
}

export default Footer
