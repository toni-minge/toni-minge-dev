import { useContext } from 'react'

import Fire from '../layout/fire'

import { FireContext } from '../../services/state/FireProvider'
import { SceneContext } from '../../services/state/SceneProvider'

const GameOver = () => {
  const { activeFire, addFire, playbook, gameOver, clearFire, setCanKill } = useContext(FireContext)
  const { activeScene, setActiveScene, scenes, countUp } = useContext(SceneContext)

  const restart = () => {
    setActiveScene(1)
    clearFire()
    setCanKill(false)

    document.body.classList.remove("loescher");
  }

  return (
    <div style={{zIndex: 50}} className="fixed bg-orange-600 z-50 top-0 left-0 w-screen h-screen">
      <div className="w-screen h-screen grid items-center justify-center p-4">
        <div style={{zIndex: 70}} className="text-center">
          <h1 className="">GAME OVER</h1>
          <p className="font-courier mb-4">Wäre ich da gewesen, wäre dir<br/> das nicht passiert.</p>
          <button onClick={restart} className="border-2 border-white py-2 px-4 font-courier hover:opacity-50 cursor-pointer">Restart</button>
        </div>
      </div>
      <Fire zIndex={"50"} classOverrides="bottom-32" scale="3.1" type={1} index={1}/>
      <Fire zIndex={"50"} classOverrides="bottom-32 right-12" scale="3.1" type={1} index={1}/>
      <Fire zIndex={"50"} classOverrides="top-0 -rotate-90 right-12" scale="3.1" type={3} index={1}/>
      <Fire zIndex={"50"} classOverrides="top-0 -rotate-180 left-12" scale="3.1" type={3} index={1}/>
      <Fire zIndex={"50"} classOverrides="bottom-32 right-1/2" scale="3.1" type={2} index={1}/>
    </div>
  )
}

export default GameOver;
