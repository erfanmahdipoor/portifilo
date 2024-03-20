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
import FreeModes from "swiper/css/free-mode";
import Paginationages from "swiper/css/pagination";

//import required modules
import { Navigation, FreeMode, Pagination } from "swiper";
import { rule } from "postcss";

//components
import Bulb from "../components/Bulb";
// data
const WorkSlide = [
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

const WorkSlider = () => {
  return (
    <Swiper
      // breakpoints={{
      //   320: { slidesPerView: 1, spaceBetween: 15 },
      //   640: { slidesPerView: 3, spaceBetween: 15 },
      // }}
      // navigation={true}
      spaceBetween={10}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={{ FreeMode, Pagination }}
      className="  h-[240px] sm:h-[340px] "
    >
      {WorkSlide.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg  py-8  flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer  hover:bg-[rgbz(89,65,169,0.15)] transition-all duration-300 justify-between xl:items-center xl:justify-center relative overflow-hidden ">
              {/* {icon} */}
              <div className="text-4xl text-accent mb-4 pr-2 group-hover:text-white">
                {item.icon}
              </div>
              {/* {title ad desc} */}
              <div className="flex flex-col w-full ml-2 ">
                <div className="mb-2 text-lg ">{item.title}</div>
                <div className=" leading-normal text-sm ">
                  {item.description}
                </div>
                {/* {overlay gardient} */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838df] to-[#4a22bd] opacity-0 group-hover:opacity-40 group-hover:border-solid transition-all duration-700"></div>
                <div className="absolute hidden group-hover:flex group-hover:top-0 group-hover:right-0 rotate-45 text-4xl text-accent group-hover:transition-all group-hover:duration-500 transition-all duration-75 animate-pulse delay-75">
                  {/* {arrows} */}
                  <div>
                    <RxArrowTopRight />
                  </div>
                </div>
                <div className="absolute hidden group-hover:inline-block group-hover:top-5 group-hover:right-6  text-opacity-70 text-xs text-accent delay-75 ">
                  {/* {arrows} */}
                  <div>
                    <span className="group-hover:text-sm group-hover:text-white animate-pulse duration-75 transition-all">
                      drag{" "}
                    </span>{" "}
                    it
                  </div>
                </div>
                <div className="absolute -bottom-64 right-6 z-40 hidden group-hover:inline-block opacity-20 delay-150">
                  <Bulb />
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
