import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { getPostsList, deletePost } from "../services/posts";

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { EditButton, DeleteButton, NeutralButton } from "../styles/formStyles";
import "../styles/style.css";

const ListPosts = () => {

  // -------- MATERIAL UI --------

  // -- to change button color --

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  // -----------------------------

  const [post, setPosts] = useState([]);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedPost, setSelectedPost] = useState([]);

  const history = useHistory();

  // function that calls DELETE method 
  const handleDelete = async (id) => {
    try {
      await deletePost(id);
      toast.success("Post deletado com sucesso!!");
    } catch {
      toast.error("Ooops!! Houve um problema ao deletar o post.");
    } finally {
      setOpenDelete(false);
    }
  };


  // checks if the modal to delete the card is actived
  const handleOpenModalDelete = (post) => {
    setSelectedPost(post); // the post to delete
    setOpenDelete(true); // display delete modal
  };

  // when edit button is pressed then sends the selected post through history hook
  const handleOpenModalEdit = (post) => {
    history.push( {
      pathname: '/edit',
      search: '?update=true',  // query string
      state:  { post }
    }); 
  };

  // get the posts from API
  const handleGetPosts = async () => {
      const response = await getPostsList();
      setPosts(response.data);
      toast.success("Listagem de posts foi carregada com sucesso!!");
  };

  // initial render the posts 
  useEffect(() => {
    handleGetPosts();
  }, []);


  return (
    <div>
    
      {/*SIDEBAR LINKS MENU*/}

      <div>
        
        <ul>

          <Link className= "sideBarLinks" to="/">Home</Link>
          
          <br/>

          <Link className= "sideBarLinks" to="/create">Criar novo Post</Link>

        </ul>

      </div>

      {/*CARDS LIST FROM API*/}

        <div className="card">
         {/*picking posts one by one and displaying in html cards*/}
          {post.map((post) => (
            <div className="card-item" key={post.id}>
              <div>
                <p className="title">{post.title}</p>
                <p className="text">{post.body}</p>
              </div>
              <div>

              <Box display="flex" justifycontent="center" m={1} p={1}  width="auto" >
              
                <Box display="flex" justifycontent="flex-start" m={0} pt={1} pl={2} >
                    
                    <EditButton variant="contained" onClick={() => handleOpenModalEdit(post)} color="primary" className={classes.margin}>
                      Editar Post
                    </EditButton>
                </Box>

                <Box display="flex" justifycontent="flex-end" m={0} pt={1} pl={2} > 

                  <DeleteButton variant="contained" onClick={() => handleOpenModalDelete(post)} color="primary" className={classes.margin}>
                    Excluir Post
                  </DeleteButton>

                </Box>

              </Box>  
                
            </div>
          </div>
          ))}
        </div>

      {/*MODAL TO DELETE POST*/}
        {openDelete && (
          <div className="modal">
            <p>Realmente deseja excluir essa postagem?</p><br/>
            <div>
              <p>{selectedPost.title}</p>
              <p>{selectedPost.body}</p>
            </div>
            <div className="m-top-25">
            
            <Box display="flex" justifycontent="center" m={1} p={1}  width="auto" >
              
              <Box width={200} display="flex" justifycontent="flex-start" m={0} p={1} pl={4} >
                <DeleteButton variant="contained"
                  className="error"
                  onClick={() => handleDelete(selectedPost.id)}>
                  
                  Excluir
                
                </DeleteButton>
              </Box>  
              
              <Box display="flex" justifycontent="flex-end" m={0} p={1} pl={5} >  
                
                <NeutralButton variant="contained" onClick={() => setOpenDelete(false)}>Cancelar</NeutralButton>
              
              </Box>  

            </Box>
          </div>
        </div>
        )}

  
    </div>

  );
};



export default ListPosts;
