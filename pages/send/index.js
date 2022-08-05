import Layout from '@/components/Layout';
import SendWalletAddress from '@/components/SendWalletAddress/SendWalletAddress';
import Sidebar from '@/components/Sidebar/Sidebar';
import TransferAssetOverview from '@/components/TransferAssetOverview/TransferAsset';

export default function SendPage() {
  return (
    <Layout title='Wallet Transfer Asset'>
      <div className='md:9/12 md:ml-28 lg:ml-52 md:px-10 mt-10 max-w-[2560px] mb-20'>
        <div className='flex flex-col xxl:ml-60'>
          <Sidebar />
          <TransferAssetOverview />
          <SendWalletAddress />
        </div>
      </div>
    </Layout>
  );
}
