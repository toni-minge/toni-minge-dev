import React, { createContext, useState } from 'react'

import LoginScene from "../../components/scene-manager/scenes/login-scene.js"
import ProgramScene from "../../components/scene-manager/scenes/program-scene.js"
import LoadingScene from "../../components/scene-manager/scenes/loading-scene.js"
import AnimationScene from "../../components/scene-manager/scenes/animation-scene"

const SceneContext = createContext()

const SceneProvider = ({ children }) => {
  const [activeScene, setActiveScene] = useState(1)
  const scenes = {
    1: () => <LoadingScene delay={1300}/>,
    2: () => <LoginScene/>,
    3: () => <LoadingScene delay={2100}/>,
    4: () => <ProgramScene />,
    5: () => <LoadingScene delay={1200}/>,
    6: () => <AnimationScene />,
  }

  const countUp = () => {
    if (activeScene < Object.keys(scenes).length) {
      setActiveScene(activeScene + 1)
    }
  }

  const value = { activeScene, setActiveScene, scenes, countUp }

  return (
    <SceneContext.Provider value={value}>
      {children}
    </SceneContext.Provider>
  )
}

export { SceneContext, SceneProvider }
