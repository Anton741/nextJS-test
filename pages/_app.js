import MainLayput from '../components/mainLayout'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return <MainLayput><Component {...pageProps} /></MainLayput>
}

export default MyApp
