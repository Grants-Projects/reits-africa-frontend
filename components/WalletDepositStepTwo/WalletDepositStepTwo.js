import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar/Sidebar';
import WalletDepositInfo from '@/components/WalletDepositInfo/WalletDepositInfo';
import SelectAssetDropDown from '@/components/WalletDepositStepTwo/SelectAssetDropDown';

export default function WalletDepositStepTwo() {
  return (
    <Layout title='Step Two'>
      <div className='md:9/12 md:ml-28 lg:ml-52 mt-10 max-w-[2560px] mb-20'>
        <div className='flex flex-col xxl:ml-60'>
          <Sidebar />
          <WalletDepositInfo />
          <SelectAssetDropDown />
        </div>
      </div>
    </Layout>
  );
}
