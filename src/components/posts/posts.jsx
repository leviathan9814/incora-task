import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from '../post/post';
import { getUserPosts } from "../../redux/usersReducer";
import { Link, withRouter } from "react-router-dom";
import Modal from "react-modal";
import PostForm from "../new-post-form/new-post-form";

import './posts.scss';

Modal.setAppElement("#root");

const Posts = React.memo((props) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  let userPosts = useSelector(state => state.users.userPosts);

  let dispatch = useDispatch();

  useEffect(() => {
    let itemId = props.match.params.itemId;
    console.log(itemId);
    dispatch(getUserPosts(itemId));
  }, [dispatch, props.match.params.itemId]);

  console.log(userPosts);

  return (
    <div className="posts">
      <div className="user-post">
        <h3>All User Posts</h3>
        <button type="button" className="add-post-btn" onClick={() => setModalIsOpen(true)}>Add New Post</button>
      </div>
      {
        userPosts.map(posts => <Post key={posts.id} 
                                    id={posts.id} 
                                    userId={posts.userId} 
                                    title={posts.title} 
                                    body={posts.body}/>)
      }
      <Modal isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className="modal"
          preventScroll={true}
          overlayClassName="overlay">
          <div className="modal-title">
              <h2>New post</h2>
              <span onClick={() => setModalIsOpen(false)}>&#10006;</span>
          </div>
          <PostForm closeModal={setModalIsOpen}/>
      </Modal>
    </div>
  );
});

export default withRouter(Posts);
