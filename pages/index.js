import Layout from '@/components/Layout';
import Sidebar from '@/components/Sidebar/Sidebar';
import Feed from '@/components/Feed/Feed';

export default function Home() {
  return (
    <Layout title='Reits Africa | Home'>
      <main>
        <Sidebar />
        <Feed />
      </main>
    </Layout>
  );
}
