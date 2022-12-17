import { useState, useEffect, useContext } from 'react'
import { FireContext } from '../../services/state/FireProvider'

const fireTypes = {
  1: '/fire/f_01.gif',
  2: '/fire/f_02.gif',
  3: '/fire/f_03.gif',
}

const Fire = ({type, classOverrides, scale, zIndex, index, end, ...props}) => {
  const { activeFire, canKill, removeFire } = useContext(FireContext)

  const show = true
  const [isKilled, setIsKilled] = useState(false)

  const active = activeFire.indexOf(index) !== -1

  const killFire = () => {
    if (!canKill) return;
    removeFire(index)
  }

  return (
    <div style={{zIndex: zIndex}} className={`absolute ${classOverrides}` }>
      <div className="relative">
        {show && active && !isKilled &&
          <img
            style={{
              transform: `scale(${scale})`,
            }}
            onClick={() => killFire()}
            className={`-translate-y-full`}
            src={fireTypes[type]}/>}
      </div>
    </div>
  )
}

export default Fire
