import App from '../components/App'
import Header from '../components/Header'
import Submit from '../components/Submit'
import PostList from '../components/PostList'
import withData from '../lib/withData'
import Head from 'next/head'
import config from '../lib/config'

const {
  webpageTitle
} = config

export default withData((props) => (
  <App>
  <Head>
    <title>[{webpageTitle}]</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <script dangerouslySetInnerHTML={{__html: ga}} />
    <script dangerouslySetInnerHTML={{__html: fb}} />
  </Head>
    <Header pathname={props.url.pathname} />
    <Submit />
    <PostList />
  </App>
))
