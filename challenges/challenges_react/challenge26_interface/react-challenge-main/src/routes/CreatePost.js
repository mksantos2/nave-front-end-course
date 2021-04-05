import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import Form from "../components/Form";
import { createPost } from "../services/posts";

import {ContainerCreate} from "../styles/formStyles";
import "../styles/style.css";

const CreatePost = () => {

  // to navigate pages
  const history = useHistory();

  // function to request POST method to create new post
  const fetchPost = async (form) => {
    try {
      await createPost(form);
      toast.success("Post criado com sucesso!!");
      history.push("/list");
    } catch {
      toast.error("Oops!! Houve um problema com a criação do post");
    }
  };

  const onSubmit = (data) => {
    // setting the userId as the user number 1 to test the page
    data = { ...data, userId : 1};
    fetchPost(data);
  }

  return (
    <ContainerCreate>
      <h1 className="titleCreatePost">Criar uma nova publicação</h1>
      <Form onSubmit = {onSubmit}/>
    </ContainerCreate>
  );
};

export default CreatePost;
