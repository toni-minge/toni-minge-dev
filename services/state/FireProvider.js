import React, { createContext, useState } from 'react'

import LoginScene from "../../components/scene-manager/scenes/login-scene.js"
import ProgramScene from "../../components/scene-manager/scenes/program-scene.js"
import LoadingScene from "../../components/scene-manager/scenes/loading-scene.js"
import AnimationScene from "../../components/scene-manager/scenes/animation-scene"
import GameOver from '../../components/overlays/game-over'

const FireContext = createContext()

const playbook = {
  'step1': {
    index: 1,
    timeout: 2000
  },
  'step2': {
    index: 2,
    timeout: 1300
  },
  'step3': {
    index: 3,
    timeout: 1900
  },
  'step4': {
    index: 4,
    timeout: 1000
  },
};

const FireProvider = ({ children }) => {
  const [activeFire, setActiveFire] = useState([])
  const [canKill, setCanKill] = useState(false)

  const addFire = (number, arr) => {

    // Check if the number is already in the array
    if (arr.indexOf(number) === -1) {
      // If it is not, add it to the array and update the state
      setActiveFire([...arr, number]);
    }
  }

  const removeFire = (number) => {
    const index = activeFire.indexOf(number);
    // Check if the number is in the array
    if (index !== -1) {
      // If it is, create a new array with the number removed
      const newArray = [...activeFire.slice(0, index), ...activeFire.slice(index + 1)];
      // Update the state with the new array
      setActiveFire(newArray);
    }
  }

  const clearFire = () => {
    setActiveFire([])
  }

  const gameOver = activeFire.length === Object.keys(playbook).length

  const value = { activeFire, setActiveFire, addFire, removeFire, gameOver, playbook, clearFire, canKill, setCanKill }

  return (
    <FireContext.Provider value={value}>
      {children}
    </FireContext.Provider>
  )
}

export { FireContext, FireProvider }
