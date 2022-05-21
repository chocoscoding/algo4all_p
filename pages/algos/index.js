import React, {useEffect, useState} from 'react'
import AlgosBabies from '../../components/AlgosBabies'
import {sizefilter, filter, isData} from '../../components/data'
import styles from '../../styles/Algo.module.css'

function Algos() {
  const [rdata, setrdata] = useState("");
  const [input, setInput] = useState("");
  const [searchactive, setSearchActive] = useState(false);
  const [currentPagi, setCurrentPagi] = useState(1)

  
  function pagichange(type){
   const total =  rdata.tpagi
    if(type === "++"){
      currentPagi < total ? setCurrentPagi(~~currentPagi + 1) : ""
    }
    if(type === "--"){
      currentPagi > 1 ? setCurrentPagi(~~currentPagi - 1) : ""
    }

  }
  async function first30(){
     await isData();
    const x = sizefilter(JSON.parse(window.localStorage.getItem("algo4all_localstore_30w03a@wrv")), currentPagi);
    setrdata(x)
  }
   function spitfilterd(data, pgn){
    return sizefilter(data, pgn) 
  }

  useEffect(() => {
    first30()
     
  }, [])
  useEffect(() => {
    setCurrentPagi(1)
     
  }, [input])
  
  useEffect( ()=>{
    
      const x = filter(JSON.parse(window.localStorage.getItem("algo4all_localstore_30w03a@wrv")), input);
      // const final = await sizefilter(x)
      setrdata(spitfilterd(x,currentPagi))
  },[currentPagi, input])
  
  return (
    <div className={styles.container}> 
      <div className={styles.search}>
        <input type="text" className={styles.inputfield} placeholder={`search here`} value={input} onChange={(e)=>{setInput(e.target.value); setSearchActive(false)}}/>
        <button className={styles.close} onClick={()=> setInput("")}> x </button>

      </div>

      <div className={styles.explore}>
          <h2>Explore All</h2>
          <div className={styles.inner}>

          {rdata !== ""  && rdata.data.map((element,index) => {
            return <AlgosBabies key={index} data={element} />
          })}
          </div>

          <div className={styles.morecont}>
            
          </div>
        </div>

        <div className={styles.currentpagi}>
          <button className={styles.pagibtn} onClick={()=>pagichange("--")}>{`<`}</button>
          <input type="number" value={currentPagi} className={styles.currentPagi}  onChange={(e)=>setCurrentPagi(e.target.value)}/>
          <button className={styles.pagibtn} onClick={()=>pagichange("++")}>{`>`}</button>
        </div>

      
    </div>
  )
}

export default Algos