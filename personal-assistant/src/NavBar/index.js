import React from 'react'
import { Container, StyledLink, Box } from './styles'


const NavBar = () => (
  <Container>
      <StyledLink to="/Weather">
        Weather
      </StyledLink>
      <StyledLink to="/">
        Home
      </StyledLink>
  </Container>

)

export default NavBar
