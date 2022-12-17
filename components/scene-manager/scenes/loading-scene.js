import React, { useState, useEffect, useContext } from 'react'
import {SceneContext} from '../../../services/state/SceneProvider'

const LoadingScene = ({delay}) => {
  const { activeScene, setActiveScene, scenes, countUp } = useContext(SceneContext)
  const [dots, setDots] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((dots) => (dots % 3) + 1)
    }, 300)

    const timer = setTimeout(function () {
      countUp()
    }, delay);

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="w-full font-courier h-full grid items-center justify-center">
      <div className="w-24">
        <p>Loading{'.'.repeat(dots)}</p>
      </div>
    </div>
  )
}

export default LoadingScene;
