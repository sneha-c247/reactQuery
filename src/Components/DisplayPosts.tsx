
import { useQuery } from "react-query";
import axios from "axios";

const retrievePosts = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
  );
  return response.data;
};

const DisplayPosts = () => {
  const {
    data,
    error,
    isLoading,
  } = useQuery("postsData", retrievePosts);

  if (isLoading) return <div>Fetching posts...</div>;
  if (error) return <div>An error occurred</div>;

  return (
    <ul>
      {data.map((post:any) => (
        <li key={post.id}>{post.title} and {post.body }</li>
        
      ))}
    </ul>
  );
};

export default DisplayPosts;