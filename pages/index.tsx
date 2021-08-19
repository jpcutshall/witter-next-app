import type { NextPage, GetServerSideProps } from 'next'
import { getAllPosts } from '../lib/posts'
import styles from '../styles/Home.module.css'

interface Props {
  allPostsData: [{
    author: string,
    body: string,
    image?: {
      data: Buffer,
      contentType: string,
    },
    likes: [string],
    replies: [string],
    created_at: string,
    updatedAt: string
  }]

}

export const getServerSideProps: GetServerSideProps = async () => {

  const allPosts = await getAllPosts()
  const allPostsData = allPosts?.data
  return {
    props: {
      allPostsData
    }
  }
}

const Home: NextPage<Props> = ({ allPostsData }) => {
  return (
    <div className={styles.container} >
        <section>
            <h1>All Posts</h1>
            <div>
              {allPostsData.map( ({ author, body, image, likes, replies, created_at, updatedAt}) => (
                <div key={created_at} >
                  <h2>{author}</h2>
                  <p>{body}</p>
                  <p>{updatedAt}</p>
                </div>
              ))}
            </div>
        </section>
    </div>
  )
}

export default Home
