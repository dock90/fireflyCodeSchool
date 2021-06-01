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

const Post = styled.div`
  margin-bottom: 1rem;

  a {
    display: grid;
    font-size: 2rem;
    text-decoration: none;
  }
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
              <Post key={_id}>
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                  <a>{title}</a>
                </Link>{' '}
                {new Date(_updatedAt).toDateString()}
              </Post>
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

Posts.getInitialProps = async () => ({
  posts: await client.fetch(groq`
      *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
    `)
})

export default Posts
