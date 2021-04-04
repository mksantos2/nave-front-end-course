import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import Form from "../components/Form";

import { useLocation } from 'react-router-dom';

import { createPost } from "../services/posts";


import {ContainerCreate} from "../styles/formStyles";

import "../styles/style.css";

const CreatePost = () => {
  const history = useHistory();

  const location = useLocation();

  // getting the location of the page
  //console.log("location: ", location.pathname);

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

  // wrapper to casting the userId to number then send the request
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
