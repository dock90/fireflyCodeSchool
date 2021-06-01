import Link from 'next/link'
import groq from 'groq'
import styled from 'styled-components'
// components
import client from '../client'
import Header from '../components/header'
import WaitList from '../components/waitList'

// styles
const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
`

const Blocker = styled.div`
  margin-bottom: 1rem;

  a {
    display: grid;
    font-size: 2rem;
    text-decoration: none;
  }
`

const Blockers = (props) => {
  const { blockers = [] } = props
  return (
    <>
      <Header />
      <Container>
        <h1>Why have you failed to learn code in the past?</h1>
        {blockers.map(
          ({ _id, title = '', slug = '', _updatedAt = '' }) =>
            slug && (
              <Blocker key={_id}>
                <Link href="/blocker/[slug]" as={`/blocker/${slug.current}`}>
                  <a>{title}</a>
                </Link>{' '}
                {new Date(_updatedAt).toDateString()}
              </Blocker>
            )
        )}
        <hr />
        <h2>Learn how to code and land that job.</h2>
        <p>Each Monday I will send you actionable steps to get you one step closer to learning code, and getting a job as a frontend dev.</p>
        <WaitList />
      </Container>
    </>
  )
}

Blockers.getInitialProps = async () => ({
  blockers: await client.fetch(groq`
      *[_type == "blocker" && publishedAt < now()]|order(publishedAt desc)
    `)
})

export default Blockers
