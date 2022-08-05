import Link from 'next/link';
import { BiPowerOff, BiBriefcase, BiWallet } from 'react-icons/bi';
import { BsGrid } from 'react-icons/bs';
import { AiOutlineLineChart } from 'react-icons/ai';
import SidebarLink from '@/components/SidebarLink/SidebarLink';

export default function Sidebar() {
  return (
    <div className='z-50 w-full md:w-1/5 bg-[#F8F8F8] text-[#837878] px-2 text-center fixed bottom-0 md:pt-8 md:top-0 md:left-0 h-16 md:h-screen'>
      <div className='flex flex-row justify-between md:flex-col md:relative'>
        <h2 className='hidden md:block text-[#232C3D] text-base lg:text-2xl font-semibold mb-5'>
          Reits Africa
        </h2>

        <Link href='/dashboard'>
          <a>
            <SidebarLink text='Dashboard' Icon={BsGrid} />
          </a>
        </Link>
        <Link href='/portfolio'>
          <a>
            <SidebarLink text='Portfolio' Icon={BiBriefcase} />
          </a>
        </Link>
        <Link href='/wallet'>
          <a>
            <SidebarLink text='Wallet' Icon={BiWallet} />
          </a>
        </Link>
        <Link href='#'>
          <a>
            <SidebarLink text='Properties' Icon={AiOutlineLineChart} />
          </a>
        </Link>
        <Link href='#'>
          <a>
            <SidebarLink text='Logout' Icon={BiPowerOff} />
          </a>
        </Link>
      </div>

      <div className='hidden lg:block bg-[#E7EAF2] rounded-md lg:my-5 p-4 cursor-pointer'>
        <div className='flex'>
          <img src={'/shape.png'} alt='shape' />
          <div className='flex flex-col ml-2'>
            <h4 className='text-black text-xs font-medium'>Marvelous IK</h4>
            <p className='flex flex-start text-[#ABB7BC] text-xs'>Agent</p>
          </div>
        </div>
      </div>
    </div>
  );
}
