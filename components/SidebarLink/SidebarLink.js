import { useRouter } from 'next/router';

export default function SidebarLink({ Icon, text, active }) {
  const router = useRouter();

  return (
    <div
      className={`flex items-center text-xs md:text-base flex-col sm:flex-col  md:flex-row md:space-x-4 px-4 py-5 rounded-md hover:bg-lightPinkColor cursor-pointer transition-all duration-200 group ${
        active && 'text-redColor bg-lightPinkColor'
      }`}
      onClick={() => active && router.push('/')}
    >
      <Icon className='h-6 w-6 sm:text-center text-[#837878] group-hover:text-redColor' />
      <p className='group-hover:text-redColor'>{text}</p>
    </div>
  );
}
