import styled from '@emotion/styled'

import { MEDIA } from '../../../constants'

const CardFullProfile = styled.div`
  padding: 10px;

  display: flex;
  flex-direction: column;
  background-color: var(--bg-c-light);
  color: var(--color-light);

  &:not(:first-of-type) {
    row-gap: 10px;
  }

  @media (min-width: ${MEDIA.mobile}) {
    padding: 20px;
  }
`

// create as a component to have access of the component Name
export const CardDetail: React.FC<CardCommonProps> = (props) => (
  <CardFullProfile {...props} />
)
CardDetail.displayName = 'CardDetail'
