// Form page to create a new post 

// user notification lib
import {toast} from "react-toastify";

// importing post axios service
import {postComments} from "../services/comments";

// importing my module form to create new post
import FormPost from "../components/FormPost";

const CreatePost = () => {


	// funtion to send posts for API through POST method 
	const fecthPosts = async (form) => { 
		try{
			// sending the request with Promise
			const {data : post} = await postComments(form);

			// notify the user
			toast.success("Post criado com sucesso!", {
				position: "top-center"});

			console.log("POST : ", post);

		} catch (error){
			// in case if the GET failed

			// notify the user
			toast.error("Problema com a API, tente novamente mais tarde!", {
				position: "top-center"});
				
		}
	};


	const onSubmit = data => {
		
		fecthPosts(data);

	};
	
	/* sending the onSubmit func as FormPost's prop*/
	return (

		<FormPost onSubmit ={onSubmit} />

	);
};

export default CreatePost;