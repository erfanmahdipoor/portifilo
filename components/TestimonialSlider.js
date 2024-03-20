// testimonial data
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Anne Smith",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-2.png",
    name: "Jane Doe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "/t-avt-3.png",
    name: "Jhon Doe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
];

// icons
import { FaQuoteLeft } from "react-icons/fa";
import { RxArrowTopRight } from "react-icons/rx";
//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
//import swiper styles
import { Swiper as S } from "swiper/css";
import FreeModes from "swiper/css/free-mode";
import Paginationages from "swiper/css/pagination";
import  'swiper/css/navigation'

//import required modules
import { Navigation,FreeMode, Pagination } from "swiper";
import { rule } from "postcss";

//components
import Bulb from "../components/Bulb";
import Avatar from "./Avatar";
//import image from next
import Image from "next/image";
const TestimonialSlider = () => {
  return (
    <Swiper
      // breakpoints={{
      //   320: { slidesPerView: 1, spaceBetween: 15 },
      //   640: { slidesPerView: 3, spaceBetween: 15 },
      // }}
      navigation={true}
      spaceBetween={10}
      freeMode={true}
      pagination={true}
      modules={{ Navigation, Pagination }}
      className="  h-[400px] sm:h-[340px] "
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row  h-full px-16 lg:mx-360 mx-auto">
              {/* {avatar name position} */}
              <div className="w-full max-w-[300px] flex felx-col xl:justify-center relative mx-auto xl:mx-0 ">
                <div className="flex gap-4 ">
                  {/* {Avatar} */}
                  <div className="flex flex-col justify-center text-center items-center">
                    <Image
                      src={person.image}
                      width={100}
                      height={100}
                      alt="avater"
                    />
                  </div>
                  <div>
                  {/* {name} */}
                  <div className="absolute left-32 top-10 xl:left-60 w-[100px]">{person.name}</div>
                  {/* {position} */}
                  <div className="absolute left-32 top-16 xl:left-60 ">
                    {person.position}
                  </div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-1 flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] z-50">
                {/* {quote && massge} */}
                <div className="mb-4   hidden  top-40">
                  {/* {quote} */}
                  <FaQuoteLeft className="text-4xl xl:text-6xl  text-white/20 mx-auto  md:mx-0 " />
                </div>
                {/* {massge} */}
                <div >
                  <div className=" text-xs xl:text-sm text-center md:text-left max-h-34  mx-44 ">
                    {person.message}
                  </div>
                </div>
              </div>
             
               
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
