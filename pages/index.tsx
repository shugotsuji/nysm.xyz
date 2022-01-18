import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className= "bg-black text-slate-50" >
      <Head>
        <title>Nysm</title>
        <link rel="icon" href="/nysm.png" />
      </Head>
      <header>

      </header>
      <main className={styles.main}>
        <Image src="/nysm.png" alt="Nysm Logo" b-10 width={300} height={300} />
        <a href="https://twitter.com/nysm_xyz" className={styles.title}>
          <p className= "text-7xl pb-3">Nysm</p>
        </a>
        <p className= "text-2xl pb-10 underline underline-offset-1">
          admin@nysm.xyz
        </p>
        
        <div className={styles.products}>
          <p className="text-5xl pb-10" >Products</p>
          <Image src="/phi.png" alt="Phi Logo" width={100} height={100} />
          <a href="https://twitter.com/phi_xyz">
            <p className= "text-4xl pt-5 pb-3">Phi</p>
          </a>
          <p className= "text-2xl">Metaverse based ENS Subdomain</p>
        </div>

        <div className={styles.team}>
          <p className="text-5xl pb-10">Team</p>
          <div className="text-3xl flex space-x-10">
            
            <div>
              <p>Goblin</p>
              <a href="https://twitter.com/ZkEther">
                <Image src="/consome.pfp.jpg" alt="" b-10 width={100} height={100} />
                <p>@Zkether</p>
              </a>
            </div>

            <div>
              <p>Pricipal</p>
              <a href="https://twitter.com/0xshugo">
                <Image src="/shugo.pfp.jpg" alt="" b-10 width={100} height={100} />
                <p>@0xshugo</p>
              </a>
            </div>
            
            <div>
              <p>Wizard Dev</p>
              <a href="https://twitter.com/ZacK_3939">
                <Image src="/zak.pfp.jpg" alt="" b-10 width={100} height={100} />
                <p>@ZacK_3939</p>
              </a>
            </div>

          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a>
          ©2022 by Nysm team
          <Image src="/nysm.png" alt="Nysm Logo" width={20} height={20} />
        </a>
      </footer>
    </div>
  )
}

export default Home