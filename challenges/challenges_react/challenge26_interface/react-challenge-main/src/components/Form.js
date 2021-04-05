import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLocation } from 'react-router-dom';


import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import "../styles/style.css";

import {Label, ContainerCreate, ContainerInput} from "../styles/formStyles";

const Form = ({ onSubmit}) => {
  
  const { register, handleSubmit } = useForm();
  
  // get the page location information 
  const location = useLocation();


  return (
    <ContainerCreate>
    
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <Label> Título </Label>
        <ContainerInput ref={register} name="title"  defaultValue = {location.pathname === "/create" ? "" : location.state.post.title }/>
        
        <Label> Descrição </Label>
        <ContainerInput ref={register} name= "body"  defaultValue = {location.pathname === "/create" ? "" : location.state.post.body }/> 
        
        <div className="m-top-25">
          
          <Box display="flex" justifycontent="center" m={1} p={1}  width="auto" >
              
            <Box width={200} display="flex" justifycontent="flex-start" m={0} p={1} pl={4} >
                 
                  <Button  style={{maxWidth: 'auto', maxHeight: 'auto', minWidth: '110px', minHeight: 'auto'}} display="flex" justifycontent="center" type="submit" variant="contained" color="primary" className="info">
                    {location.pathname === "/create" ? "Criar" : "Editar"}
                  </Button>
            
             </Box>
            <Box display="flex" justifycontent="flex-end" m={0} p={1} pl={5} >          
               
                <Link to="/list">
                  
                  <Button display="flex" justifycontent="center" variant="contained" color="default" type="button" className="cancel">
                    Cancelar
                  </Button>

                  </Link>
            </Box>      
          </Box>
        </div>
      </form>
    </ContainerCreate>
  );
};

export default Form;
