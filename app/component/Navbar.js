import React from 'react'
import Image from 'next/image'
import logo from '@/public/assets/Group (1).svg';
import star1 from '@/public/assets/Star 1.svg';

const Navbar = () => {
  return (
    <div className='w-full px-3 pt-4'>
       <nav className=' w-10/12 mx-auto  '>
          <div className='flex items-center justify-between '>
             <div className='flex items-center justify-between w-[550px] py-4'>
                <Image src={logo} alt='logo' className='w-[8rem] h-[34.41px] '
                />

                <ul className='flex gap-7 items-center justify-center'>
                    <li className='text-[#FF5555]  font-clash font-bold text-xl '>Home</li>
                    <li className=' font-clash font-regular text-xl '>About Us</li>
                    <li className='text-xl'>Pricing</li>
                    <li className='text-xl'>Features</li>
                </ul>
             </div>
             <button className='bg-[#000] w-[180px] mr-5 h-[50px] text-white rounded-sm'>Download</button>
          </div>

       </nav>
        
        <Image src={star1} loading='lazy' className='w-[64px] absolute h-[64px] z-[1]  right-7 top-[4rem]'/>
    </div>
  )
}

export default Navbar