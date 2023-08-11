import { css, createGlobalStyle } from 'styled-components'

import { animations } from './animations'
import { variables } from './cssVariables'
import { reset } from './resetCss'

const combineCss = css`
  ${reset}
  ${animations}
  ${variables}
`

export const GlobalCss = createGlobalStyle`
  ${combineCss}
`
