import { useRouter } from 'next/router';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

export default function SendWalletAddress() {
  const router = useRouter();

  return (
    <div className='flex md:ml-4 px-4 md:px-0'>
      <div className='mb-3 w-full lg:w-2/3 xl:w-96 py-8 px-3 md:px-10 bg-white shadow-lg rounded-md'>
        <div className='relative'>
          <MdOutlineArrowForwardIos className='absolute top-11 right-2 w-5 h-5 text-[#817C8E]' />
        </div>

        <div>
          {/* Token */}
          <div>
            <label className='text-lg md:text-xl text-gray-600'>Token</label>
            <select
              className='form-select form-select-lg mb-3 appearance-none block  w-full px-6 pl-3 py-2 h-12 text-[18px] font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-stone-500 focus:outline-none 
              '
              aria-label='.form-select-lg example'
            >
              <option value='1'>USDT</option>
              <option value='2'>ETH</option>
            </select>
          </div>

          {/* Acct Number */}
          <div className='mt-4 md:mt-6'>
            <label
              htmlFor='accountNumber'
              className='text-lg md:text-xl text-gray-600 '
            >
              Account Number
            </label>
            <input
              className='pl-3 text-lg border border-solid border-gray-300 placeholder-gray-600
              rounded h-12 w-full text-gray-600 outline-none mb-3 md:mb-0 focus:border-stone-500 focus:outline-none'
              type='text'
              placeholder='0000000000000'
            />
          </div>

          {/* Amount */}
          <div className='mt-4 md:mt-6'>
            <label
              htmlFor='amount'
              className='text-lg md:text-xl text-gray-600 '
            >
              Amount
            </label>
            <input
              className='pl-3 text-lg border border-solid border-gray-300 placeholder-gray-600
              rounded h-12 w-full text-gray-600 outline-none mb-3 md:mb-0 focus:border-stone-500 focus:outline-none'
              type='text'
              placeholder='Enter Amount'
            />
          </div>

          {/* Description */}
          <div className='mt-4 md:mt-6'>
            <label
              htmlFor='description'
              className='text-lg md:text-xl text-gray-600'
            >
              Description
            </label>
            <textarea
              id='description'
              rows='4'
              className='block text-lg p-2.5 w-full text-gray-600 border border-solid border-gray-300 placeholder-gray-600 rounded focus:border-stone-500 focus:outline-none'
              placeholder='Enter Description'
            ></textarea>
          </div>
        </div>

        <button
          // onClick={() => router.push('#')}
          className='bg-black shadow-lg w-full text-white px-14 py-3 mt-4 md:mt-6 rounded-md transition duration-1000 ease-in-out
         hover:text-redColor transform hover:scale-120'
        >
          Next
        </button>
      </div>
    </div>
  );
}
