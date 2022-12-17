import { useContext, useEffect, useRef } from 'react'
import { SceneContext } from '../../../services/state/SceneProvider'
import { FireContext } from '../../../services/state/FireProvider'


const ProgramScene = () => {
  const { activeScene, setActiveScene, scenes, countUp } = useContext(SceneContext)
  const { activeFire, addFire, playbook, gameOver } = useContext(FireContext)

  // Use the useState hook to create a state variable called "timeoutId" and a function to update it called "setTimeoutId"
  const timer = useRef(null);
  const af = useRef([])

  // Initialize a counter to keep track of the current function
  let counter = 0;

  // the loop variable is true in case there is still fire left
  let loop = !gameOver

  // Set up a recursive function to execute the playbook
  const execute = () => {
    // Check if the counter is within bounds of the playbook object
    if (counter < Object.keys(playbook).length) {
      // If it is, execute the current function and increment the counter
      const index = playbook[Object.keys(playbook)[counter]].index

      addFire(index, af.current)
      counter++;
      // Set a timeout to execute the next function, using the timeout specified in the playbook object
      timer.current = setTimeout(() => execute(activeFire), playbook[Object.keys(playbook)[counter - 1]].timeout)

    } else if (loop){
      counter = 0;
      execute();
    }
  };

  // Use the useEffect hook to set and clear the timeout
  useEffect(() => {
    // Start the execution
    execute();
    // Return a cleanup function to clear the timeout
    return () => {clearTimeout(timer.current)};
  }, []); // The empty array ensures that the effect only runs once, when the component mounts

  useEffect(() => {
    af.current = activeFire
  }, [activeFire])


  return (
    <div className="w-full h-full flex flex-col items-center justify-center font-courier">
      Loading...
    </div>
  )

}

export default ProgramScene
