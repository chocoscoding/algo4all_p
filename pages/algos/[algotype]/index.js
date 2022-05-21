import React from 'react'
import Codeblock from '../../../components/codeblock'
import { newName } from '../../../components/data'
import styles from '../../../styles/AloInfo.module.css'

function Index({dataF}) {
  const {name, code} = dataF.data
  return (
    <div className={styles.container}>
      <h1>{newName(name)}</h1>

      <div className={styles.explantion}>
        {/* <div className={styles.flexd}>

        <h2>Explanation</h2>
        <button>{`<`}</button>
        </div> */}
        <p>No explanation yet</p>
      </div>


      <div className={styles.code}>
      <Codeblock
            {...{
              code: code.JS,
              language: "javascript",
              showLineNumbers: true,
              startingLineNumber: 1,
            }} />
      </div>
    </div>
  )
}




export async function getServerSideProps(context) {
  const res = await fetch(`https://fastify-production-3682.up.railway.app/data?name=${context.params.algotype}`)
  const dataF = await res.json()
  return {
    props: {
      dataF,
    },
  }
}


export default Index


