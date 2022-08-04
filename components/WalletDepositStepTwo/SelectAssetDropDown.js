import { MdOutlineArrowForwardIos } from 'react-icons/md';

export default function SelectAssetDropDown() {
  return (
    <div className='flex ml-4'>
      <div className='mb-3 w-2/3 xl:w-96 py-8 px-16  bg-white shadow-lg rounded-md'>
        <div className='relative'>
          <MdOutlineArrowForwardIos className='absolute top-12 right-2 w-5 h-5  text-[#817C8E]' />
        </div>
        <h3 className='text-lg md:text-2xl mb-1'>Select Asset</h3>
        <select
          className='form-select form-select-lg mb-3 
      appearance-none
      block
      w-full
      px-6
      pl-3
      py-2
      text-[18px]
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none'
          aria-label='.form-select-lg example'
        >
          <option selected>Select asset</option>
          <option value='1'>One</option>
          <option value='2'>Two</option>
        </select>

        <button className='bg-black shadow-lg w-full text-white px-14 py-3 rounded-md'>
          Next
        </button>
      </div>
    </div>
  );
}
