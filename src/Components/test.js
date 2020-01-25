import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
 
import '../Css/BlogCaroussel.css'

function Test() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div id='blog' style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel 
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        gutter={20}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
        infiniteLoop
      >
        <div className='card-container' style={{ height: 450, background: '#fff' }}>
                <div className='card'>
                    <div className='card1-pic'></div>
                    <div className='card1-desc'>
                        <p>Publié le 21.04.2020</p>
                        <h3>Petit dejeuné en bord de mer au levé du jour</h3>
                         <div className='center-btn-in-card'><div className='card-btn'>En savoir plus</div></div>
                    </div>
                </div>
          </div>
        <div className='card-container' style={{ height: 450, background: '#fff' }}>
                <div className='card'>
                    <div className='card2-pic'></div>
                    <div className='card2-desc'>
                        <p>Publié le 13.04.2020</p>
                        <h3>Piscines à étages pour que chacun s'y retrouve</h3>
                        <div className='center-btn-in-card'><div className='card-btn'>En savoir plus</div></div>
                    </div>
                </div>
        </div>
        <div className='card-container' style={{ height: 450, background: '#fff' }}>
                <div className='card'>
                    <div className='card3-pic'></div>
                    <div className='card3-desc'>
                        <p>Publié le 02.04.2020</p>
                        <h3>Profitez de nos soirées cocktails sous la fraicheur</h3>
                        <div className='center-btn-in-card'><div className='card-btn'>En savoir plus</div></div>
                    </div>
                </div>
        </div>
        <div className='card-container' style={{ height: 450, background: '#fff' }}>
              <div className='card'>
                    <div className='card4-pic'></div>
                    <div className='card4-desc'>
                        <p>Publié le 25.03.2020</p>
                        <h3>Suites romantiques pour un sejour innoubliable</h3>
                        <div className='center-btn-in-card'><div className='card-btn'>En savoir plus</div></div>
                    </div>
                </div>
        </div>
        <div className='card-container' style={{ height: 450, background: '#fff' }}>
                <div className='card'>
                    <div className='card5-pic'></div>
                    <div className='card5-desc'>
                        <p>Publié le 21.04.2020</p>
                        <h3>Chambre sous-marine à couper le souffle</h3>
                         <div className='center-btn-in-card'><div className='card-btn'>En savoir plus</div></div>
                    </div>
                </div>
          </div>
        <div className='card-container' style={{ height: 450, background: '#fff' }}>
                <div className='card'>
                    <div className='card6-pic'></div>
                    <div className='card6-desc'>
                        <p>Publié le 13.04.2020</p>
                        <h3>Admirer un couché de soleil à deux</h3>
                        <div className='center-btn-in-card'><div className='card-btn'>En savoir plus</div></div>
                    </div>
                </div>
        </div>
      </ItemsCarousel>
    </div>
  );
};

export default Test