import { useContext, useState } from 'react'

import ModelViewer from '../elements/model-viewer'
import { SceneContext } from '../../../services/state/SceneProvider'

const LoginScene = () => {
  const { activeScene, setActiveScene, scenes, countUp } = useContext(SceneContext)
  const [ pw, setPw ] = useState("")
  const [ err, setErr] = useState(null)

  const login = (e) => {
    e.preventDefault();
    setErr(null)
    if (pw == "pw-123" || pw == "PW-123" || pw == "pW-123") {
      //success
      countUp()
      return;
    }

    setErr(true)
  }

  const closeError = () => {
    setPw("")
    setErr(null)
  }

  return (
    <div className="w-full h-full relative flex flex-col">
      <div className="animation-canvas flex-grow">
          <ModelViewer />
      </div>
      {err &&
        <div className="error-field absolute grid items-center justify-center p-4 top-0 z-20 w-full h-full bg-black/70">
          <div className="border border-white p-4 font-courier">
            <div className="text-red-500 text-sm sm:text-normal text-center">
              Wrong password!
            </div>
            <div className="w-full flex justify-center mt-4">
              <button
                onClick={closeError}
                className="border mx-auto disabled:cursor-not-allowed bg-white text-tmdark px-2 font-courier border-white disabled:opacity-50">
                  close
              </button>
            </div>
          </div>
        </div>
      }
      <div className="flex justify-center absolute h-6 gap-2 bottom-2 w-full">
        <form className="flex gap-2" onSubmit={(e) => login(e)}>
          <input
            onChange={(e) => {setPw(e.target.value); setErr(null)}}
            value={pw}
            placeholder="password"
            type="text"
            className="border-white font-courier text-center w-32 border inline-block outline-none bg-transparent" />
          <button
            type="submit"
            onClick={login}
            disabled={pw == ""}
            className="border disabled:cursor-not-allowed bg-white text-tmdark px-2 font-courier border-white disabled:opacity-50">login</button>
        </form>
      </div>
      <div>
        {err && <p className="text-red-500 text-sm font-courier pt-2 w-full text-center">wrong password!</p>}
      </div>
    </div>
  )

}

export default LoginScene
