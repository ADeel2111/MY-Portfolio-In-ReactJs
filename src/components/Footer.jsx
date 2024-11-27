
import React from 'react'
import logo from '../assets/logo.png'
import { SOCIAL_MEDIA_LINKS } from '../constants'
import {motion} from 'framer-motion'

function Footer() {
  return (
    <div className='mb-8 mt-20'>
        <div className='flex items-center  justify-center'>
            <motion.img
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:2}}
             src={logo} width={200} className='my-20' alt="" />
        </div>
        <div className='flex text-orange-600 items-center justify-center gap-8'>
            {SOCIAL_MEDIA_LINKS.map((link , index) =>(
           <motion.a
           initial={{opacity:0}}
           whileInView={{opacity:1}}
           transition={{duration:2 , delay:index*0.5}}
            key={index} href={link.href} rel='noopener noreferrer' target='_blank'>{link.icon}</motion.a>


            ))}
        </div>
        <motion.p
        initial={{opacity:0, y:20 }}
        whileInView={{opacity:1, y:0 }}
        transition={{duration:2}}

        className='mt-8 mb-4 text-center text-sm tracking-wide text-gray-400'><span className='text-orange-600'>&copy;Adeel</span>. All right reserved.</motion.p>
      
    </div>
  )
}

export default Footer
