import { useContext, useEffect, useState } from 'react'

import Fire from '../layout/fire'

import { FireContext } from '../../services/state/FireProvider'
import { SceneContext } from '../../services/state/SceneProvider'

function useDelayedState(delayTimes) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prevStep => {
        if (prevStep + 1 >= delayTimes.length) {
          clearInterval(interval);
          return prevStep;
        }
        return prevStep + 1;
      });
    }, delayTimes[step]);

    return () => {clearInterval(interval)};
  }, [step, delayTimes]);

  return step;
}


const GameOver = () => {
  const [bgVisible, setBgVisible] = useState(false)
  const { activeFire, addFire, playbook, gameOver, clearFire, setCanKill } = useContext(FireContext)
  const { activeScene, setActiveScene, scenes, countUp } = useContext(SceneContext)

  const delayTimes = [1000, 2000, 3000, 4000];
  const step = useDelayedState(delayTimes);

  useEffect(() => {
    if (step === 2){
      setBgVisible(true)
    }
  }, [step])


  const restart = () => {
    setActiveScene(1)
    clearFire()
    setCanKill(false)

    document.body.classList.remove("loescher");
  }

  return (
    <div style={{zIndex: 50}} className={`transition duration-[4000ms] fixed z-50 top-0 left-0 w-screen h-screen ${!bgVisible ? "bg-orange-500/0" : "bg-orange-500/100"}`}>
      <div className="w-screen h-screen grid items-center justify-center p-4">
        <div style={{zIndex: 70}} className={`text-center transition duration-[1000ms] ${!bgVisible ? "opacity-0" : "opacity-100"}`}>
          <h1 className="">GAME OVER</h1>
          <p className="font-courier mb-4">If I had been there, this would <br/> not have happened to you.</p>
          <button onClick={restart} className="border-2 border-white py-2 px-4 font-courier hover:opacity-50 cursor-pointer">Restart</button>
        </div>
      </div>
      {step >= 1 && <Fire zIndex={"50"} classOverrides="bottom-32" scale="3.1" type={1} index={1}/> }
      {step >= 1 && <Fire zIndex={"50"} classOverrides="bottom-32 right-12" scale="3.1" type={1} index={1}/> }
      {step >= 2 && <Fire zIndex={"50"} classOverrides="top-0 -rotate-90 right-12" scale="3.1" type={3} index={1}/> }
      {step >= 3 && <Fire zIndex={"50"} classOverrides="top-0 -rotate-180 left-12" scale="3.1" type={3} index={1}/> }
      {step >= 3 && <Fire zIndex={"50"} classOverrides="bottom-32 right-1/2" scale="3.1" type={2} index={1}/> }
    </div>
  )
}

export default GameOver;
