import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Bikes Details</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo2.jpg"/>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.carbike360.com/">Carbike360</a>
        </h1>
        <p className={styles.description}>
          <h4>Royal Enfield{' '}
          <code className={styles.code}></code></h4>
        </p>
        <div className={styles.grid}>
            <p></p>
            <Image src="/RE1.jpg" width="300px" height="200px"/>
            <Image src="/RE2.jpg" width="300px" height="200px"/>
            <Image src="/RE4.jpg" width="300px" height="200px"/>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
          <Image src="/CarBike.webp" alt="logo" width={72} height={16}/>
          </span>
        </a>
      </footer>
    </div>
  )
}
