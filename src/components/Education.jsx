import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

function Education() {
  return (
    <section className="py-8" id="education">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="mb-4 text-center justify-text text-3xl lg:text-4xl  text-orange-600 font-semibold"
      >
        Education
      </motion.h2>
      {EDUCATION.map((edu, index) => (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: index * 0.5 }}
          key={index}
          className="mb-6 p-10"
        >
          <h3 className="text-xl font-semibold text-blue-500">{edu.degree}</h3>
          <p className="text-lg">{edu.institution}</p>
          <p className="text-sm text-stone-300">{edu.duration}</p>
          <p className="mt-2 text-justify">{edu.description}</p>
        </motion.div>
      ))}
    </section>
  );
}

export default Education;
