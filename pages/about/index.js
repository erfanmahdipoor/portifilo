import { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  // {
  //   title: "credentials",
  //   info: [
  //     {
  //       title: "Web Development - ABC University, LA, CA",
  //       stage: "2011",
  //     },
  //     {
  //       title: "Computer Science Diploma - AV Technical Institute",
  //       stage: "2009",
  //     },
  //     {
  //       title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
  //       stage: "2006",
  //     },
  //   ],
  // },
];
//components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import ParticlesContainer from "../../components/ParticlesContainer";
//farmer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
//counter
import Countup from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left  ">
      <Circles />
      {/* {avatar image} */}
      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{ duration: 1, ease: "easeInOut" }}
        className="hidden xl:flex absolute bottom-0 left-[-180px] z-50 xl:max-w-sm "
      >
        <Avatar />
      </motion.div>
      {/* {pricticl} */}
      <ParticlesContainer />
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 mt-14">
        {/* {text} */}
        <div className="flex flex-1 flex-col justify-center ml-6 xl:font-thin">
          <motion.h2
            variants={fadeIn("top", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h2 hidden sm:block"
          >
            captivaing <span className="text-accent">stories </span> brith
            manificent design
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="max-w-[500px] mx-auto xl:mx-0 xl:mb-32 px-2 xl:px-2 hidden xl:inline-block "
          >
            10 years ago i bgan freelansing as a developer. since than , I've
            done a
          </motion.p>
          {/* {counters} */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex felx-col xl:flex-row gap-x-3 mt-4 "
          >
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 xl:flex-col mb-10  ">
              {/* {experience} */}
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                <Countup start={0} end={2} duration={5} />+
                <div className="text-xs uppercase traking-[1px] leading-[1.4] max-w-[100px]">
                  years of experience
                </div>
              </div>
            </div>
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              {/* {clients} */}
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                <Countup start={0} end={250} duration={5} />+
                <div className="text-xs uppercase traking-[1px] leading-[1.4] max-w-[100px]">
                  satisfied cliente
                </div>
              </div>
            </div>
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 ">
              {/* {finished} */}
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                <Countup start={0} end={650} duration={5} />+
                <div className="text-xs uppercase traking-[1px] leading-[1.4] max-w-[100px]">
                  finished project
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* {info} */}
        <motion.div
          variants={fadeIn("rigleftht", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex flex-col w-full xl:mx-w-[48%] h-[480px] mb-60 mx-auto "
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mt-64 ">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={` ${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:dura"
                  }   cursor-pointer capitalize xl:text-lg relative after:h-[2px] after:bg-white after:absolute after:bottom-1 after:left-0 `}
                  onClick={() => {
                    setIndex(itemIndex);
                  }}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div
            className=" xl:ml-20 py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4
          items-center xl:items-start rounded-lg xl:mr-72"
          >
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 text-white/60 px-2"
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden xl:flex">-</div>
                  <div>{item.stage}</div>
                  {/* {icons} */}
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div
                          className="text-2xl transition-all duration-500 text-white"
                          key={itemIndex}
                        >
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
