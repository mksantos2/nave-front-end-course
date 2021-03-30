// Route to print Comments


import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {toast} from "react-toastify";


// importing my modules
import Button from "../components/Button";
import Comment from "../components/Comment";

// importing GET service with axios
import {getComments} from "../services/comments";

const Comments = () => {

	// variable that contain the array returned from the GET method Promise
	// using UseState is for the access of the const 'comment' on the JSX
	const [comment, setComment] = useState([]);

	// original state comments, so we can't lose their value
	const [originalComments, setOriginalComments] = useState([]);


	// declaration of useForm variables and functions 
	const { register, handleSubmit, errors, setValue } = useForm();

	// filtering the comments based on the user text input
	const onSubmit = data => {
		const filteredComments = originalComments.filter((comment) =>{
			//searching if the input is a sub-string on the comment
			return comment.name.includes(data.searchComment);
		})

		// updating the filtered comments and showing it to the user
		setComment(filteredComments);
	};	

	

	// async fucntion to get comments from API with GET method
	const fetchComments = async () => {
		try {
			// trying to get array 'comments' from Promise
			const {data : comments} = await getComments();
			// updating the value from API
			setComment(comments);

			// get the original comments to save the initial state
			setOriginalComments(comments);

		} catch (error) {
			// in case if the GET failed

			toast.error("Problema com a API, tente novamente mais tarde!", {
				position: "top-center"});
		}			
	}

	// refreshing the comments list
	const refreshCommentList = () => {
		setValue("searchComment", "");
		fetchComments();
	}





	// to update the comments every time the component is rendered
	useEffect( () => {
		// get comments
		fetchComments();
	},[]);



	

	return (
		<div> 

			<h1> Comments </h1> 
			{/* creating a button to update the comments every time its clicked*/}
			<Button text = "Atualiza" handleClick={refreshCommentList}/>


			<form onSubmit={handleSubmit(onSubmit)}>
		    {/* register your input into the hook by invoking the "register" function */}
		      <input name="searchComment" defaultValue="" ref={register} />
		     
		      {/* errors will return when field validation fails  */}
		      {errors.exampleRequired && <span>This field is required</span>}
		      
		      <input type="submit" value="Envia		" />
		    </form>




			{/* traversing the array to get the props from the comments*/}
			{comment.map((commentProps) => {
			{/* passing the props to a component "Comment" that is going to list on the html*/}
			{/* passing id as key because of react references*/}
				return (<Comment key = {commentProps.id} name={commentProps.name} email={commentProps.email} body={commentProps.body} /> );
			})}

		</div>
		

	);
};

export default Comments;
