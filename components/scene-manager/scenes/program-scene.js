import { useContext } from 'react'
import { SceneContext } from '../../../services/state/SceneProvider'

const ProgramScene = () => {
  const { activeScene, setActiveScene, scenes, countUp } = useContext(SceneContext)

  const run = (e) => {
    e.preventDefault();
    countUp()
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-4">
      <div className="border border-white p-4 sm:text-base text-xs font-courier">
        <span className="block">{`function(x) => {`} </span>
        <span className="block">&nbsp;&nbsp;{`// todo: debug`} </span>
        <span className="block">&nbsp;&nbsp;{`const y = 1`} </span>
        <span className="block">&nbsp;&nbsp;{`function(y)`} </span>
        <span className="block">{`}`} </span>
      </div>

      <form onSubmit={(e) => run(e)}>
        <button
          type="submit"
          onClick={(e) => run(e)}
          className="border disabled:cursor-not-allowed bg-white text-tmdark px-2 font-courier text-sm border-white disabled:opacity-50">run</button>
      </form>
    </div>
  )

}

export default ProgramScene
