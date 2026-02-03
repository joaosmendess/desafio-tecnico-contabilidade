import styled from 'styled-components'

export const ContainerRoot = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 var(--space-lg);
`
