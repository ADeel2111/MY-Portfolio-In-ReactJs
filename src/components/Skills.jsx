import { SKILLS } from "../constants"
import {motion} from 'framer-motion'


const containerVariants = {
    hidden:{opacity:0 , y:20},
    visible:{opacity:1 ,
         y:0,
         transition:{
            duration:1, 
            staggerChildren:0.5,
         },
        },
}

const itemsVariants = {
    hidden:{opacity:0 , x:-20},
    visible :{
        opacity:1,
        x:0,
        transition:{duration:0.5},
    }
}

function Skills() {
  return (
   <div className="container mx-auto" id="skills">
    <motion.h2
     initial={{opacity:0 , y:-20 }}
     whileInView={{opacity:1,  y:0}}
     transition={{duration:2}}
     className="mb-12 mt-20 text-center text-3xl lg:text-4xl text-orange-600 font-semibold">Skills</motion.h2>
        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{once:true}}

         className="mx-2  flex-col rounded-br-3xl px-4 py-2 lg:px-20 border border-orange-600">
        {SKILLS.map((skill , index) =>(
            
     
            <motion.div
            variants={itemsVariants}
             key={index} className={`py-6 flex items-center justify-between ${index !== SKILLS.length - 1 ? "border-b border-stone-50/30" : ""}`}>
                <div className=" flex items-center">
                    {skill.icon}
                    <h3 className=" px-6 text-lg lg:text-2xl">
                        {skill.name}

                    </h3>
                </div>
                <div className="text-md font-thin lg:text-xl">
                    <span>
                        {skill.experience}

                    </span>
                </div>
            </motion.div>
               ) )}
        </motion.div>
    
   </div>
  )
}

export default Skills
