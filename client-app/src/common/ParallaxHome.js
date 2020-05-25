import React from 'react'

import { Parallax, Background } from 'react-parallax';
const ParallaxHome=() =>{

    const image1 ="assets/images/poor.jpg";

    return (

        <Parallax bgImage={image1} style={{height:"320px"}} strength={500}>
        <div style={{ height: 500 }}>
        </div>
      </Parallax>
    )
}

export default ParallaxHome
