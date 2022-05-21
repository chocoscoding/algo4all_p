import React from 'react'
import Link from 'next/link';
import {FaRegArrowAltCircleRight} from 'react-icons/fa'
import styles from '../styles/ABabies.module.css'

function AlgosBabies({data}) {
    const {name} = data
  return (
    <div className={styles.body}> 
    <div className={styles.box}>
        <p>{name}</p>
        <div className={styles.bottom}>
            <Link  href={`/algos/${name}`}><button className={styles.link}><FaRegArrowAltCircleRight className={styles.icon}/></button></Link>
        </div>
    </div>
    
    </div>
  )
}

export default AlgosBabies