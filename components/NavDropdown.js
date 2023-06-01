import React from 'react';
import Link from 'next/link';

const NavDropdown = () => {
  return (
    <div className='fixed top-20 h-[calc(100vh-5rem)] w-full text-white bg-[#B5CC22] z-[999] min-md:hidden'>
      <ul className='flex flex-col h-full mx-12 my-6'>
        <li className='h-12 my-2 font-bold hover:text-[#7A862E] tracking-[0.25rem] duration-150'><Link href="/howUse">使用說明</Link></li>
        <li className='h-12 my-2 font-bold hover:text-[#7A862E] tracking-[0.25rem] duration-150'><Link href="/fee">收費方式</Link></li>
        <li className='h-12 my-2 font-bold hover:text-[#7A862E] tracking-[0.25rem] duration-150'><Link href="/site">站點資訊</Link></li>
        <li className='h-12 my-2 font-bold hover:text-[#7A862E] tracking-[0.25rem] duration-150'><Link href="/new">最新消息</Link></li>
        <li className='h-12 my-2 font-bold hover:text-[#7A862E] tracking-[0.25rem] duration-150'><Link href="/active">活動專區</Link></li> 
        <li className='flex flex-auto items-end my-20'>
          <Link href="/login">
            <div className='bg-white text-[#B5CC22] w-24 h-10 rounded-full flex justify-center items-center'>
              登入
            </div>
          </Link>
        </li> 
      </ul>
    </div>
  );
};

export default NavDropdown;