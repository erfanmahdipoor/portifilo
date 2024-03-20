//componets
import Circle from "../../components/Circles";

//icons
import { BsArrowRight } from "react-icons/bs";

//farmer

import { motion } from "framer-motion";

//variants

import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30 ">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* {text && form} */}
        <div className="flex flex-col items-center w-full max-w-[700px] ">
          {/* {text} */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12 hover:animate-bounce"
          >
            let's <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.form
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            action=""
            onSubmit={() => {}}
            className="flex flex-col gap-y-6 w-full mx-auto"
          >
            {/* {input group} */}
            <div className="flex gap-x-6 w-full ">
              <input type="text" placeholder="name" className="input" />
              <input type="email" placeholder="email" className="input" />
            </div>
            <input type="email" placeholder="subject" className="input" />
            <textarea placeholder="massge" className="textarea"></textarea>
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all  duration-300 flex items-center justify-center overflow-hidden hover:border-accent group ">
              <span className="animate-pulse">let's talk</span>
              <BsArrowRight className=" animate-pulse" />
            </button>
          </motion.form>
        </div>
      </div>
      <Circle/>
    </div>
  );
};

export default Contact;
