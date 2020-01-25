import React from 'react'

import '../Css/AboutUs.css'

function AboutUs() {
    return (
        <div className='aboutus-container' id='about'>
            <div className='pics-and-text-mix'>
            <div className='detail-desc-about-us_1'>
                    <div className='desc-img_1'></div>
                    <div className='desc-text_1'>
                        <h3>à propos d'Heaven</h3>
                    </div>
                </div>
                <div className='detail-desc-about-us'>
                    <div className='desc-img'></div>
                    <div className='desc-text'>
                        <p>Cette île est un paradis terestre ! Venez profiter d'un endroit de relaxation et d'inspiration le temps d'un week end. Située proche des îles Fidji vous aurez l'occasion de prendre un bain de soleil revigorant.</p>
                        <p>Nous vous proposerons de nombreuses activitées enrichissantes tel que la plongée sous marine,des cours de sports gratuits,de la pêche au harpon,ballade en voillier,activité culinaires locales</p>
                        <p>Enfin pour mieux nous connaitre je vous invites à nous contacter directement pour avoir conaissance des tarifs ou des détails sur votre séjours.</p>
                        <div className='btn-read-more'>En savoir plus</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
