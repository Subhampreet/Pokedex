import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Banner from '../components/index/Banner';
import Stats from '../components/index/Stats';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Banner />
      <Stats />
    </div>
  )
}
