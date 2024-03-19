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
        <h1 className="h1">
          {/*title*/}
          transforming Ideas <br /> into{" "}
          <span className="text-accent">digital reality</span>
        </h1>
        {/*subTitle*/}
        <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">lorem20sdmflksdf,;lsd;l  jlskjdflksdjlkfjsfsdkjflksdjlkfjslkdjflskn sdm fkjsbdfk sjkd fks dfh sdk fkjsdbfkjh sdkf ksd f</p>
      </div>
      {/*image*/}
      <div>image</div>
    </div>
  );
};

export default Home;
