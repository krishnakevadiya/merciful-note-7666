
import React from 'react'
import "./land.css"
// import Carousell from './Carousel'
import { Button } from "@chakra-ui/react";

import Carouselll from './Carousel';
const styles={
 
  display: "flex",
  columns: 3,
    

  
}
const Landingpage = () => {
  return (
    <>
     
    <div className='po'>
    <div>
          <Carouselll/>
        </div>
      <img src='https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-new/subhome-xmedia-45//w/1366/IMAGE-landscape-default-fill-72e23389-afdf-460f-95e6-0b2eb0aab4d3-default_0.jpg?ts=1667838049147'></img> 
      <img src='https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-party/subhome-xmedia-45-2//w/1366/IMAGE-landscape-default-fill-92c17c8f-160b-4edc-a2bb-b49d1e165b21-default_0.jpg?ts=1668167617711'/>
      <img src='https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-party/subhome-xmedia-45//w/1366/IMAGE-landscape-default-fill-46622de3-a329-4630-a57a-d51bbc789963-default_0.jpg?ts=1667808571845'></img>
      <img src='https://static.zara.net/photos///contents/mkt/spots/aw22-north-woman-shoes-bags/subhome-xmedia-45//w/1366/IMAGE-landscape-fill-c4b22866-4811-4b7e-8882-d7ed0270ca1f-default_0.jpg?ts=1667808315533'></img>
    </div>
    <div className='lastbox'>
      
      <div className='insidebox'>JOIN OUR NEWSLETTER</div> 
      <div className='social'>
        <div><a href='https://www.instagram.com/zara/'>INSTRAGRAM</a></div>
        <div><a href='https://www.facebook.com/Zara'>FACEBOOK</a></div>
        <div><a href='https://www.pinterest.es/zaraofficial/'>PINTEREST</a></div>
        <div><a href='https://twitter.com/ZARA'>TWITTER</a></div>
        <div><a href='https://www.youtube.com/user/zara'>YOUTUBE</a></div>
        <div><a href='https://open.spotify.com/user/r6ivwuv0ebk346hhxo446pbfv'>SPOTIFY</a></div>
        
      </div>
    
    </div>
    </>
  )
}

export default Landingpage
