import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import AlgosBabies from '../components/AlgosBabies'
import { sizefilter, isData } from '../components/data'
import styles from '../styles/Home.module.css'
import Link from 'next/link';



export default function Home() {
 const [rdata, setrdata] = useState("");
 const [fetch, setfetch] = useState(false)

 async function get(){
   let x = await isData();
   setfetch(x)
 } 
 useEffect(() => {
   async function first30(){
     await get()
     let x = sizefilter( JSON.parse(window.localStorage.getItem("algo4all_localstore_30w03a@wrv")), 1); 
     setrdata(x.data)
   }
   first30()
    
  }, [])

  

  return (
    <div className={styles.container}>
      <Head>
        <title>Algo For Everyone</title>
        <meta name="description" content="Solution to all algorithm questions and problems" />
        <link rel="icon" href="/favicon.ico" />
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6630162015653294"
     crossOrigin="anonymous"></script> */}
      </Head>

      
        <main className={styles.main}>

<div className={styles.intro}>
  <h2>Free and tested <span>algorithm</span> solutions in JS</h2>
  <h3>Easily pass algorithm tests or find solutions to one you need. <br /><span> {`"Not all Devs need a Binary Tree"`}</span></h3>
</div>

  </main>
  {fetch ? (<>
<div className={styles.explore}>
  <h2>Explore</h2>
  <div className={styles.inner}>

  {rdata !== ""  && rdata.map((element,index) => {
    return <AlgosBabies key={index} data={element} />
  })}
  </div>

  <div className={styles.morecont}>
 
 <Link  href={`/algos`}>
    <button className={styles.s_button}>
   More Solutions
   </button>
   </Link>

 
</div>
  </div>


        </>) : ( <h3 style={{"color": "#fff", "margin":"auto"}}>Loading : (Initial load may take some 5-8 secs🙏)</h3> )}

        
     
    </div>
  )
}

