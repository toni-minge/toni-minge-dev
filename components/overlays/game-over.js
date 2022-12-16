
import Fire from '../layout/fire'

const GameOver = ({open}) => {
  return (
    <div className="fixed bg-orange-600 z-50 top-0 left-0 w-screen h-screen">
      <div className="w-screen h-screen grid items-center justify-center p-16">
        <div style={{zIndex: 70}} className="text-center">
          <h1 className="">GAME OVER</h1>
          <p className="font-courier mb-4">Wäre ich da gewesen, wäre dir<br/> das nicht passiert.</p>
          <button className="border-2 border-white py-2 px-4 font-courier hover:opacity-50 cursor-pointer">Restart</button>
        </div>
      </div>
      <Fire zIndex={"50"} classOverrides="bottom-32" scale="3.1" type={1} active={true}/>
      <Fire zIndex={"50"} classOverrides="bottom-32 right-12" scale="3.1" type={1} active={true}/>
      <Fire zIndex={"50"} classOverrides="top-0 -rotate-90 right-12" scale="3.1" type={3} active={true}/>
      <Fire zIndex={"50"} classOverrides="top-0 -rotate-180 left-12" scale="3.1" type={3} active={true}/>
      <Fire zIndex={"50"} classOverrides="bottom-32 right-1/2" scale="3.1" type={2} active={true}/>
    </div>
  )
}

export default GameOver;
