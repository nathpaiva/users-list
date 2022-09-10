import React from 'react'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { TSingleUserCard } from '../../type'

type TCardPicture = {
  cardStyle: TSingleUserCard['cardStyle']
  userData: TSingleUserCard['userData']
  userSelected: TSingleUserCard['userSelected']
}

type Newc = Omit<TCardPicture, 'userData'>

const Container = styled.div<Newc>`
  ${({ cardStyle, userSelected }) => css`
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
  `}

  background-color: var(--bg-color);
  color: var(--color);
  padding: 10px 10px 10px;
  transition: background-color 0.2s ease-out 100ms;

  .card-bio {
    &__image {
      width: 100%;
    }

    &__title {
      display: flex;
      justify-content: center;

      padding-top: var(--pd-top);
      flex-direction: var(--flex-dir);
    }
  }

  &:hover,
  &:focus {
    background-color: var(--bg-color-hover);
  }
`

export const CardPicture: React.FC<TCardPicture> = ({
  cardStyle = 'short',
  userData,
  userSelected,
  ...restProps
}) => {
  return (
    <Container
      className="card-bio"
      cardStyle={cardStyle}
      userSelected={userSelected}
      {...restProps}
    >
      <picture>
        {/* @TODO: fix image */}
        {/* 269 x 269
128 x 128
538 x 538 */}
        {/* <source media="(min-width: 75em)" srcSet={userData.picture.large} /> */}
        <source media="(min-width: 40em)" srcSet={userData.picture.large} />
        <img
          src={userData.picture.medium}
          alt={`Image profile of: ${userData.name.first} ${userData.name.last}`}
          className="card-bio__image"
          // width="269"
          // height="269"
          loading="lazy"
          decoding="async"
        />
      </picture>

      <div className="card-bio__title">
        {cardStyle === 'short' ? (
          `${userData.name.first} ${userData.name.last}`
        ) : (
          <>
            <div>{`${userData.name.title}. ${userData.name.first} ${userData.name.last}`}</div>
            <div>{`${userData.location.street.number} ${userData.location.street.name}`}</div>
            <div>{`${userData.location.city}, ${userData.location.state} ${userData.location.postcode}`}</div>
            <div>{` ${userData.location.country}`}</div>
          </>
        )}
      </div>
    </Container>
  )
}
