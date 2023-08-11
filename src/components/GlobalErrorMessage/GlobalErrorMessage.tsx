import styled from 'styled-components'
import { GlobalCss } from '../GlobalCss'

interface IGlobalErrorMessage {
  error: string
}

const Container = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;

  font-size: 2rem;
`

export const GlobalErrorMessage = ({ error }: IGlobalErrorMessage) => {
  return (
    <>
      <GlobalCss />
      <Container>{error}</Container>
    </>
  )
}
