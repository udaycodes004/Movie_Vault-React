import React from 'react'

function Pagination({pageno,Increment,Decrement}) {
  return (
    <div className='font-poppins flex px-1 py-2 mb-7 text-center justify-center gap-5 text-2xl my-3'>
      <div onClick={Decrement} className='hover:cursor-pointer'><i class="fa-solid fa-arrow-left"></i></div>
      <div className='w-[30px]'>
        {pageno}
      </div>
      
      <div onClick={Increment} className='hover:cursor-pointer'><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination
