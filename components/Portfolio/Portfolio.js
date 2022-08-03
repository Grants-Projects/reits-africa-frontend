import { MdOutlineArrowForwardIos, MdError } from 'react-icons/md';

export default function Portfolio() {
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
              <p className='bg-[#F2F4FA] py-1 px-2 text-[#49B464] rounded-md absolute top-6 right-2'>
                0%
              </p>

              <p className='text-[24px] text-[#27262E] my-3 font-medium'>
                0.00 NGN
              </p>

              <div className='bg-[#F2F4FA] rounded-lg px-4 py-2'>
                <span className='text-sm font-bold text-[#49B464]'>
                  N0.00(30d)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Assets */}
        <div className='mt-5'>
          <h3 className='text-lg md:text-2xl'>My Assets</h3>
          <div className='flex flex-col items-center mt-5'>
            <MdError className='w-8 h-8' />
            <p className='mt-3 text-sm'>
              You currently have no assets Head over to{' '}
              <span className='text-redColor'>Propeties </span>
              tab or <span className='text-redColor'>Trade </span>
              to buy assets
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
