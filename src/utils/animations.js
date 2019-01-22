import { keyframes } from 'styled-components'

const listItemAnimation = keyframes`
  0% {
    width: 100%;
  }

  50% {
    width: 80%;
  }

  80% {
    width: 120%;
  }

  100% {
    width: 100%;
  }
`

export { listItemAnimation }
