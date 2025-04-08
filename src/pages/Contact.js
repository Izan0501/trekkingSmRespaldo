import React from 'react'
import { fadeIn } from '../components/FramerVariants'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <>
      <div className="form__container container grid">
        <div className="form__data">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="row"
          >
            <h2 className="section__title" id='form__tittle'>
              Your Journey <br />
              Starts Here
            </h2>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="row"
          >
            <p className="form__description">
              Get up to date with the lastest travel and information from us
            </p>
          </motion.div>
          <form action="" className="join__form">
            <input type="email" placeholder='Enter your email' className="form__input" />

            <button className='form__button button'>
              Sign On <i className='ri-arrow-right-line'></i>
            </button>
          </form>
        </div>
        <div className="form__image">
          <img src={require("../assets/images/trk3.png")} alt="" className="form__img" />
          <div className="form__shadow"></div>
        </div>
      </div>
    </>
  )
}

export default Contact