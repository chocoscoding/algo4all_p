import React, {useEffect, useState} from 'react'
import {Nav, Footer} from './'


function Body({children}) {

  return (
    <div 
    style={{"minHeight": "100%", "maxWidth": "1550px", "margin": "auto", 'overflow': 'auto'}} 
    >
        <Nav/>
        <main>
            {children}
        </main>
        <Footer/>
    </div>
  )
}



export default Body
