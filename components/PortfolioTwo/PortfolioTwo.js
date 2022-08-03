import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar/Sidebar';
import PortfolioInfo from '@/components/PortfolioInfo/PortfolioInfo';
import Table from './Table';

export default function PortfolioPageTwo() {
  return (
    <Layout title='Portfolio'>
      <div className='md:9/12 md:ml-28 lg:ml-52 mt-10 max-w-[2560px] mb-20'>
        <div className='flex flex-col xxl:ml-60'>
          <Sidebar />
          <PortfolioInfo />
          <Table />
        </div>
      </div>
    </Layout>
  );
}
