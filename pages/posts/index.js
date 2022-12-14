import AllPosts from "../../components/posts/all-post";
import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage(props) {
  return <AllPosts posts={props.posts} />;
}

export async function getStaticProps() {
  const allPosts = await getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
