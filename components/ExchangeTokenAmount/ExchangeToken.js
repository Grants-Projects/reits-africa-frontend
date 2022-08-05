import { CgArrowsExchangeAlt } from 'react-icons/cg';

export default function ExchangeTokenAmount() {
  return (
    <div className='flex md:ml-4 px-4 md:px-0'>
      <div className='mb-3 w-full lg:w-2/3 xl:w-96 py-8 px-16 bg-white shadow-lg rounded-md'>
        <div>
          <div className='flex space-x-4 justify-between'>
            <div className='bg-[#F1F3F6] rounded-lg py-4 px-2 md:px-4 lg:px-10'>
              <h3 className='text-[#171822] text-base lg:text-2xl font-bold'>
                2.6 NEAR
              </h3>
              <p className='text-[#3A4276] text-sm mt-1'>NEAR balance</p>
            </div>

            <div className='mt-5'>
              <CgArrowsExchangeAlt className='w-12 h-12' />
            </div>

            <div className='bg-[#F1F3F6] rounded-lg py-4 px-2 md:px-4 lg:px-10'>
              <h3 className='text-[#171822] text-base lg:text-2xl font-bold'>
                2.6 NGN
              </h3>
              <p className='text-[#3A4276] text-sm mt-1'>NGN balance</p>
            </div>
          </div>

          {/* Token Amount */}
          <div className='mt-4 md:mt-6'>
            <label
              htmlFor='amount'
              className='text-lg md:text-xl text-gray-600 '
            >
              Enter token amount
            </label>
            <input
              className='pl-3 text-lg border border-solid border-gray-300 placeholder-gray-600
              rounded h-12 w-full text-gray-600 outline-none mb-3 md:mb-0 focus:border-stone-500 focus:outline-none'
              type='text'
              placeholder='10 NEAR'
            />
          </div>

          {/* Receive */}
          <div className='mt-4 md:mt-6'>
            <label
              htmlFor='receive'
              className='text-lg md:text-xl text-gray-600 '
            >
              To Receive
            </label>
            <input
              className='pl-3 text-lg border border-solid border-gray-300 placeholder-gray-600
              rounded h-12 w-full text-gray-600 outline-none mb-3 md:mb-0 focus:border-stone-500 focus:outline-none'
              type='text'
              placeholder='1000 NGN'
            />
          </div>
        </div>

        <div className='flex justify-center mt-2 md:mt-4'>
          <p className='text-[#938282]'>1 NEAR = N100</p>
        </div>

        <button
          // onClick={() => router.push('#')}
          className='bg-black shadow-lg w-full text-white px-14 py-3 mt-2 md:mt-4 rounded transition duration-1000 ease-in-out
         hover:text-redColor transform hover:scale-120'
        >
          Next
        </button>
      </div>
    </div>
  );
}
