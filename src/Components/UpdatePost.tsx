
// import { useMutation } from "react-query";
// import axios from "axios";
// import { useState } from "react";
// interface Props {
//     title: string;
//     body: string;
//     postId?: number;
//   }
 
//   const UpdatePost = () => {
//     const [title, setTitle] = useState("");
//     const [body, setBody] = useState("");
  


//   const mutation = useMutation((updatedPost:Props,{postId}) =>
//     axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, updatedPost),
//   );

//   const submitData = () => {
//     mutation.mutate({ title, body ,id});
//   };

//   if (mutation.isLoading) {
//     return <span>Updating...</span>;
//   }

//   if (mutation.isError) {
//     return <span>Error occured</span>;
//   }

//   if (mutation.isSuccess) {
//     return <span>Post updated!</span>;
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Title"
//       />
//       <input
//         type="text"
//         value={body}
//         onChange={(e) => setBody(e.target.value)}
//         placeholder="Body"
//       />
//       <button onClick={submitData}>Update</button>
//     </div>
//   );
// };

// export default UpdatePost;

// import { useMutation } from "react-query";
// import axios from "axios";
// import { useState } from "react";

// interface Props {
//   postId: number; 
// }

// const UpdatePost: React.FC<Props> = ({ postId }) => {
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");

 
  

//   const mutation = useMutation(
//     (updatedPost: { title: string; body: string }) => {
//       console.log("Making update request for postId:", postId);
//       return axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, updatedPost);
//     }
//   );

//   const submitData = () => {
//     mutation.mutate({ title, body });
//   };

//   if (mutation.isLoading) {
//     return <span>Updating...</span>;
//   }

//   if (mutation.isError) {
//     return <span>Error occurred</span>;
//   }

//   if (mutation.isSuccess) {
//     return <span>Post updated!</span>;
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Title"
//       />
//       <input
//         type="text"
//         value={body}
//         onChange={(e) => setBody(e.target.value)}
//         placeholder="Body"
//       />
//       <button onClick={submitData}>Update</button>
//     </div>
//   );
// };

// export default UpdatePost;


import { useMutation } from "react-query";
import axios from "axios";
import { useState } from "react";
interface Props {
 
    postId?:number
  }
  
  const UpdatePost: React.FC<Props> = ({ postId }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

 console.log(postId)
  

  const mutation = useMutation(
    (updatedPost: { title: string; body: string }) => {
      console.log("Making update request for postId:", postId);
      return axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, updatedPost);
    }
  );

  const submitData = async() => {
    mutation.mutateAsync({ title, body });
  };

  if (mutation.isLoading) {
    return <span>Updating...</span>;
  }

  if (mutation.isError) {
    return <span>Error occured</span>;
  }

  if (mutation.isSuccess) {
    return <span>Post updated!</span>;
  }

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
      />
      <button onClick={submitData}>Update</button>
    </div>
  );
};

export default UpdatePost;