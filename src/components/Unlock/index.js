import {useState} from 'react'

import {AppContainer, Image, DeviceStatus, Button} from './styledComponents'

const Unlock = () => {
  const [isLock, setStatus] = useState(true)
  const imageUrl = isLock
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const altValue = isLock ? 'lock' : 'unlock'
  const lockText = isLock ? 'Your Device is Locked' : 'Your Device is Unlocked'
  const buttonText = isLock ? 'Unlock' : 'Lock'
  const onClickButton = () => {
    setStatus(prevStatus => !prevStatus)
  }
  return (
    <AppContainer>
      <Image src={imageUrl} alt={altValue} />
      <DeviceStatus>{lockText}</DeviceStatus>
      <Button type="button" onClick={onClickButton}>
        {buttonText}
      </Button>
    </AppContainer>
  )
}

export default Unlock
