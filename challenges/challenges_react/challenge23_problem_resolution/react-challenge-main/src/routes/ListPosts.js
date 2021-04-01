import { useEffect, useState } from "react";
import { toast } from "react-toastify";


import { getPostsList, deletePost, putPost } from "../services/posts";

import "../styles/style.css";

const ListPosts = () => {


  const [post, setPosts] = useState([]);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedPost, setSelectedPost] = useState([]);


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

  // function that calls PUT method
  const handleEdit = async (data) => {
    try {

      // getting the texArea value from the modal
      const textArea = document.getElementById("myTextarea").value;
      
      // updanting the body to send the PUT request
      data = { ...data, body : textArea};
      
      await putPost(data);

      // OBS: although the PUT from the API doesnt update the post title, it
      // is important to me that give this option to the user.
      
      toast.success("Post atualizado com sucesso!!");
    } catch {
      toast.error("Ooops!! Houve um problema ao atualizar o post.");
    } finally {
      setOpenEdit(false);
    }
  };


  // checks if the modal to delete the card is actived
  const handleOpenModalDelete = (item) => {
    setSelectedPost(item); // the post to delete
    setOpenDelete(true); // display delete modal
  };

  // checks if the modal to edit the card is actived
  const handleOpenModalEdit = (item) => {
    setSelectedPost(item); // the post to edit
    setOpenEdit(true); // display edit modal
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
              <button  onClick={() => handleOpenModalEdit(post)} 
              className="info">Editar Post</button>
              <button
                className="error"
                onClick={() => handleOpenModalDelete(post)}
              >
                Excluir Post
              </button>
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
            <button
              className="error"
              onClick={() => handleDelete(selectedPost.id)}
            >
              Excluir
            </button>
            <button className="cancel" onClick={() => setOpenDelete(false)}>cancelar</button>
          </div>
        </div>
      )}

    {/*MODAL TO EDIT POST*/}
      {openEdit && (
        <div className="modal">
          <p className="modalTitle">Título da postagem</p><br/>
          <div>
            <textarea name="title" defaultValue={selectedPost.title} rows="6" cols="50"/><br/>
            <br/><p className="modalTitle" >Descrição da postagem</p><br/>
            <textarea id="myTextarea"  name= "body" defaultValue={selectedPost.body}  rows="6" cols="50"/> 
          </div>
          <div className="m-top-25">
            <button
              className="error"
              onClick={() => handleEdit(selectedPost)}
            >
              Confirmar
            </button>
            <button className="cancel" onClick={() => setOpenEdit(false)}>cancelar</button>
          </div>
        </div>
      )}
    </div>

  );
};



export default ListPosts;
