import Sidebar from '@/components/Sidebar/Sidebar';
import Portfolio from '@/components/Portfolio/Portfolio';
import Layout from '@/components/Layout';

export default function PortfolioPage() {
  return (
    <Layout title='Portfolio'>
      <div className='md:9/12 md:ml-40 lg:ml-60 md:px-10 mt-10 max-w-[2560px] mb-20'>
        <div className='flex flex-col xxl:ml-60'>
          <Sidebar />
          <Portfolio />
        </div>
      </div>
    </Layout>
  );
}
