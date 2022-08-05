import { useRouter } from 'next/router';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

export default function Pin() {
  const router = useRouter();

  return (
    <div className='flex md:ml-4 px-4 md:px-0'>
      <div className='mb-3 w-full lg:w-2/3 xl:w-96 py-8 px-16 bg-white shadow-lg rounded-md'>
        <div className='text-center'>
          <label htmlFor='pin' className='text-lg md:text-2xl'>
            Enter Pin/OTP
          </label>
          <input
            className='pl-3 text-lg border border-solid border-gray-300 placeholder-gray-600
              rounded h-12 w-full text-gray-600 outline-none mb-3 md:mb-0 focus:border-stone-500 focus:outline-none'
            type='text'
          />
        </div>

        <button
          // onClick={() => router.push('#')}
          className='bg-black shadow-lg w-full text-white px-14 py-3 md:mt-4 rounded transition duration-1000 ease-in-out
         hover:text-redColor transform hover:scale-120'
        >
          Next
        </button>
      </div>
    </div>
  );
}
