import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar/Sidebar';
import PeerToPeerOverview from '@/components/PeerToPeerOverview/PeerToPeerOverview';
import PeerToPeerExchange from '@/components/PeerToPeerExchange/PeerToPeerExchange';

export default function PeerToPeer() {
  return (
    <Layout title='P2P'>
      <div className='md:9/12 md:ml-28 lg:ml-52 md:px-10 mt-10 max-w-[2560px] mb-20'>
        <div className='flex flex-col xxl:ml-60'>
          <Sidebar />
          <PeerToPeerOverview />
          <PeerToPeerExchange />
        </div>
      </div>
    </Layout>
  );
}
