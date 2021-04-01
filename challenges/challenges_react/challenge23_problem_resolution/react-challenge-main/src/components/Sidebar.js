import { Link } from "react-router-dom";

const Sidebar = () => (
  <div>
    <ul>
      
        <Link className= "sideBarLinks" to="/create">Create new post</Link>

        <br/>
      
        <Link className= "sideBarLinks" to="/">List posts</Link>
      
    </ul>
  </div>
);

export default Sidebar;
