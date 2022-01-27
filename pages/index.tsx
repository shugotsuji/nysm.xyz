import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className= "bg-black text-slate-50" >
      <Head>
        <title>Nysm</title>
        <link rel="icon" href="/nysm.png" />
      </Head>
      <header className="flex justify-end p-8">
        <a href="https://twitter.com/nysm_xyz">
          <Image src="/twitter.png" alt="Twitter Logo" b-10 width={35} height={35}/>
        </a>
      </header>

      <main className="min-h-screen px-4 flex flex-col justify-center items-center">
        <Image src="/nysm.png" alt="Nysm Logo" b-10 width={300} height={300} />
        <a href="https://twitter.com/nysm_xyz">
          <p className= "text-7xl pb-3">Nysm</p>
        </a>
        <a href="mailto:admin@nysm.xyz">
          <p className= "text-2xl pt-10 underline underline-offset-2">
            admin@nysm.xyz
          </p>
        </a>
        
        <div className="min-h-screen px-4 flex flex-col justify-center items-center">
          <p className="text-5xl pb-10" >Products</p>
          <Image src="/phi.png" alt="Phi Logo" width={100} height={100} />
          <a href="https://twitter.com/philand_xyz">
            <p className= "text-4xl pt-5">Philand</p>
          </a>
          <p className= "text-2xl pt-5">Metaverse based ENS Subdomain</p>
          <p className= "text-1xl pt-2">🎉NFTHACK 2022 ENS Awarded🎉</p>
        </div>
        
        <div className="min-h-screen px-4 flex flex-col justify-center items-center">
          <p className="text-5xl pb-10" >Team</p>
          <div className="text-3xl flex flex-row space-x-44">
            
            <div className="flex flex-col justify-center items-center">
              <p>Pricipal</p>
              <a href="https://twitter.com/0xshugo">
              <Image src="/shugo.pfp.jpg" alt="shugo_pfp" b-10 width={150} height={150}/>
              </a>
              <a href="https://twitter.com/0xshugo">
                <p>@0xshugo</p>
              </a>
            </div>

            <div className="flex flex-col justify-center items-center">
              <p>Wizard Dev</p>
              <a href="https://twitter.com/ZkEther">
              <Image src="/zak.pfp.jpg" alt="zak_pfp" b-10 width={150} height={150}/>
              </a>
              <a href="https://twitter.com/Zack/3939">
                <p>@ZacK_3939</p>
              </a>
            </div>

            <div className="flex flex-col justify-center items-center">
              <p>Goblin</p>
              <a href="https://twitter.com/ZkEther">
               <Image src="/consome.pfp.jpg" alt="" b-10 width={150} height={150}/>
              </a>
              <a href="https://twitter.com/ZkEther">
               <p>@Zkether</p>
              </a>
            </div>

          </div>
        </div>
      </main>
      <footer className="flex justify-center items-center border-t">
        <a href="https://www.nysm.xyz/">©2022 by Nysm</a>
        <Image src="/nysm.png" alt="Nysm Logo" width={20} height={20}/>
      </footer>
    </div>
  )
}

export default Home