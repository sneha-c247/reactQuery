
// import { useMutation } from "react-query";
// import axios from "axios";

// const DeletePost = () => {
//   const mutation = useMutation(() =>
//     axios.delete("https://jsonplaceholder.typicode.com/posts/1"),
//   );

//   const deleteData = () => {
//     mutation.mutate();
//   };

//   if (mutation.isLoading) {
//     return <span>Deleting...</span>;
//   }

//   if (mutation.isError) {
//     return <span>Error occured</span>;
//   }

//   if (mutation.isSuccess) {
//     return <span>Post deleted!</span>;
//   }

//   return (
//     <div>
//       <button onClick={deleteData}>Delete Post</button>
//     </div>
//   );
// };

// export default DeletePost;

// import { useMutation } from "react-query";
// import axios from "axios";

// interface Props {
//   postId?: number;
// }

// const DeletePost: React.FC<Props> = ({ postId }) => {
//   const mutation = useMutation(() =>
 
//     axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)

//   );

//   const deleteData = () => {
//     mutation.mutate();
//   };

//   if (mutation.isLoading) {
//     return <span>Deleting...</span>;
//   }

//   if (mutation.isError) {
//     return <span>Error occurred</span>;
//   }

//   if (mutation.isSuccess) {
//     return <span>Post deleted!</span>;
//   }

//   return (
//     <div>
//       <button onClick={deleteData}>Delete Post</button>
//     </div>
//   );
// };

// export default DeletePost;
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
