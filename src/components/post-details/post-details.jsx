import { useSelector, useDispatch } from "react-redux";
import Comments from "./comments";
import React, { useEffect, useState } from "react";
import { getPost, deletePost, updatePost } from "../../redux/usersReducer";
import { withRouter } from "react-router";

import './post-details.scss';

const PostDetails = (props) => {

  let {title, body, id} = useSelector(state => state.users.userPosts);

  const [editMode, setEditMode] = useState(false);
  const [inputTitle, setInputTitle] = useState(title);
  const [textareaBody, setTextareaBody] = useState(body);

  let dispatch = useDispatch();

  useEffect(() => {
    let postId = props.match.params.postId;
    console.log(postId);
    dispatch(getPost(postId));
  }, [dispatch, props.match.params.postId]);

  const onClickDeletePost = () => {
    dispatch(deletePost(id));
    setTimeout(() => {
      props.history.push("/");
    }, 2000)
  }

  const activateEditMode = () => {
    setEditMode(true);
  }


  const onUpdatePost = (e) => {
    e.preventDefault();
    dispatch(updatePost(id, {title: inputTitle, body: textareaBody}));
    setEditMode(false);
  }


  return (
    <div className="post-details">
        {!editMode &&
          <div className="post">
            <div className="author">
              <h3>{title}</h3>
              <div className="btn__block">
                <button className="edit-btn" onClick={activateEditMode}>Edit</button>
                <button className="delete-btn" onClick={onClickDeletePost}>Delete</button>
              </div>
            </div>
            <p className="post-text">{body}</p>
          </div>  
        }
        {editMode &&
          <form onSubmit={onUpdatePost} className="post">
            <div className="author">
              <input type="text" 
                    name="title" 
                    value={inputTitle || title} 
                    className="input-form"
                    placeholder="title"
                    onChange={e => setInputTitle(e.target.value)} />
              <div className="btn__block">
                <button className="edit-btn" type="submit" >Save</button>
              </div>
            </div>
            <textarea name="editBody" 
                    value={textareaBody || body} 
                    className="textarea-form edit-textarea"
                    placeholder="text"
                    onChange={e => setTextareaBody(e.target.value)} >
            </textarea>
          </form>
        }
      <Comments/>
    </div>
  );
}

export default withRouter(PostDetails);
