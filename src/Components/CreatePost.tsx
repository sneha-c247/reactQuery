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
