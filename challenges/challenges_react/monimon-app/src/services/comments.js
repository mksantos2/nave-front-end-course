// http methods library 
import axios from "axios";

const getComments = () => axios.get("https://jsonplaceholder.typicode.com/comments");


export default getComments;