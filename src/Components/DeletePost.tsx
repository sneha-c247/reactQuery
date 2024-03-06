


import { useMutation } from "react-query";
import axios from "axios";

interface Props {
  postId?: number;
}

const DeletePost: React.FC<Props> = ({ postId }) => {
 console.log(postId)
  const mutation = useMutation(() =>
     
       axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    // Resolve immediately if postId is undefined
  );

  const deleteData = () => {
    mutation.mutate();

  };

 

  if (mutation.isLoading) {
    return <span>Deleting...</span>;
  }

  if (mutation.isError) {
    return <span>Error occurred</span>;
  }

  

  return (
    <div>
      <button onClick={deleteData}>Delete Post</button>
    </div>
  );
};

export default DeletePost;
