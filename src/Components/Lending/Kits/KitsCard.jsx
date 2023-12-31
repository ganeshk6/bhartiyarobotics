import React from 'react'
import Style from './Kits.module.css';
import Image from 'next/image'

const kitsCard = ({src, dec}) => {
  return (
    <>
    <div className={Style.kitsImage}>
        <div>
          <Image
            src={src}
            height={250}
            width={500}
            className={Style.image}
            alt="src"
          />
        </div>
        <div className={Style.sensorName}>
          <p>{dec}</p>
        </div>
      </div>
    </>
  )
}

export default kitsCard