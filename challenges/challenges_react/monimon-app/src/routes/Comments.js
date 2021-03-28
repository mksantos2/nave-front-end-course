// Route to print Comments


import React, { useState, useRef, useEffect } from "react";


// importing my modules
import Button from "../components/Button";
import Comment from "../components/Comment";

// importing GET service with axios
import getComments from "../services/comments";


const Comments = () => {

	// variable that contain the array returned from the GET method Promise
	// using UseState is for the access of the const 'comment' on the JSX
	const [comment, setComment] = useState([]);

	// async fucntion to get comments from API with GET method
	const fetchComments = async () => {
		try {
			// trying to get array 'comments' from Promise
			const {data : comments} = await getComments();
			// updating the value from API
			setComment(comments);

		} catch (error) {
			// in case if the GET failed
			console.log("Não foi possível retornar os dados da API ;-; ");	
		}			
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
			<Button text = "Atualiza" handleClick={fetchComments}/>
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
