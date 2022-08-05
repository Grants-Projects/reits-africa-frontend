import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar/Sidebar';
import ExchangeOverview from '@/components/ExchangeOverview/ExchangeOverview';
import ExchangeTokenAmount from '@/components/ExchangeTokenAmount/ExchangeToken';

export default function ExchangePage() {
  return (
    <Layout title='Exchange'>
      <div className='md:9/12 md:ml-28 lg:ml-52 md:px-10 mt-10 max-w-[2560px] mb-20'>
        <div className='flex flex-col xxl:ml-60'>
          <Sidebar />
          <ExchangeOverview />
          <ExchangeTokenAmount />
        </div>
      </div>
    </Layout>
  );
}
