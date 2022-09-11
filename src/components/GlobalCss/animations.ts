import { css } from '@emotion/react'

import { animateCards, animateFullProfile } from './cardAnimation'

export const animations = css`
  .cardUser-animate {
    ${animateCards}
  }

  .fullProfile-animate {
    ${animateFullProfile}
  }
`
