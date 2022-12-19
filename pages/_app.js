

import '../styles/globals.css'
import { SceneProvider } from "../services/state/SceneProvider";
import { FireProvider } from "../services/state/FireProvider";
import { AppProvider } from "../services/state/AppProvider"

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <FireProvider>
        <SceneProvider>
          <Component {...pageProps} />
        </SceneProvider>
      </FireProvider>
    </AppProvider>
  )
}

export default MyApp
