

import emailjs from '@emailjs/browser';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FiSend } from 'react-icons/fi';
import {motion} from 'framer-motion'

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false); // Corrected naming

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);
      emailjs
        .send(
          "service_n7bhpe5",
          "template_qrmylbr",
          formData,
          "xkDklV6jByae3dQSG"
        )
        .then(() => {
          toast.success("Message sent successfully");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("FAILED...", error);
          toast.error("Failed to send the message. Please try again later.");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <div className='p-4  lg:w-3/4' id='contact'>
      <Toaster />
      <motion.h2
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          repeat:Infinity,
          duration:15,
          ease: "linear",
        }}
       className='my-8 text-center text-3xl lg:text-4xl font-semibold tracking-tighter text-orange-600'>Lets Connect</motion.h2>
      <motion.form
      initial={{opacity:0, y:-30}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:2 , delay:1}}
       onSubmit={handleSubmit}>
        <div className='mb-4 flex space-x-4 '>
          <div className='lg:w-1/2 '>
            <input
              type="text"
              id='name'
              name='name'
              value={formData.name}
              placeholder='Name'
              onChange={handleChange}
              className='mb-8 w-full appearance-none rounded-br-xl border border-orange-600 bg-transparent px-3 py-2 text-sm focus:outline-none '
            />
            {errors.name && <p className='text-sm text-orange-600'>{errors.name}</p>}
          </div>
          <div className='lg:w-1/2 '>
          <input
            type="email"
            id='email'
            name='email'
            value={formData.email}
            placeholder='Email'
            onChange={handleChange}
            className='mb-8 w-full appearance-none  rounded-br-xl border border-orange-600  bg-transparent px-3 py-2 text-sm  focus:outline-none'
          />
          {errors.email && 
          <motion.p
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          className='text-sm text-orange-600'>{errors.email}</motion.p>
          }
        </div>
        </div>
       
        <div className='mb-4'>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            placeholder='Message'
            onChange={handleChange}
            className='mb-8 w-full rounded-br-xl border-orange-600 appearance-none  border bg-transparent px-3 py-2 text-sm  focus:outline-none resize-none '
            rows="8" 
          />
          {errors.message && 
          
          <motion.p 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          className='text-sm text-orange-600'>{errors.message}</motion.p>
          }
        </div>
        <button
          type='submit'
          className={`mb-8 w-full rounded border border-none hover:text-white bg-orange-600 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-purple-800 ${
            isSending ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSending}
        >
          <div className='flex items-center  justify-center gap-2'>
            {isSending ? "Sending..." : "Send"}
            <FiSend />
          </div>
        </button>
      </motion.form>
    </div>
  );
}

export default Contact;
