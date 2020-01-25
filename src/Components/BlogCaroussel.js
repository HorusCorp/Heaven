import React from 'react'

import '../Css/BlogCaroussel.css'

function BlogCaroussel() {
    return (
        <div className='blog-container'>
            <h2>Articles</h2>
            <div className='card-container'>
                <div className='card'>
                    <div className='card1-pic'></div>
                    <div className='card1-desc'>
                        <p>Publié le 21.04.2020</p>
                        <h3>Petit dejeuné en bord de mer au levé du jour</h3>
                         <div className='center-btn-in-card'><div className='card-btn'>En savoir plus</div></div>
                    </div>
                </div>

                <div className='card'>
                    <div className='card2-pic'></div>
                    <div className='card2-desc'>
                        <p>Publié le 13.04.2020</p>
                        <h3>Piscines à étages pour que chacun s'y retrouve</h3>
                        <div className='center-btn-in-card'><div className='card-btn'>En savoir plus</div></div>
                    </div>
                </div>

                <div className='card'>
                    <div className='card3-pic'></div>
                    <div className='card3-desc'>
                        <p>Publié le 02.04.2020</p>
                        <h3>Profitez de nos soirées cocktails sous la fraicheur</h3>
                        <div className='center-btn-in-card'><div className='card-btn'>En savoir plus</div></div>
                    </div>
                </div>

                <div className='card'>
                    <div className='card4-pic'></div>
                    <div className='card4-desc'>
                        <p>Publié le 25.03.2020</p>
                        <h3>Suites romantiques pour un sejour innoubliable</h3>
                        <div className='center-btn-in-card'><div className='card-btn'>En savoir plus</div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCaroussel


