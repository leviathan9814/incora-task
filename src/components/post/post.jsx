import { Link } from 'react-router-dom';
import './post.scss';

const Post = ({title, body, id}) => {

  return (
    <div className="post">
      <div className="author">
        <h3>{title}</h3>
        <div className="btn-block">
          <Link to={`/post-details/${id}`} className="details-btn">Details</Link>
        </div>
      </div>
      <p className="post-text">
        {body}
      </p>
    </div>
  );
}

export default Post;
