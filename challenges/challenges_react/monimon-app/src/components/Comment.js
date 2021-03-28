// Comment module


// where the comments (one by one) are printed on the page
const Comment = ({name, email, body}) => {

	return (
		<div>
		<h3> Nome do comentário: {name} </h3>
		<h4> Usuário : {email} </h4>
		<p> Body do comentário: {body} </p>
		</div>);

};


export default Comment;