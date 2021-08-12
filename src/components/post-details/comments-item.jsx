
import './post-details.scss';

const CommentsItem = ({name, email, body}) => {
  return (
    <div className="comments__item">
        <h3>{name}</h3>
        <span>email: {email}</span>
        <p>
            {body}
        </p>
    </div>
  );
}

export default CommentsItem;
