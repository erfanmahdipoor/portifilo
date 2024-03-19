//import Image
import Image from "next/image";

//components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

//farmer motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary h-full bg-gradient-to-r from-primary/10  via-black/30 to-black/10">
      {/*text*/}
      <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container">
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h1"
        >
          {/*title*/}
          transforming Ideas <br /> into{" "}
          <span className="text-accent">digital reality</span>
        </motion.h1>
        {/*subTitle*/}
        <motion.p
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
        >
          lorem20sdmflksdf,;lsd;l jlskjdflksdjlkfjsfsdkjflksdjlkfjslkdjflskn sdm
          fkjsbdfk sjkd fks dfh sdk fkjsdbfkjh sdkf ksd f
        </motion.p>
        {/*btn*/}
        <div className="flex justify-center xl:hidden relative">
          <ProjectsBtn />
        </div>
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden xl:flex"
        >
          <ProjectsBtn />
        </motion.div>
      </div>
      {/*image*/}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/*bg-image*/}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-righ xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
       {/*particle*/}
        <div>particle</div>
       {/*avatar img*/}
        <div className="w-full h-full max-w-[737px] max-h-[678px] absolute bottom-0 lg:bottom-0 lg:right-[8%]">
          <Avatar/>
        </div>
      </div>
    </div>
  );
};

export default Home;
