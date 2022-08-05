import Layout from '@/components/Layout';
import WalletWithdrawal from '@/components/WalletWithdrawal/WalletWithdrawal';
import WalletDepositStepTwo from '@/components/WalletDepositStepTwo/WalletDepositStepTwo';

export default function Home() {
  return (
    <Layout title='Reits Africa | Home'>
      <main>
        <h2>HomePage</h2>
        <WalletWithdrawal />
        {/* <WalletDepositStepTwo /> */}
      </main>
    </Layout>
  );
}
