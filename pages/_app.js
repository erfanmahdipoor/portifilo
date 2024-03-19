import "../styles/globals.css";
//components
import Layout from "../components/Layout";
import Transition from "../components/Transition";
//router
import { useRouter } from "next/router";
//framer motion
import { AnimatePresence, motion } from "framer-motion";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  console.log(router)
  return (
    <AnimatePresence mode="wait">
      <Layout>
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
