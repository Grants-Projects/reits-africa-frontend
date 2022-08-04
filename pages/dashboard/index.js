import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar/Sidebar';
import DashboardOverview from '@/components/Dashboard/Dashboard';
import Transactions from 'pages/transactions';

export default function DashboardPage() {
  return (
    <Layout title='Dashboard'>
      <div className='md:9/12 md:ml-28 lg:ml-52 md:px-10 mt-10 max-w-[2560px] mb-20'>
        <div className='flex flex-col xxl:ml-60'>
          <Sidebar />
          <DashboardOverview />
          <Transactions />
        </div>
      </div>
    </Layout>
  );
}
