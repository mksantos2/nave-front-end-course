import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import Form from "../components/Form";

import { createPost } from "../services/posts";

import "../styles/style.css";

const CreatePost = () => {
  const history = useHistory();

  // function to request POST method to create new post
  const fetchPost = async (form) => {
    try {
      await createPost(form);
      toast.success("Post criado com sucesso!!");
      history.push("/");
    } catch {
      toast.error("Oops!! Houve um problema com a criação do post");
    }
  };

  // wrapper to casting the userId to number then send the request
  const onSubmit = (data) => {
    data = { ...data, userId : Number(data.userId)};
    fetchPost(data);
  }

  return (
    <div className="container">
      <h1 className="titleCreatePost">Criar uma nova publicação</h1>
      <Form onSubmit = {onSubmit}/>
    </div>
  );
};

export default CreatePost;
