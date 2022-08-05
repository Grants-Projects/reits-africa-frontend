import Image from 'next/image';
import { CgArrowsExchangeAlt } from 'react-icons/cg';
import { traderData } from '../../data';

export default function PeerToPeerExchange() {
  return (
    <div className='flex md:ml-4 px-4 md:px-0'>
      <div className='mb-3 w-full lg:w-2/3 xl:w-96 py-10 px-6 md:px-16 bg-white shadow-lg rounded-md'>
        <div>
          {/* Near Acct Balance */}
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

          {/* Trader Info */}
          {traderData.map((trade) => (
            <div
              key={trade.id}
              className='bg-[#F1F3F6] rounded-lg py-4 px-3 md:px-4 lg:px-10 mt-3'
            >
              <div className='flex justify-between'>
                <div className='flex items-center'>
                  <Image
                    src={trade.img}
                    alt='man'
                    width={20}
                    height={20}
                    objectFit='contain'
                    className='rounded-full'
                  />
                  <h4 className='text-[#3A4276] text-xs ml-1'>
                    {trade.userName}
                  </h4>
                </div>

                <div className='flex flex-col'>
                  <span className='text-[#7B7F9E] text-xs'>
                    {trade.tradeCompleted}
                  </span>
                  <span className='text-[#7B7F9E] text-xs'>{trade.status}</span>
                </div>
              </div>

              <div>
                <p className='text-xl font-semibold'>
                  {trade.nearAmount}{' '}
                  <span className='text-xs text-[#3A4276]'>/ NEAR</span>{' '}
                </p>
                <p className='mt-1 text-xs text-[#3A4276]'>
                  You will receive : {trade.nairaAmount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
