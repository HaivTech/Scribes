import PageTitle from '@/components/PageTitle'
import { getSinglePost } from 'pages/api/post'
import { useEffect, useState } from 'react'
import Markdown from 'markdown-to-jsx'
import formatDate from '@/lib/utils/formatDate'
import { CalendarIcon } from '@radix-ui/react-icons'
import { FaUser } from 'react-icons/fa'
import PostLayout from '@/layouts/PostLayout'

const DEFAULT_LAYOUT = 'PostLayout'

export async function getServerSideProps({ params }) {
  return { props: { params } }
}

export default function Blog({ params }) {
  const [notFound, setNotFound] = useState(false)
  const [post, setPost] = useState([])

  const fetchPost = async () => {
    const slug = params.slug
    const { error, post } = await getSinglePost(slug)
    if (error) console.log(error)
    console.log(post)

    if (error) {
      setNotFound(true)
    } else
      setPost({
        ...post,
        tags: post.tags?.join(', '),
      })
  }

  useEffect(() => {
    fetchPost()
  }, [])
  return (
    <>
      {notFound ? (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      ) : (
        <PostLayout post={post}>
          <Markdown className="">{post.content ? post.content : ''}</Markdown>
        </PostLayout>
      )}
    </>
  )
}
