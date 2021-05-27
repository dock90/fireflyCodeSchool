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

const Posts = (props) => {
  const { posts = [] } = props
  return (
    <>
      <Header />
      <Container>
        <h1>Posts</h1>
        {posts.map(
          ({ _id, title = '', slug = '', _updatedAt = '' }) =>
            slug && (
              <li key={_id}>
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>
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

Posts.getInitialProps = async () => ({
  posts: await client.fetch(groq`
      *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
    `)
})

export default Posts
