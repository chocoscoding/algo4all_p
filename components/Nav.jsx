import Link from 'next/link';
import React from 'react';
import ns from '../styles/Nav.module.css'
import {BiSearchAlt2} from 'react-icons/bi'

function Nav() {
  return (
    <div className={ns.nbody}> 
        <nav className={ns.nav}>
        <Link href={`/`} className={ns.logo} alt="logo">Algo4All</Link>      
                <Link  href={`/algos`}><button className={ns.s_button}>Solutions</button></Link>
        </nav>
    </div>
  )
}

export default Nav