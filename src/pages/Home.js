import React from 'react'
import HomeCard from '../components/HomeCard'
import About from './About'
const Home = () => {
  return (
    <>
    {/* Home Section */}
      <section className='home section' id='home'>
        <img src={require('../assets/images/Foto 2.jpeg.jpg')} alt='home img' className="home__bg"></img>
        <div className="home__shadow"></div>
        <div className="home__container container grid">
          <div className="home__data">
            <h1 className="home__subtitle">
              Sumate al Trekking
            </h1>
            <h3 className="home__title">
              Sube a las montañas y déjate maravillar por vistas increíbles.
            </h3>
            <p className="home__description">
              Ideal para amantes del aire libre y la naturaleza.
            </p>
            <a href="#" className='button'>
              INSCRIBIRME <i className='ri-arrow-right-line'></i>
            </a>
          </div>
          <div className="home__cards grid">
            {/* Cards */}
            {
              <HomeCard />
            }
          </div>
        </div>
      </section>
      {/* Home Section Ends */}

      {/* About Section */}
      <section className="about section" id="about">
        <About />
      </section>
      {/* About Section Ends*/}

      {/* MoreInfo Section */}
      <section className="explore section" id="explore">
        
      </section>
      {/* MoreInfo Section Ends*/}


    </>
  )
}

export default Home