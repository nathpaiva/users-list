import styled from '@emotion/styled'

const CardDescriptionStyle = styled.div`
  display: flex;
  justify-content: center;

  padding-top: var(--pd-top);
  flex-direction: var(--flex-dir);

  row-gap: 10px;
`
// create as a component to have access of the component Name
export const CardDescription = ({ tabIndex, children }: CardCommonProps) => (
  <CardDescriptionStyle tabIndex={tabIndex}>{children}</CardDescriptionStyle>
)

CardDescription.displayName = 'CardDescription'
