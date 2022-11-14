


import React from 'react'
// import  { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Wo from './Wo';
import Men from './Men';
import Kids from './Kids';
import { Link } from '@chakra-ui/react';
const Carouselll = () => {
  return (
   <>
       <Carousel 
       showThumbs={false}
       autoPlay={true}
       transitionTime={500}
       showStatus={false}
       infiniteLoop={true}
    >

                <div><Link textDecoration={"none"} href="/Wo"><Wo/></Link></div>
                <div><Men/></div>
                <div><Kids /></div>


            </Carousel>
   
   </>
  )
}

export default Carouselll