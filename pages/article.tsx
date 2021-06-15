import { FC } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../components/organisms/Header';
import MainArticle from '../components/organisms/Article';
import Form from '../components/organisms/Form';
import Footer from '../components/organisms/Footer';

const Article: FC = () => (
  <div id="content">
    <Head>
      <title>Accessible University Demo Site - Inaccessible Version</title>
    </Head>
    <Header />
    <MainArticle />
    <Footer />
  </div>
);

export default Article;
