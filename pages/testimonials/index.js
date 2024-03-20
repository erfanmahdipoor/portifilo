import Bulb from "../../components/Bulb";
import Circle from "../../components/Circles";
import ParticlesContainer from "../../components/ParticlesContainer";
import TestimonialSlider from "../../components/TestimonialSlider";
//farmer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full  py-32 text-center mt-20 xl:mt-32 max-w-[1200px] ">
      <div className="container mx-auto h-sull flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h2 mb-8 xl:mb-0  capitalize"
        >
          what clients <span className="text-accent">says...</span>
        </motion.h2>
        {/* {slider} */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
         
        >
          <TestimonialSlider />
        </motion.div>
      </div>
      <ParticlesContainer/>
    </div>
  );
};

export default Work;
