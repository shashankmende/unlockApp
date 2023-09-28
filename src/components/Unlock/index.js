import {useState} from 'react'
import {Container, Image, Text, Button} from './styledComponents'

const Unlock = () => {
  const [isLocked, setObject] = useState(true)

  const onClickBtn = () => {
    setObject(prevState => !prevState)
  }

  const url = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const altText = isLocked ? 'lock' : 'unlock'

  const text = isLocked ? 'Your Device is Locked' : 'Your Device is Unlocked'

  const btnText = isLocked ? 'Unlock' : 'Lock'

  return (
    <Container>
      <Image src={url} alt={altText} />
      <Text>{text}</Text>
      <Button type="button" onClick={onClickBtn}>
        {btnText}
      </Button>
    </Container>
  )
}

export default Unlock
