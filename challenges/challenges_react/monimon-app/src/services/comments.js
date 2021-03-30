// http methods library 
import axios from "axios";

// using A X I O S lib 


// GET method
const getComments = () => axios.get("https://jsonplaceholder.typicode.com/comments");

// POST method
const postPost = (form) => axios.post('https://jsonplaceholder.typicode.com/posts', form);



export {getComments, postPost};
