import Head from 'next/head'
import styled from 'styled-components'
// components
import Header from '../components/header'
import WaitList from '../components/waitList'

// styles
const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
`
const Index = () => {
  return (
    <>
      <Head>
        <title>Learn to code from scratch | Firefly Code School</title>
        <script src="https://f.convertkit.com/ckjs/ck.5.js" />
      </Head>
      <Header />
      <Container>
        <h1>Start your new career as a frontend developer.</h1>
        <p>Your roadmap to committing to a change and finally learning how to code.</p>
        <p>+ Start from scratch</p>
        <p>+ Learn from someone who has been in your shoes</p>
        <p>+ Start thinking like a developer</p>
        <WaitList />
        <hr />
        <h2>There is no better time to learn how to code than right now.</h2>
        <p>Anyone, including you can teach themselves how to code and start your new career path as a frontend developer.</p>
        <p>But, you probably already know this.</p>
        <p>You have friends or know people who have taught themselves how to code or went to a bootcamp and watched how their new skills changed their lives.</p>
        <p>You cant help but think:</p>
        <p>If they can learn how to code, why cant I?</p>
        <p>What would financial freedom feel like?</p>
        <p>Maybe,  I can work from anywhere in the world too!</p>
        <p>Maybe, I can have a job I actually like :screamface</p>
        <h3>But, every time you to go to learn how to code you end up getting stuck and burning out after a few weeks.</h3>
        <hr />
        <h2>Why does it make sense when you are watching the tutorials and following along, but as soon as you try to do it yourself - you draw a blank?</h2>
        <p>You know learning a new skill like code takes consistent practice.</p>
        <p>But, when your already juggling working a fulltime job (or two) or taking care of the kids after work, learning to code ends up taking a backseat.</p>
        <p>And there is absolutely no way you can dish out thousands of dollars and months of full time commitment to go to a bootcamp.</p>
        <hr />
        <h2>To make matters worse, no matter how many tutorials you watch and blog posts you read, it never seems to make a difference.</h2>
        <p>Your still on YouTube following tutorials, trying to peice together conflicting information.</p>
        <p>You dont feel any closer to knowing where to start on your own or how to apply that code outside of that specific example you just went through.</p>
        <p>You have started and stopped learning to code at least three times by now.</p>
        <p>You just dont seem to 'get it' even though the vidoes say you should.</p>
        <h3>And WTF is up with those foo bar baz biz examples?</h3>
        <hr />
        <h2>Sound familiar?</h2>
        <hr />
        <h2>I know, because that was me 5 years ago.</h2>
        <p>Hi there, my named is Edward Danilyuk.</p>
        <p>Im a software engineer at 6 River systems, and I have been consulting for the past 5 years as a full stack developer with startups all over the globe. I currently run a startup studio and am focused on building tools to empower bootstrapped startups, and code learners.</p>
        <h2>When I started my journey as a developer 6 years ago, I had no idea what I was doing.</h2>
        <p>When my daughter was born in 2014, I set an impossible goal for myself. Stop working construction and being away for weeks at a time, teach myself how to code, and get a job making 60k a year. The problem was - I had no roadmap, no plan on how to do that. I didn't even know where to start.</p>
        <h3>Every time I would follow a code tutorial, I felt like I was learning nothing.</h3>
        <p>I would spend hours going through a course, only to come out the other side still not knowing why my styles were not working right, or why my javascript was throwing an error.</p>
        <p>Yes, I completed courses - but I did not know how to apply those skills on my own.</p>
        <h3>My strategy at the time: learn all the code languages. Seriously - I tried to learn PHP, JS, Ruby and Python at the same time. :facepalm</h3>
        <hr />
        <h2>In 2016, I got 3 clients lined up within a span of a month.</h2>
        <p>This gave me the confidence to quit my job as a sales / project manager at a commercial construction company, and go all in as a consultant helping people and businesses with development needs.</p>
        <hr />
        <h2>Over the past 5 years I went from charging $400 for a website, to charging over $300 / hour and being booked for months, to working as a software engineer on a products used by millions of people.</h2>
        <p>If your tired of struggling to learn how to code, and trying to figure it out on your own - I can help.</p>
        <hr />
        <h2>Introducing - Firefly Code School</h2>
        <p>Your roadmap to commit to a change and finally learn how to code.</p>
        <p>+ Start from scratch</p>
        <p>+ Learn from someone who has been in your shoes</p>
        <p>+ Start thinking like a developer</p>
        <WaitList />
        <hr />
        <h2>Firefly code school is designed to help you understand the foundation of tech, learn the skills needed to get the job done on your own (outside of a tutorial), and understand the mentality behind what you are doing.</h2>
        <h3>It comes from literally trial by fire and is built on all the success and mistake I made when I was in your shoes 5 years ago.</h3>
        <p>You wont find any hand wavey code examples or fake practice. Kick foo bar biz to the curb.</p>
        <p>Instead, you will learn the foundation you need to understand what happens behind the scenes when you code, the skills based on actual real world code problems and how to apply them on your own and how to think like a developer.</p>
        <p>The ultimate goal is to get you from zero code experience, to landing your job as a frontend web developer as quickly as possible.</p>
        <h2>Ready to get started?</h2>
        <WaitList />
      </Container>
    </>
  )
}

export default Index
