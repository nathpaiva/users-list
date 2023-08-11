import { ButtonHTMLAttributes, KeyboardEvent, useContext } from 'react'

import styled, { css } from 'styled-components'

import { CardUserContext } from './CardUserContext'

type TCardPicture = ButtonHTMLAttributes<HTMLButtonElement> & {
  $userSelected?: boolean
  role?: string
  onKeyDown?: (event: KeyboardEvent<Element>) => void
  onClick?: () => void
}

export const CardUserContainer = styled.div<TCardPicture>`
  ${({ $userSelected, role }) => {
    const { cardStyle } = useContext(CardUserContext)

    return css`
      --stagger-delay: 90ms;
      --bg-color-style: ${cardStyle === 'short'
        ? 'var(--bg-c-light)'
        : 'var(--bg-c-dark)'};
      --color: ${cardStyle === 'short'
        ? 'var(--color-dark)'
        : 'var(--color-light)'};
      --pd-top: ${cardStyle === 'short' ? '20px' : '10px'};
      --flex-dir: ${cardStyle === 'short' ? 'row' : 'column'};

      --bg-color: ${$userSelected
        ? 'var(--color-highlight)'
        : 'var(--bg-color-style)'};
      --bg-color-hover: ${cardStyle === 'short'
        ? 'var(--color-highlight-inverse)'
        : 'var(--bg-color)'};

      ${role === 'button' && 'cursor: pointer;'}
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

CardUserContainer.displayName = 'CardUserContainer'
