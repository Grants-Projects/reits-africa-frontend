import DashboardOverview from 'pages/dashboard';

export default function Feed() {
  return (
    <div className='md:9/12 md:ml-40 lg:ml-60 px-10 mt-10 max-w-[2560px]'>
      <div className='flex flex-col xxl:ml-60'>
        <DashboardOverview />
        {/* Transactions */}
      </div>
    </div>
  );
}
