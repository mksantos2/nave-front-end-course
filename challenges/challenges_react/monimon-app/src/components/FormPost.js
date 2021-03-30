// component PostForm -> to create a new post


import { useForm } from "react-hook-form";




const FormPost = ({onSubmit}) => {

	// declaration of useForm variables and functions
	const { register, handleSubmit, errors } = useForm();

	return (

		<form onSubmit={handleSubmit(onSubmit)}>
		    {/* register your input into the hook by invoking the "register" function */}
		      
		      <label>Id do Usuário: </label>
		      <input name="userId"  type = "number" defaultValue="" ref={register} />

		      <br/>
		      <label>Título do post: </label>
		      <input name="title"  type= "string" defaultValue="" ref={register}  />

		      <br/>
		      <label>Body do post: </label>
		      <input name="body"  type= "string" defaultValue="" ref={register} />
		     
		      <br/>
		      {/* errors will return when field validation fails  */}
		      {errors.exampleRequired && <span>This field is required</span>}
		      
		      <input type="submit" value="Envia" />
		    </form>


	);
};


export default FormPost;