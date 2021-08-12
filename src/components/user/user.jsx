import {Link} from "react-router-dom";
import './user.scss';

const User = ({id, name, email}) => {
  
  return (
    <div className="user">
      <img src="https://via.placeholder.com/300" alt="user" className="user-img"/>
      <h3>{name}</h3>
      <p>email: {email}</p>
      <Link to={`/posts/${id}`} className="btn-user">Posts</Link>
    </div>
  );
}

export default User;
