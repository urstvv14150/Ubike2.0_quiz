import React, {useState} from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({showDropdown, setShowDropdown}) => {
  
  return (
    
    <nav className='fixed top-0 w-full h-20 flex items-center border-b z-10 bg-white'> 
      <ul className='flex flex-auto h-full items-center mx-32 max-xl:mx-24 max-lg:mx-20 max-lg:text-sm max-md:hidden'>
        <li className='mx-7'>
          <Link href="/">
            <div className='w-24 flex'>
              <img src="/youbike.svg" alt=""/>
            </div>
          </Link>
        </li>
        <li className='mx-7 max-lg:mx-5 text-[#7A862E] font-bold hover:opacity-50 duration-150'><Link href="/howUse">使用說明</Link></li>
        <li className='mx-7 max-lg:mx-5 text-[#7A862E] font-bold hover:opacity-50 duration-150'><Link href="/fee">收費方式</Link></li>
        <li className='mx-7 max-lg:mx-5 text-[#7A862E] font-bold hover:opacity-50 duration-150'><Link href="/site">站點資訊</Link></li>
        <li className='mx-7 max-lg:mx-5 text-[#7A862E] font-bold hover:opacity-50 duration-150'><Link href="/new">最新消息</Link></li>
        <li className='mx-7 max-lg:mx-5 text-[#7A862E] font-bold hover:opacity-50 duration-150'><Link href="/active">活動專區</Link></li> 
        <li className='ml-auto'>
          <Link href="/login">
            <div className='text-white bg-[#B5CC22] w-24 h-8 rounded-full flex justify-center items-center'>
              登入
            </div>
          </Link>
        </li> 
      </ul>

      {/* mobile */}
      <ul className='flex flex-auto items-center mx-10 h-full min-md:hidden'>
        <li>
          <Link href="/">
            <div className='w-24 flex'>
              <img src="/youbike.svg" alt=""/>
            </div>
          </Link>
        </li>        
         
        <li className='ml-auto'>          
          <div className='flex justify-center items-center' onClick={() => setShowDropdown(!showDropdown)}>
            <FontAwesomeIcon className='text-[#BED23E] w-6 h-6' icon={faBars} />
          </div>          
        </li> 
      </ul>
      
    </nav>      
    
  );
};

export default Navbar;