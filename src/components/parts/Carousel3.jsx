import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function Carousel3(props){
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return(
      
    <Carousel
      swipeable={true}
      draggable={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      showDots={true}
      autoPlay={false}
      keyBoardControl={true}
      customTransition="all 1.5"
      // transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      deviceType={props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      arrows={false}
      className='pt-4 pb-5'
      
          >
      <div className='px-5'>{props.content1}</div>
      <div className='px-5'>{props.content2}</div>
      <div className='px-5'>{props.content3}</div>
      
    </Carousel>
  )
}



export default Carousel3