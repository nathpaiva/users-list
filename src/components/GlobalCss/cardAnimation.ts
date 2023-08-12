import { css, keyframes } from 'styled-components'

const cardEntrance = keyframes`
  from {
    opacity: 0;
    transform: scale(0.7);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

export const animateCards = css`
  transition: background-color 0.2s ease-out 100ms;

  animation: ${cardEntrance} 500ms ease-out;
  animation-fill-mode: backwards;

  &:nth-of-type(1) {
    animation-delay: calc(1 * var(--stagger-delay));
  }
  &:nth-of-type(2) {
    animation-delay: calc(2 * var(--stagger-delay));
  }
  &:nth-of-type(3) {
    animation-delay: calc(3 * var(--stagger-delay));
  }
  &:nth-of-type(4) {
    animation-delay: calc(4 * var(--stagger-delay));
  }
  &:nth-of-type(5) {
    animation-delay: calc(5 * var(--stagger-delay));
  }
  &:nth-of-type(6) {
    animation-delay: calc(6 * var(--stagger-delay));
  }
  &:nth-of-type(7) {
    animation-delay: calc(7 * var(--stagger-delay));
  }
  &:nth-of-type(8) {
    animation-delay: calc(8 * var(--stagger-delay));
  }
  &:nth-of-type(9) {
    animation-delay: calc(9 * var(--stagger-delay));
  }
  &:nth-of-type(10) {
    animation-delay: calc(10 * var(--stagger-delay));
  }
  &:nth-of-type(11) {
    animation-delay: calc(11 * var(--stagger-delay));
  }
  &:nth-of-type(12) {
    animation-delay: calc(12 * var(--stagger-delay));
  }
  &:nth-of-type(13) {
    animation-delay: calc(13 * var(--stagger-delay));
  }
  &:nth-of-type(14) {
    animation-delay: calc(14 * var(--stagger-delay));
  }
  &:nth-of-type(15) {
    animation-delay: calc(15 * var(--stagger-delay));
  }
  &:nth-of-type(16) {
    animation-delay: calc(16 * var(--stagger-delay));
  }
  &:nth-of-type(17) {
    animation-delay: calc(17 * var(--stagger-delay));
  }
  &:nth-of-type(18) {
    animation-delay: calc(18 * var(--stagger-delay));
  }
  &:nth-of-type(19) {
    animation-delay: calc(19 * var(--stagger-delay));
  }
  &:nth-of-type(20) {
    animation-delay: calc(20 * var(--stagger-delay));
  }

  @media (prefers-reduced-motion) {
    transition: none;
    animation: none;
  }
`

const cardEntranceFullProfile = keyframes`
  from {
    opacity: 0;
    /* transform: scale(0.3); */
  }
  to {
    opacity: 1;
    /* transform: scale(1); */
  }
`

export const animateFullProfile = css`
  animation: ${cardEntranceFullProfile} 500ms ease-out;
  animation-fill-mode: backwards;

  @media (prefers-reduced-motion) {
    transition: none;
  }
`
