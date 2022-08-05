import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { depositData } from '../../data';

export default function TransferAssetOverview() {
  return (
    <div className='mb-10 px-5'>
      <div className='wrapper'>
        <div className='flex items-center justify-between mt-3'>
          <h3 className='text-lg md:text-2xl'>Wallet Transfer Asset</h3>
          <div className='flex space-x-3 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-stone-300'>
            <button className='bg-[#EC3335] sm:text-md text-white shadow-sm mb-3 px-6 py-2 rounded-md ml-auto'>
              Deposit
            </button>
            <button className='bg-[#EDF2F7] sm:text-md text-black font-semibold shadow-sm mb-3 border border-stone-500 px-6 py-2 rounded-md'>
              Withdraw
            </button>
            <button className='bg-[#EDF2F7] sm:text-md text-black font-semibold shadow-sm mb-3 border border-stone-500 px-6 py-2 rounded-md'>
              Exchange
            </button>
            <button className='bg-[#EDF2F7] sm:text-md text-black font-semibold shadow-sm mb-3 border border-stone-500 px-6 py-2 rounded-md'>
              P2P
            </button>
          </div>
        </div>

        <div className='flex space-x-6 mt-5 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-stone-300'>
          {depositData.map((item) => (
            <div
              key={item.id}
              className='flex bg-white shadow-md rounded-md py-8 px-8 md:px-10 lg:px-10 my-5'
            >
              {/* CardList */}
              <div>
                <h4 className='text-[#747475] text-sm font-medium'>
                  {item.text}
                </h4>
                <p className='text-xl md:text-[24px] text-[#27262E] my-3 font-medium'>
                  {item.amount}
                </p>

                <div className='flex items-center justify-center bg-[#F2F4FA] rounded-lg p-2'>
                  <span className='text-xs font-bold'>{item.balance}</span>
                  <MdOutlineArrowForwardIos className='w-3 h-3 ml-5 text-[#817C8E]' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
