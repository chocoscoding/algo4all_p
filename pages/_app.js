import {Body} from '../components'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
  <Body>

  <Component {...pageProps} />
  </Body>
  )
}

export default MyApp
