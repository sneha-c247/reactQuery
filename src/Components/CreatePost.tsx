
// import { useState } from "react";
// import { useMutation } from "react-query";
// import axios from "axios";

// interface Props {
//   title: string;
//   body: string;
// }

// const CreatePost = () => {
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");

//   const mutation = useMutation(
//     (newPost: Props) =>
//       axios.post("https://jsonplaceholder.typicode.com/posts", newPost),
//   );

//   const submitData = async () => {
//     try {
//       // Assuming you want to submit the current state of title and body
//       await mutation.mutateAsync({ title, body });
//     } catch (error) {
//       // Handle error if needed
//       console.error("Error occurred:", error);
//     }
//   };

//   if (mutation.isLoading) {
//     return <span>Submitting...</span>;
//   }

//   if (mutation.isError) {
//     return <span>Error occurred</span>;
//   }

//   if (mutation.isSuccess) {
//     const createdPost = mutation.data.data; // Access the created post from mutation data
//     return (
//       <div>
//         <p>Post submitted!</p>
//         <p>Created Title: {createdPost.title}</p>
//         <p>Created Body: {createdPost.body}</p>
//         <p>Created Id: {createdPost.id}</p>
      
//       </div>
//     );
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
//       <button onClick={submitData}>Submit</button>

     
//     </div>
//   );
// };

// export default CreatePost;
// import { useState } from "react";
// import { useMutation } from "react-query";
// import axios from "axios";

// interface Props {
//   title: string;
//   body: string;
// }

// const CreatePost = () => {
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
//   const [mutatedData, setMutatedData] = useState<Props | null>(null);

//   const mutation = useMutation(
//     (newPost: Props) =>
//       axios.post("https://jsonplaceholder.typicode.com/posts", newPost),
//     {
//       onSuccess: (response) => {
//         const responseData = response.data; // Extract data from Axios response
//         setMutatedData(responseData);
//       },
//       onSettled: () => {
//         // Reset the form fields after mutation is settled
//         setTitle("");
//         setBody("");
//       },
//     }
//   );

//   const submitData = async () => {
//     try {
//       // Assuming you want to submit the current state of title and body
//       await mutation.mutateAsync({ title, body });
//     } catch (error) {
//       // Handle error if needed
//       console.error("Error occurred:", error);
//     }
//   };

//   if (mutation.isLoading) {
//     return <span>Submitting...</span>;
//   }

//   if (mutation.isError) {
//     return <span>Error occurred</span>;
//   }

//   if (mutation.isSuccess && mutatedData) {
//     return (
//       <div>
//         <p>Post submitted!</p>
//         <p>Created Title: {mutatedData.title}</p>
//         <p>Created Body: {mutatedData.body}</p>
        
//       </div>
//     );
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
//       <button onClick={submitData}>Submit</button>
//     </div>
//   );
// };

// export default CreatePost;

// import { useState } from "react";
// import { useMutation } from "react-query";
// import axios from "axios";

// interface Props {
//   title: string;
//   body: string;
// }

// const CreatePost = () => {
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
//   const [mutatedData, setMutatedData] = useState<Props | null>(null);

//   const mutation = useMutation(
//     (newPost: Props) =>
//       axios.post("https://jsonplaceholder.typicode.com/posts", newPost),
//     {
//       onSuccess: (response) => {
//         const responseData: Props = response.data; // Extract data from Axios response
//         setMutatedData(responseData);
//       },
//       onSettled: () => {
//         // Reset the form fields after mutation is settled
//         setTitle("");
//         setBody("");
//       },
//     }
//   );

//   const submitData = async () => {
//     try {
//       // Assuming you want to submit the current state of title and body
//       await mutation.mutateAsync({ title, body });
//     } catch (error) {
//       // Handle error if needed
//       console.error("Error occurred:", error);
//     }
//   };

//   return (
//     <div>
     
//      {mutation.isSuccess && mutatedData && (
//         <div>
//           <p>Post submitted!</p>
//           <p>Created Title: {mutatedData.title}</p>
//           <p>Created Body: {mutatedData.body}</p>
//         </div>
//       )}

//         <div>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Title"
//           />
//           <input
//             type="text"
//             value={body}
//             onChange={(e) => setBody(e.target.value)}
//             placeholder="Body"
//           />
//           <button onClick={submitData}>Submit</button>
//         </div>
      
//     </div>
//   );
// };

// export default CreatePost;
import { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import DeletePost from "./DeletePost";
import UpdatePost from "./UpdatePost";

interface Props {
  title: string;
  body: string;
  id?: number;
}

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  // const [id, setId] = useState<number | undefined>(undefined); // Provide an initial value
  const [postData, setPostData] = useState<Props | null>(null); // Store post data
  const mutation = useMutation(
    (newPost: Props) =>
      axios.post("https://jsonplaceholder.typicode.com/posts", newPost),
    {
      onSuccess: (response) => {
        const responseData: Props = response.data;
        setPostData(responseData); // Set the post data when the post is created
      },
      onSettled: () => {
        setTitle("");
        setBody("");
        // setId(undefined); // Reset the id after submission
      },
    }
  );

  const submitData = async () => {
    try {
      await mutation.mutateAsync({ title, body});
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <div>
      {mutation.isSuccess && postData && (
        <div>
          <p>Post submitted!</p>
          <p>Created Title: {postData.title}</p>
          <p>Created Body: {postData.body}</p>
          {postData.id && <DeletePost postId={postData.id} />} 
          {postData.id && <UpdatePost postId={postData.id} />} 
        </div>
      )}

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
        <button onClick={submitData}>Submit</button>
      </div>
    </div>
  );
};

export default CreatePost;
