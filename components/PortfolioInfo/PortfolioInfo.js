import { MdOutlineArrowForwardIos, MdError } from 'react-icons/md';

export default function PortfolioInfo() {
  return (
    <div className='mb-10 px-5'>
      <div className='wrapper'>
        <div className='flex items-center justify-between mt-3'>
          <h3 className='text-lg md:text-2xl'>Portfolio</h3>
          <div className='flex space-x-3'>
            <button className='bg-[#EC3335] sm:text-md text-white shadow-2xl px-6 py-2 rounded-md ml-auto'>
              Buy Tokens
            </button>
            <button className='bg-[#EDF2F7] sm:text-md text-black font-semibold shadow-2xl px-6 py-2 rounded-md'>
              Trade
            </button>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-3 gap-4 mt-5'>
          <div className='flex bg-white shadow-md rounded-md py-8 px-8 md:px-10 lg:px-10 relative'>
            <div>
              <h4 className='text-[#747475] text-sm font-medium'>
                Total Asset
              </h4>
              <p className='bg-[#F2F4FA] py-1 px-2 text-[#49B464] text-sm font-bold rounded-md absolute top-6 right-2'>
                20%
              </p>

              <p className='text-[24px] text-[#27262E] my-3 font-medium'>
                1334 NGN
              </p>

              <div className='bg-[#F2F4FA] rounded-lg px-4 py-2'>
                <span className='text-sm font-bold text-[#49B464]'>
                  N300.00(30d)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
