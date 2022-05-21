import React, {useEffect} from 'react'
import styles from '../styles/Home.module.css'
// import {Adsense} from 'react-adsense';

function Footer() {

  useEffect(() => {
    var ads = document.getElementsByClassName("adsbygoogle").length;
      for (var i = 0; i < ads; i++) {
        try {
          (adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) { }
      }
  }, []);
  return (
    <>
    <footer className={styles.footer}>
        <div className={styles.inner}>

<a
  href="https://myportfolio-seven-mu.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
>
  Built with ❤️ by @chocoscoding
</a>

{/* <p>Scroll down to support</p> */}
    </div>

    
{/* <div className={styles.adspace}>
<ins className="adsbygoogle"
     style={{"display":"block"}}
     data-ad-client="ca-pub-6630162015653294"
     data-ad-slot="9438415249"
     data-ad-format="rspv"
     data-full-width-responsive="true">
</ins>


</div> */}
</footer>
    </>
  )
}

export default Footer