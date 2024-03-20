//components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circle from "../../components/Circles";
import P from "../../components/ParticlesContainer";
//farmer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import ParticlesContainer from "../../components/ParticlesContainer";

const Work = () => {
  return (
    <div className="h-full py-36 flex items-center  xl:mr-[20%] bg-blend-color ">
      <Circle />
      <div className="container mx-auto flex flex-col xl:flex-row">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* {text} */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 1, ease: "easeInOut" }}
              className="h2 xl:mt-8"
            >
              my works <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ duration: 1, ease: "easeInOut" }}
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              asjdkljaslknmdlasndlknlkanslkdkjsdkllaskd;laks k;l k;laskd ;lks;dl
              k;laskd ;lk ;ldka;lsdk;lask ;kd{" "}
            </motion.p>
          </div>
        </div>
        {/* {slider} */}
        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full xl:max-w-[65%] ">
          <WorkSlider />
        </motion.div>
      </div>
      <Bulb />
      <ParticlesContainer/>
    </div>
  );
};

export default Work;
