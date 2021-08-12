import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    withCredentials: true
});

export const taskAPI = {
    getUsers () {
        return instance.get(`users/`);
    },

    getUserPosts(userId) {
        return instance.get(`posts?userId=${userId}`);
    },

    addPost (post) {
        return instance.post(`posts`, post);
    },

    getPost (postId) {
        return instance.get(`posts/${postId}`);
    },

    getComments(postId) {
        return instance.get(`/comments?postId=${postId}`);
    },

    updatePost (postId, post) {
        return instance.put(`posts/${postId}`, post);
    },

    deletePost (postId) {
        return instance.delete(`posts/${postId}`);
    }
}