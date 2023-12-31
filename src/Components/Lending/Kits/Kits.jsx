import React from 'react'
import KitsCard from './KitsCard'
import Style from './Kits.module.css';
import KitImage from '../assets/images/sensor.jpg'

const Kits = () => {
  return (
    <>
    <div id="kits" className={Style.Kits}>
        <h1>Kits</h1>
        <div className={Style.KitsCard}>
          <KitsCard src={KitImage} dec="Ignition Kit..." />
          <KitsCard src={KitImage} dec="Explorer Kit..." />
          <KitsCard src={KitImage} dec="Innovator Kit..." />
          {/* <SensorCard src={SensorImage} name="Innovator Kit" /> */}
        </div>
      </div>
    </>
  )
}

export default Kits