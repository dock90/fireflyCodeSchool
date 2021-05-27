import Link from 'next/link'
import styled from 'styled-components'

// styles
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin: 0 2rem;

  h2 {
    cursor: pointer;
  }
`

const Links = styled.div`
  justify-self: end;

  a {
    font-size: 1.5rem;
    text-decoration: none;
  }
`

const Header = () => (
  <Container>
    <Link href='/'>
      <h2>Firefly Code School</h2>
    </Link>
    <Links>
      <Link href='/posts'>Posts</Link>
    </Links>
  </Container>
)

export default Header
