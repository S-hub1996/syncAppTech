import { Box } from '@chakra-ui/react';
import React from 'react'
import Slider from "react-slick";
import './slider.css'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { SlideCard } from './SlideCard';

// import Loading from './Loading';
const ImgSlider = ({pack}) => {
// console.log(pack)
    const settings = {
      dots: false,
      infinite: true,
      speed: 900,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      arrows: true,
      autoplay:true,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            autoplay:true,
          },
        },
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            autoplay:true,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            autoplay:true,
          },
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            autoplay:true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2,
            autoplay:true,
          },
        },
        {
          breakpoint: 500,
          settings: {
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: false,
            autoplay:true,
          },
        },
      ],
    }
  return (
    <Box my={8} >
    
        <Slider {...settings}>
        {pack.length? pack?.map((Props)=>{
      return  <SlideCard Props={Props}  key={Props.id}/>
    }):null}
         
        </Slider>
      </Box>
  )
}

export default ImgSlider