import { MdOutlineArrowForwardIos } from 'react-icons/md';

export default function Dashboard() {
  return (
    <div>
      <div>
        <h1 className='text-base mt-5'>Welcome</h1>
        <h2 className='text-[28px] md:text-[48px]'>Hello, Marv</h2>
      </div>

      <div className='wrapper'>
        <div className='flex items-center justify-between md:mt-5 lg:mt-10'>
          <h3 className='text-lg md:text-2xl'>Overview</h3>
          <button className='bg-[#EC3335] sm:text-md text-white shadow-lg px-6 py-2 rounded-md'>
            + List Property
          </button>
        </div>

        <div className='cards mt-5 cursor-pointer'>
          <div className='flex'>
            {/* cards */}
            <div className='bg-white shadow-md rounded-md py-8 px-16'>
              <h4 className='text-[#747475] text-sm font-medium'>
                Total Asset
              </h4>
              <p className='text-[24px] text-[#27262E] my-3 font-medium'>
                0.00 NGN
              </p>
              <div className='flex items-center bg-[#F2F4FA] rounded-lg px-4 py-2'>
                <span className='text-sm font-bold'>My Balance</span>
                <MdOutlineArrowForwardIos className='w-3 h-3 ml-1 text-[#817C8E]' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
