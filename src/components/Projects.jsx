import { MdArrowOutward } from "react-icons/md"
import { PROJECTS } from "../constants"
import {motion} from 'framer-motion'


function Projects() {
  return (
    <section className="pt-20" id="projects">
        <motion.h2
        initial={{opacity:0 , y:-20 }}
        whileInView={{opacity:1,  y:0}}
        transition={{duration:2}}
         className="mb-8 text-center text-3xl lg:text-4xl text-orange-600 font-semibold">Projects</motion.h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {PROJECTS.map((project) =>(
                    <motion.div
                    initial={{opacity:0 , scale:0.9}}
                    whileInView={{opacity:1 , scale:1}}
                    transition={{duration:2}}
                    whileHover={{scale:1.05}}
                     key={project.id} className="group relative overflow-hidden rounded-br-3xl border hover:border-orange-600">

                   
               
                    <motion.img
                    whileHover={{scale:1.1}}
                     src={project.image} alt={project.name}  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 text-black"/>
                    <motion.div
                    initial={{opacity:0}}
                    whileHover={{opacity:1}}
                    transition={{duration:1}}
                     className="absolute inset-0 flex flex-col items-center justify-center text-black opacity-0 backdrop-blur-0 transition-opacity duration-500 group-hover:opacity-100">
                        {/* <h3 className="mb-2 text-xl">{project.name}</h3>
                        <p className="mb-12 p-4">{project.description}</p> */}
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="rounded-full bg px-4 py-2 text-white bg-orange-600">
                            <div className="flex items-center">
                                <span>
                                    View on Github

                                </span>
                                <MdArrowOutward/>
                            </div>
                        </a>

                </motion.div>
                </motion.div>

            ))}
            </div>
        
    </section>
  )
}

export default Projects
