import React, { useState } from 'react'

function Login() {

  const [currentState,setCurrentState]=useState('Login');

  const onSubmitHandler = async(event)=>{
    event.preventDefault();
  }

  return (

    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-black'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentState === 'Login' ? '':<input type="text" placeholder='Name' required className='border border-gray-800 px-3 py-2 w-full'/>}
      <input type="email" placeholder='Email' required className='border border-gray-800 px-3 py-2 w-full'/>
      <input type="password" placeholder='Password' required className='border border-gray-800 px-3 py-2 w-full' />

      <div className='w-full flex justify-between text-sm mt-[8px]'>
        <p className='cursor-pointer'>Forget your password ?</p>
        {
          currentState === 'Login' ?
          <p onClick={()=> setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p> :
          <p onClick={()=> setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
        }
      </div>

      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign up'}</button>

    </form>

  )
}

export default Login;
