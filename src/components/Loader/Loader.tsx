import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

const spinner = keyframes`

  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }

`
export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  &::after {
    content: '';
    border: 20px solid #eaf0f6;
    border-radius: 50%;
    border-top: 20px solid #ff7a59;
    width: 140px;
    height: 140px;
    animation: ${spinner} 4s linear infinite;
  }
`
