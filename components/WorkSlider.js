// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};



//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
//import swiper styles
import { Swiper as S } from "swiper/css";
import FreeModes  from "swiper/css/free-mode";
import  Paginationages from "swiper/css/pagination";

//import required modules
import { FreeMode, Pagination } from "swiper";
import { rule } from "postcss";
//import image from next
import Image from "next/image";

const WorkSlider = () => {
  
 
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 3, spaceBetween: 15 },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={{ FreeMode, Pagination }}
      className="  h-[240px] sm:h-[340px] "
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
           {
            slide.images.map((image,index)=>{
              return(
                <div key={index}>
                 <div>
                  <Image src={image.path} width={600} height={300} alt="image of work"/>
                 </div>
            
                </div>
              )
            })
           }
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;