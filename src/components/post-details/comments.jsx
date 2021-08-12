import CommentsItem from "./comments-item";
import './post-details.scss';
import { useSelector, useDispatch } from "react-redux";
import { getComments } from "../../redux/usersReducer";
import { useEffect } from "react";
import { withRouter } from "react-router";

const Comments = (props) => {

    let {comments} = useSelector(state => state.users);

    let dispatch = useDispatch();

    useEffect(() => {
      let postId = props.match.params.postId;
      console.log(postId);
      dispatch(getComments(postId));
    }, [dispatch, props.match.params.postId]);
    
    return (
        <div className="comments">
            {
                comments.map(comment => <CommentsItem key={comment.id} 
                                                    name={comment.name}
                                                    email={comment.email}
                                                    body={comment.body} />)
            }
        </div>
    );
}

export default withRouter(Comments);
