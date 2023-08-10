import { Global, css } from '@emotion/react'

import { animations } from './animations'
import { variables } from './cssVariables'
import { reset } from './resetCss'

const combineCss = css`
  ${reset}
  ${animations}
  ${variables}
`

export const GlobalCss = () => <Global styles={combineCss} />
