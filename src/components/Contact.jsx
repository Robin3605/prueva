import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

import  styles  from "../styles";
// import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { fromHalfFloat } from "three/src/extras/DataUtils.js";
// import  {Html}  from "@react-three/drei";




const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    //template_uuzju9a
    //service_p14fd5a
    //OGMhkfHQXh0rtC156

    emailjs.send(
      'service_p14fd5a',
      'template_uuzju9a',
      {
        from_name: fromHalfFloat.name,
        to_name: 'Robin',
        from_email: form.email,
        to_email: 'hernan4625@gmail.com',
        message: form.message,
      },
      'OGMhkfHQXh0rtC156'
    )
    .then(() => {
      setLoading(false);
      alert('Thank you, I will get back to you as soon as possible.');

      setForm({
        name: '',
        email: '',
        message: '',
      })
      
    }, (error) => {
      setLoading(false)
      console.log(error);
      alert('Something went wrong.')
    })
  }
  return (

    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden mb-[40px] ml-[50px] w-[380px] items-center justify-center'>

    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden mb-[40px] ml-[50px] items-center justify-center '>

      <motion.div
      variants={slideIn('left', 'tween', 0.2, 1)}
      className="flex-[0.75]  p-8 rounded-2xl "
      >
        <p className={`${styles.sectionSubText} relative z-30 text-orange-600 font-bold`}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8 z-40 items-center justify-center mb-[15px] "
        >
          <label className="flex flex-col ">
            <span className="text-white font-medium mb-4">
              Your Name
            </span>
            <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none border-none font-medium"
            >

            </input>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Email
            </span>
            <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none border-none font-medium"
            >

            </input>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your message
            </span>
            <textarea
            rows="7"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What do yoy want to say?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-xl outline-none border-none font-medium "
            >

            </textarea>
          </label>
          <button
          type="submit"
          className="bg-tertiary py-3 px-8 outline-none w-fit text-orange-600 font-bold shadow-md shadow-primary rounded-xl text-xl border-white border-solid mb-[20px]"
          >
            {loading ? 'sending...' : 'send'}
          </button>
        </form>
      </motion.div>
      <motion.div
      variants={slideIn('right', 'tween', 0.2, 1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        
      </motion.div>
    </div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')