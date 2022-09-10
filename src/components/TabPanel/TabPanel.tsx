import React from 'react'

import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

import { MEDIA } from '../../constants'
import { useTabContext } from '../TabContext'

type TTabPanel = {
  index: number
  children: React.ReactNode
  layout?: 'grid:2' | 'grid:4'
  tabindex?: string
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const grid4Col = css`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;

  @media (min-width: ${MEDIA.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${MEDIA.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${MEDIA.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const grid2Col = css`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  @media (min-width: ${MEDIA.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }
`
type TContainer = {
  layout: typeof grid4Col | typeof grid2Col
  hidden: boolean
}

const Container = styled.section<TContainer>`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 10px;

  ${({ hidden, layout }) => (hidden ? 'none' : layout)}
`

export const TabPanel: React.FC<TTabPanel> = ({
  index,
  layout = 'grid:4',
  ...props
}) => {
  const context = useTabContext()

  if (!context) return null

  return (
    <Container
      hidden={index !== context.currentTab}
      id={`tab-panel-${index}`}
      role="tabpanel"
      aria-labelledby={`tab-panel-${index}`}
      layout={layout === 'grid:4' ? grid4Col : grid2Col}
      {...props}
    />
  )
}
