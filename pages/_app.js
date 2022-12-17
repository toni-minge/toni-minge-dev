import '../styles/globals.css'
import { SceneProvider } from "../services/state/SceneProvider";
import { FireProvider } from "../services/state/FireProvider";

function MyApp({ Component, pageProps }) {
  return (
    <FireProvider>
      <SceneProvider>
        <Component {...pageProps} />
      </SceneProvider>
    </FireProvider>
  )
}

export default MyApp
