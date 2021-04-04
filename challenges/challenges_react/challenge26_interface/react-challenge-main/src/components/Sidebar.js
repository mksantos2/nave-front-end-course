import { Link } from "react-router-dom";

const Sidebar = () => (
  <div>
    <ul>
      	
        <Link className= "sideBarLinks" to="/create">Criar novo Post</Link>

        <br/>
      
        <Link className= "sideBarLinks" to="/list">Listar Posts</Link>
      
    </ul>
  </div>
);

export default Sidebar;
