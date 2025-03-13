import React from 'react'

const About = () => {
  return (
    <>
      <div className="about__container container grid">
        <div className="about__data">
          <h2 className="section__title">
            Learn More <br />
            About The Expirience
          </h2>
          <p className="about__description">
            All the trips around in the world have an unique expirience for anybody and it will give you information about every corner in the world
          </p>
          <a href="#" className="button">
            Explore Travel <i className='ri-arrow-right-line'></i>
          </a>
        </div>
        <div className="about__image">
          <img src={require('../assets/images/trk2.png')} alt="" className="about__img" />
          <div className="about__shadow"></div>
        </div>
      </div>
    </>
  )
}

export default About