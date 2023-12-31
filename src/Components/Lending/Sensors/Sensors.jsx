import React from 'react'
import Style from './Sensors.module.css'
import SensorCard from './SensorsCard'
import SensorImage from "../assets/images/sensor.jpg";
import Link from 'next/link'

const Sensors = () => {
  return (
    <>
    <div id="sensors" className={Style.Sensors}>
        <h1>Sensors</h1>
        <div className={Style.sensorsCard}>
          <SensorCard src={SensorImage} name="Ignition Kit" />
          <SensorCard src={SensorImage} name="Explorer Kit" />
          <SensorCard src={SensorImage} name="Innovator Kit" />
          <SensorCard src={SensorImage} name="Innovator Kit" />
          <SensorCard src={SensorImage} name="Innovator Kit" />
          <SensorCard src={SensorImage} name="Innovator Kit" />
          {/* <SensorCard src={SensorImage} name="Innovator Kit" /> */}
        </div>
        <div className={Style.sensorsLink}>
          <Link href="/">
          <h3>Click for more....</h3>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Sensors