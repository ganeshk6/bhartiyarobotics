import React from 'react'
import Style from './Sensors.module.css'
import Image from 'next/image'

const SensorCard = ({src, name}) => {
  return (
    <div>
        <div className={Style.sensorImage}>
        <div>
          <Image
            src={src}
            height={250}
            width={300}
            className={Style.image}
            alt="src"
          />
        </div>
        <div className={Style.sensorName}>
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  )
}

export default SensorCard