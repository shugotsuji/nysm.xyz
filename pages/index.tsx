import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div class= "bg-black text-slate-50" >
      <Head>
        <title>Nysm</title>
        <link rel="icon" href="/nysm.png" />
      </Head>
      <header>

      </header>
      <main className={styles.main}>
        <Image src="/nysm.png" alt="Nysm Logo" width={300} height={300} />
        <a href="https://twitter.com/nysm_xyz" className={styles.title}>
          <p class= "text-7xl pb-3">Nysm</p>
        </a>
        <p class= "text-2xl pb-10 underline underline-offset-1">
          admin@nysm.xyz
        </p>
        
        <div className={styles.products}>
          <p class="text-7xl pb-10" >Our Products</p>
          <Image src="/phi.png" alt="Nysm Logo" width={100} height={100} />
          <a href="https://twitter.com/phi_xyz">
            <p class= "text-5xl pt-5 pb-3">Phi</p>
          </a>
          <p class= "text-2xl">Metaverse based ENS Subdomain</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a>
          ©2022 by Nysm
          <Image src="/nysm.png" alt="Nysm Logo" width={20} height={20} />
        </a>
      </footer>
    </div>
  )
}

export default Home