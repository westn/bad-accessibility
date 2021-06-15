import Head from 'next/head'

import Header from '../components/organisms/Header';
import Main from '../components/organisms/Main';
import Form from '../components/organisms/Form';
import Footer from '../components/organisms/Footer';

export default function Home() {
  return (
    <div id="content">
      <Head>
        <title>Accessible University Demo Site - Inaccessible Version</title>
      </Head>
      <Header />
      <Main />
      <Form />
      <Footer />
    </div>
  );
}
