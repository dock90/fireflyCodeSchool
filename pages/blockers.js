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
              <li key={_id}>
                <Link href="/blocker/[slug]" as={`/blocker/${slug.current}`}>
                  <a>{title}</a>
                </Link>{' '}
                ({new Date(_updatedAt).toDateString()})
              </li>
            )
        )}
        <hr />
        <h2>Start your new career as a frontend developer.</h2>
        <p>Your roadmap to committing to a change and finally learning how to code.</p>
        <p>+ Start from scratch</p>
        <p>+ Learn from someone who has been in your shoes</p>
        <p>+ Start thinking like a developer</p>
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
