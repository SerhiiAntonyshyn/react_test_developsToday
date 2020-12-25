import MainLayout from "../../components/MainLayout/MainLayout";
import { PostDetails } from "../../components/postDetails/PostDetails";
import Head from "next/head";
import axios from "axios";

export default function Post({data}) {
  return (
    <MainLayout>
      <Head>
        <title>{data.title || 'There is no title'}</title>
      </Head>
      <PostDetails
        {...data}
      />
    </MainLayout>
  )
}

export async function getServerSideProps({ query }) {
  const { data } = await axios.get(`https://simple-blog-api.crew.red/posts/${query.postId}?_embed=comments`);

  return {
    props: { data },
  };
}