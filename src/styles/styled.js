import styled from 'styled-components'

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const AuthFormWrapper = styled.div`
  width: 520px;
  min-height: 220px;
  @media screen and (max-width: 880px) {
    width: 90%;
    margin: 0 auto;
  }
`

export const PageHeader = styled.div`
  width: 520px;
  min-height: 220px;
`
