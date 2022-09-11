import React from 'react'

import styled from '@emotion/styled'

import { MEDIA } from '../../../constants'

const CardFullProfile = styled.div`
  padding: 10px;
  background-color: var(--bg-c-light);
  color: var(--color-light);

  @media (min-width: ${MEDIA.mobile}) {
    padding: 20px;
  }
`

// create as a component to have access of the component Name
export const CardDetail: React.FC<CardCommonProps> = (props) => (
  <CardFullProfile {...props} />
)
CardDetail.displayName = 'CardDetail'