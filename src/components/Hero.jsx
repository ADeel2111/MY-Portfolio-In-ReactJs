import { HERO } from "../constants";
import adeelimg from "../assets/adeelimg.png";
import { motion } from "framer-motion";
export default function App() {
  return (
    <section className=" flex flex-wrap min-h-screen items-center">
      {/* <div className="bg-img fixed bg-cover bg-center bg-fixed inset-0"></div> */}

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="w-full md:w-1/2"
      >
        <motion.h2
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "linear",
          }}
          className="text-orange-600 my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]"
        >
          {HERO.name}
        </motion.h2>
        <p className="p-2 text-violet-800 text-3xl tracking-tighter lg:text-4xl">
          {HERO.greet}
        </p>
        <p className="mb-8 p-2  text-xl text-justify">{HERO.description}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="w-full md:w-1/2 lg:p-8"
      >
        <div className=" flex  justify-center">
          <motion.img
            opacity={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            duration={{ duration: 1 }}
            className=" rounded-3xl "
            width={400}
            height={400}
            src={adeelimg}
            alt="Adeel Ijaz"
          />
        </div>
      </motion.div>
    </section>
  );
}
