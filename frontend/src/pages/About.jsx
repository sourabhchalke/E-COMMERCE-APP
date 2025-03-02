import React from 'react'
import Title from '../components/Title';
import {assets} from '../frontend_assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';

function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-10 border-t'>
        <Title text1={"ABOUT"} text2={"US"}/>
      </div>

      <div className='flex flex-col md:flex-row gap-16 my-10'>
        <img src={assets.about_img} alt="" className='w-full md:max-w-[450px]' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, ex quod? Obcaecati quod a maxime, earum, consectetur adipisci architecto provident natus illo exercitationem eum in animi est quae. Et, distinctio.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error a vel officia aut ex earum, ab dolores, voluptas magnam aliquid sunt adipisci non fugit. Minima reiciendis esse ratione et fuga.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis libero quidem distinctio cumque id deserunt tempora aspernatur quo magni vel aperiam, fugiat, voluptatibus perspiciatis ducimus harum delectus omnis iusto odio.</p>
        </div>
      </div>

    <div className='text-2xl py-4'>
      <Title text1={"WHY"} text2={"CHOOSE US"}/>
    </div>
     
     <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-6 md:px-14 py-6 sm:py-14 flex flex-col gap-5'>
        <b>Quality Assurance</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti tenetur vero ad delectus incidunt eaque perspiciatis dolor repellat quisquam! Facilis vel commodi quibusdam dicta ducimus delectus suscipit sint excepturi incidunt.</p>
      </div>
      <div className='border px-6 md:px-14 py-6 sm:py-14 flex flex-col gap-5'>
        <b>Quality Assurance</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti tenetur vero ad delectus incidunt eaque perspiciatis dolor repellat quisquam! Facilis vel commodi quibusdam dicta ducimus delectus suscipit sint excepturi incidunt.</p>
      </div>
      <div className='border px-6 md:px-14 py-6 sm:py-14 flex flex-col gap-5'>
        <b>Quality Assurance</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti tenetur vero ad delectus incidunt eaque perspiciatis dolor repellat quisquam! Facilis vel commodi quibusdam dicta ducimus delectus suscipit sint excepturi incidunt.</p>
      </div>
     </div>

     <NewsLetterBox />

    </div>
  )
}

export default About;
