import Head from 'next/head';

export default function Layout({ title, description, keywords, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='icon' href='/favicon.svg' />
      </Head>

      <div className='px:10 md:px-12'>{children}</div>
    </>
  );
}

Layout.defaultProps = {
  title: 'Reits Africa',
  description: 'Buy, rent, or invest in tokenized real estate projects',
};
