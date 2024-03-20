// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
//import swiper styles
import { Swiper as S } from "swiper/css";
import FreeModes  from "swiper/css/free-mode";
import  Paginationages from "swiper/css/pagination";

//import required modules
import { FreeMode, Pagination } from "swiper";
import { rule } from "postcss";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const ServiceSlider = () => {
  
 
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
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg  py-8  flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer  hover:bg-[rgbz(89,65,169,0.15)] transition-all duration-300 justify-between xl:items-center xl:justify-center">
              {/* {icon} */}
              <div className="text-4xl text-accent mb-4 pr-2">{item.icon}</div>
              {/* {title ad desc} */}
              <div className="flex flex-col w-full ml-2 ">
                <div className="mb-2 text-lg ">{item.title}</div>
                <div className=" leading-normal text-sm ">{item.description}</div>
              </div>
              {/* {arrows} */}
              <div className="group-hover:rotate-45 group-hover:text-accent absolute top-1 right-1 transition-all duration-300 xl:top-44 xl:left-4  ml-36 mb-2 group-hover:ml-2">
                <RxArrowTopRight />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
