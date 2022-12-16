import { useState, useEffect } from 'react'

const fireTypes = {
  1: '/fire/f_01.gif',
  2: '/fire/f_02.gif',
  3: '/fire/f_03.gif',
}

const Fire = ({active, cb, type, classOverrides, scale, zIndex, ...props}) => {
  const show = false
  const canKill = false
  const [isKilled, setIsKilled] = useState(false)

  const killFire = () => {
    if (!canKill) return;
    setIsKilled(!isKilled)
    cb && cb()
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
