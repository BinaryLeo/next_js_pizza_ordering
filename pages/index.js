import Head from 'next/head'
import Featured from '../components/Featured'
import styles from '../styles/Home.module.css'
import PizzaList from '../components/PizzaList'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matteo&apos;s Pizza</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Featured/>
     <PizzaList/>
    </div>
  )
}
