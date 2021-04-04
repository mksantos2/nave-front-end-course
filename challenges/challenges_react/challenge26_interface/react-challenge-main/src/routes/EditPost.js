
import Form from "../components/Form";

import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";

import { toast } from "react-toastify";


import { getPostsList, deletePost, putPost } from "../services/posts";

const EditPost = () => {

	
	const location = useLocation();
	//const [formUpdate, setFormUpdate] = useState(location.state.post);


	// getting the location state of the post to update
	const antes =  location.state.post;

	const history = useHistory();
	

	const onSubmit = (data) => {

		const novo = { ...antes, body : data.body, title: data.title};

    	handleEdit(novo);

    	// console.log("antes: ", antes);
    	// console.log("novo: ", novo);
  	}

  	// function that calls PUT method
	const handleEdit = async (data) => {
		try {
		  
		  // // updanting the body to send the PUT request
		  
		  
		  await putPost(data);

		  
		  toast.success("Post atualizado com sucesso!!");
		  history.push("/list");
		} catch {
		  toast.error("Ooops!! Houve um problema ao atualizar o post.");
		} 
	};


	
	return (
		<div className="container">
	      	
	      	<h1 className="titleCreatePost">Editar uma publicação</h1>
	      	<Form onSubmit = {onSubmit}/>
    	
    	</div>

	);
};


export default EditPost;
