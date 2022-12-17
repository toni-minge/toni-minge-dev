import React, {useContext} from 'react'
import { SceneContext } from '../../services/state/SceneProvider'

const SceneManager = () => {
  const { activeScene, setActiveScene, scenes } = useContext(SceneContext)
  const ActiveScene = scenes[activeScene]

  return (
    <ActiveScene />
  )
}

export default SceneManager
