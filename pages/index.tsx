import Link from 'next/link'
import Layout from '../components/Layout'
import RichText from '../components/RichText'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
      <RichText/>

    </p>
  </Layout>
)

export default IndexPage
