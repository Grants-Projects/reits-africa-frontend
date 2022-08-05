import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar/Sidebar';
import { FiCheckCircle } from 'react-icons/fi';
import WalletWithdrawalOverview from '@/components/WalletWithdrawalOverview';

export default function SuccessPage() {
  return (
    <Layout title='Success'>
      <div className='md:9/12 md:ml-28 lg:ml-52 mt-10 max-w-[2560px] mb-20'>
        <div className='flex flex-col xxl:ml-60'>
          <Sidebar />
          <WalletWithdrawalOverview />

          <div className='flex flex-col items-center'>
            <FiCheckCircle className='w-8 h-8 text-green-500' />
            <h4 className='text-2xl mt-2'>Successful</h4>
          </div>
        </div>
      </div>
    </Layout>
  );
}
