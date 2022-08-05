import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar/Sidebar';
import WalletWithdrawalBankDetails from '@/components/WalletWithdrawalBankDetails/WalletWithdrawalBankDetails';
import WalletWithdrawalOverview from '@/components/WalletWithdrawalOverview';

export default function WithdrawalStepOne() {
  return (
    <Layout title='Wallet Withdrawal'>
      <div className='md:9/12 md:ml-28 lg:ml-52 md:px-10 mt-10 max-w-[2560px] mb-20'>
        <div className='flex flex-col xxl:ml-60'>
          <Sidebar />
          <WalletWithdrawalOverview />
          <WalletWithdrawalBankDetails />
        </div>
      </div>
    </Layout>
  );
}
