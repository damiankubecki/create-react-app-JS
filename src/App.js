import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  margin: 20px;
  text-align: center;
  color: ${({ theme }) => theme.title};
`

const App = () => <Title> Hello world! </Title>

export default App
