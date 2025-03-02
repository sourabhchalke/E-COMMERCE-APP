import React from 'react'
import Title from '../components/Title';
import {assets} from '../frontend_assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';

function Contact() {
  return (
    <div>
      <div className='text-2xl text-center pt-10 border-t'>
      <Title text1={"CONTACT"} text2={"US"}/>
      </div>

      <div className='flex flex-col md:flex-row justify-center gap-10 my-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-5'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>Address</p>
          <p className='text-gray-500'>Email : </p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

    <NewsLetterBox/>

    </div>
  )
}

export default Contact;
