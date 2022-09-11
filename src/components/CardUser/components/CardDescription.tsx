import React from 'react'

import styled from '@emotion/styled'

const CardDescriptionStyle = styled.div`
  display: flex;
  justify-content: center;

  padding-top: var(--pd-top);
  flex-direction: var(--flex-dir);
`
// create as a component to have access of the component Name
export const CardDescription: React.FC<CardCommonProps> = (props) => (
  <CardDescriptionStyle {...props} />
)
CardDescription.displayName = 'CardDescription'
