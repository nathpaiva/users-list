import React, { useContext } from 'react'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { CardUserContext } from './CardUserContext'

type TCardPicture = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  userSelected: boolean
  index: number
}

export const CardUserContainer = styled.div<TCardPicture>`
  ${({ userSelected, index }) => {
    const { cardStyle } = useContext(CardUserContext)

    return css`
      --stagger-delay: 90ms;
      --index: ${index + 1};
      --bg-color-style: ${cardStyle === 'short'
        ? 'var(--bg-c-light)'
        : 'var(--bg-c-dark)'};
      --color: ${cardStyle === 'short'
        ? 'var(--color-dark)'
        : 'var(--color-light)'};
      --pd-top: ${cardStyle === 'short' ? '20px' : '10px'};
      --flex-dir: ${cardStyle === 'short' ? 'row' : 'column'};

      --bg-color: ${userSelected ? 'red' : 'var(--bg-color-style)'};
      --bg-color-hover: ${cardStyle === 'short' ? 'orange' : 'var(--bg-color)'};
    `
  }}

  background-color: var(--bg-color);
  color: var(--color);
  padding: 10px 10px 10px;

  .card-bio {
    &__image {
      width: 100%;
    }
  }

  &:hover,
  &:focus {
    background-color: var(--bg-color-hover);
  }
`
