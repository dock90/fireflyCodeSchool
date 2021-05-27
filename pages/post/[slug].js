import groq from 'groq'
import BlockContent from '@sanity/block-content-to-react'
import styled from 'styled-components'
// components
import Header from '../../components/header'
import WaitList from '../../components/waitList'
import client from '../../client'

// styles
const Container = styled.article`
  max-width: 800px;
  margin: 2rem auto;
`

const Post = (props) => {
  const {
    title = 'Missing title',
    body = []
  } = props
  return (
    <>
      <Header />
      <Container>
        <h1>{title}</h1>
        <BlockContent
          blocks={body}
          imageOptions={{ w: 320, h: 240, fit: 'max' }}
          {...client.config()}
        />
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

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query
  return await client.fetch(query, { slug })
}

export default Post
