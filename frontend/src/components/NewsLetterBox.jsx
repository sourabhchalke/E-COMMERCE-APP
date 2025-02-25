import React from 'react'

function NewsLetterBox() {

    const onSubmitHandler=(event)=>{
        event.preventDefault(); //When we submit this form then it will not reload the webpage
    }

  return (
    <div className='text-center'>
      <p className='text-3xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3  md:w-2/4 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eius debitis harum at, placeat accusantium fugit officiis dolorum incidunt molestias voluptatem ducimus ipsum commodi, quos molestiae! Quos ad debitis ipsum.</p>

    <form action="" onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter Your Email' required />
        <button type='submit' className='bg-black text-white py-4 px-10'>SUBSCRIBE</button>
    </form>

    </div>
  )
}

export default NewsLetterBox;
