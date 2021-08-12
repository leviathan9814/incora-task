import {taskAPI} from "../api/api";

const SET_USERS = "SET_USERS";
const SET_USER_POSTS = "SET_USER_POSTS";
const ADD_POST = "ADD_POST";
const SET_COMMENTS = "SET_COMMENTS";

let initialState = {
    users: [],
    userPosts: [],
    comments: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_USER_POSTS:
            return {
                ...state,
                userPosts: action.userPosts
            }
        case ADD_POST: {
            return {
                ...state,
                userPosts: [...state.userPosts, action.payload]
            };
        }
        case SET_COMMENTS:
            return {
                ...state,
                comments: action.comments
            }
        default:
            return state;
    }
}

const setUsers = (users) => ({type: SET_USERS, users});

const setUserPosts = (userPosts) => ({type: SET_USER_POSTS, userPosts});

const addPost = (data) => ({type: ADD_POST, payload: data});

const setComments = (comments) => ({type: SET_COMMENTS, comments});

export const getUsers = () => (dispatch) => {
    taskAPI.getUsers()
        .then(response => {
            const user = response.data;
            dispatch(setUsers(user));
        })
};

export const getUserPosts = (userId) => (dispatch) => {
    taskAPI.getUserPosts(userId)
        .then(response => {
            const userPosts = response.data;
            dispatch(setUserPosts(userPosts));
        });
}

export const addNewPost = (newPost) => (dispatch) => {
    taskAPI.addPost(newPost)
        .then((response) => {
            console.log(response);
            dispatch(addPost(response.data));
        })

};


export const getPost = (postId) => (dispatch) => {
    taskAPI.getPost(postId)
        .then((response) => {
            console.log(response);
            dispatch(setUserPosts(response.data));
        })
};

export const getComments = (postId) => (dispatch) => {
    taskAPI.getComments(postId)
        .then(response => {
            const comments = response.data;
            dispatch(setComments(comments))
        })
};

export const deletePost = (postId) => (dispatch) => {
    taskAPI.deletePost(postId)
        .then((response) => {
            console.log(response);
            dispatch(setUserPosts([]));
        })
};

export const updatePost = (postId, post) => (dispatch) => {
    taskAPI.updatePost(postId, post)
        .then((response) => {
            console.log(response);
            dispatch(setUserPosts(post));
        })
};

export default usersReducer;