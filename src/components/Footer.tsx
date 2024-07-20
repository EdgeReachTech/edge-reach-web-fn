import React from 'react';
import { IoMdCall } from 'react-icons/io';
import { MdEmail, MdOutlinePermIdentity, MdSend } from 'react-icons/md';
import { FaSitemap, FaQuestionCircle,FaArrowRight,FaInstagram,FaTwitter,FaLinkedinIn,FaGithub,FaPinterestSquare,FaFacebook,FaRegArrowAltCircleUp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <div className='min-h-full'>
      <footer className='flex flex-col justify-center items-center min-h-full relative'>
        <div className='absolute inset-0 flex flex-col'>
          <div className='h-1/3 bg-gray-300'></div>
          <div className='h-2/3 bg-gradient-to-r from-gray-950 to-gray-700'></div>
        </div>
        <div className='flex flex-col justify-center items-center z-10 w-full max-w-screen-xl'>
          <div className='box-border border-solid rounded-lg bg-gradient-to-r from-orange-500 to-yellow-400 m-3 p-4 w-full'>
            <div className='flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-16'>
              <div className='font-bold flex-1'>
                <h4 className='text-white font-bold mb-4'>Leave message</h4>
                <label htmlFor="name" className='mx-3'>Name:</label>
                <input type="text" className="w-full lg:w-auto p-2 focus:border-transparent bg-transparent outline-double rounded-lg mb-4" id="name" /><br />
                <label htmlFor="email" className='mx-3'>Email:</label>
                <input type="email" className="w-full lg:w-auto p-2 focus:border-transparent bg-transparent outline-double rounded-lg mb-4" id="email" /><br />
                <textarea name="message" id="message" placeholder='message' className='w-full lg:w-72 p-2 focus:border-transparent bg-transparent outline-double rounded-lg mb-4 mx-3'></textarea>
              </div>
              <div className='font-bold flex-1'>
                <h4 className='text-white font-bold mb-4 lg:mb-12'>Contact us</h4>
                <div className='flex items-center mb-2'><IoMdCall size={30} className='mr-2' /> +250 788 764 885</div>
                <div className='flex items-center mb-2'><IoMdCall size={30} className='mr-2' /> +250 733 77 0003</div>
                <div className='flex items-center mb-2'><MdEmail size={30} className='mr-2' /> edgereachtech@gmail.com</div>
                <div className='flex items-center'><MdOutlinePermIdentity size={30} className='mr-2' /> Kigali, Rwanda</div>
              </div>
              <div className='font-bold flex-1'>
                <h4 className='text-white font-bold mb-4 lg:mb-16'>Support Center</h4>
                <div className='flex items-center p-2'><FaQuestionCircle className='mr-2' /> FAQs</div>
                <div className='flex items-center'><FaSitemap size={30} className='mr-2' /> Site map</div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col  z-10 w-full max-w-screen-xl'>
          <div className='flex flex-col lg:flex-row'>
            <div className='flex-1 '>
              <p className='text-white font-bold text-2xl'>Have an idea or Project?Lets Talk</p>
              <div className='flex gap-5'>
                <h3 className='text-gray-500 font-bold'>contact us</h3>
                <FaArrowRight size={30} className='text-orange-400'/>
              </div>
              <h3 className='text-violet-700 font-bold'>social media</h3>
              <div className='h-10 w-80 bg-gradient-to-r from-orange-500 to-yellow-400 mb-2 rounded-lg'>
                <div className='flex justify-center items-center m-4 gap-2 p-3'>
                  <h3>Follow Us</h3>
                  <FaPinterestSquare/>
                  <FaGithub/>
                  <FaLinkedinIn/>
                  <FaInstagram/>
                  <FaTwitter/>
                  <FaFacebook/>
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <h3 className='text-gray-500 font-semibold'>Send me tips,trendes,updates&offer</h3>
              <div className='w-80 h-10 bg-gradient-to-r from-cyan-300 to-cyan-600 rounded-lg flex p-2 gap-9 '>
                <input type="text" name="" id="" placeholder ='enter your email address' className='bg-transparent placeholder-slate-950' />
                <button className='text-white font-bold'>subscribe</button>
              </div>
            </div>
          </div>
          <div className='flex text-white font-bold gap-10 m-auto'>
            <h3>+250-788-674-885</h3>
            <h3>TERMS AND SERVICES</h3>
            <h3>COPYRIGHT</h3>
            <h3>KIGALI RWANDA</h3>
            <h3>FAQ</h3>
          </div>
          <div className='text-gray-400 flex  '>
            <p className='lg:-mx-32'>Created And Managed <span className='block'>By EdgeReach Tech</span></p>
            <p className='m-auto '>EdgereachTech All Right Reserved 2024</p>
            <FaRegArrowAltCircleUp size={50} className='text-cyan-500 mb-3' />

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
