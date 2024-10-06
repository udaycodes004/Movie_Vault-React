import React from 'react'
import Logo from './Movielogo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='font-poppins flex border-y-2 border-black space-x-8 items-center py-3 px-1 text-3xl bg-[#A2BCE0]'>
      <img className='w-[35px] h-[30px] ml-2' src={Logo} alt="" />
      <Link className='text-[#0B5563] font-bold' to="/">Home</Link>
      <Link className='text-[#0B5563] font-bold' to="/watchlist">Watchlist</Link>
    </div>
  )
}

export default Navbar
