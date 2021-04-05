
import Form from "../components/Form";

import { useHistory, useLocation } from "react-router-dom";

import { toast } from "react-toastify";


import { putPost } from "../services/posts";

const EditPost = () => {

	// getting the page parameters location 
	const location = useLocation();

	// getting the location state of the post to update
	const before =  location.state.post;

	const history = useHistory();
	

	const onSubmit = (data) => {

		const postUpdated = { ...before, body : data.body, title: data.title};

    	handleEdit(postUpdated);
  	}

  	// function that calls PUT method
	const handleEdit = async (data) => {
		try {
		  
		  // send the PUT request 
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
