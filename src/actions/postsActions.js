import * as readableAPI from '../readableAPI'
import uuidv1 from 'uuid'
//Used Thunk Middleware - the Action returns a function 

// -------receivePost---------
const receivePosts = (posts) => ({
    type: "RECEIVE_POSTS",
    posts
});

export const getPosts = () => (callDispatch) => {
    readableAPI.getPosts().then(posts => callDispatch(receivePosts(posts))    
  );
};
//------------ChangePostsSort-------------------------
export const changePostsSort = (sortedBy) => {
    return{
    type: "POSTS_SORT",
    sortedBy
    }
}

//------------SelectPost-------------------------
export const selectedPost = (Post) => {
    return {
      type: "SELECTED_POST",
      Post
    }
  }

//------------RemoveSelectPost for StateCleanUp----------------------
export const removeSelectedPost = () => {
    return {
      type: "REMOVE_SELECTED_POST"
    }
  }

//------------AddPost-------------------------
const addPost = (post) => (
{
    type: "ADD_POST",
    post
});

export const addPostAsynch = (post) => (callDispatch) => {
    const id = uuidv1()
    const timestamp = Date.now()
    
    post = {
        id,
        timestamp,
        ...post
    }
    readableAPI.addPost(post).then(res=> callDispatch(addPost(post))   
    )
}
//------------UpdatePost-------------------------
const updatePost = (post) => (
    {
        type: "UPDATE_POST",
        post
    });
    
export const updatePostAsynch = (post) => (callDispatch) => {
        const timestamp = Date.now()
        
        post = {
            timestamp,
            ...post
        }
        readableAPI.updatePost(post).then(res=> callDispatch(updatePost(post))   
        )
    }

//------------DELETE POST-------------------------
const deletePost = (postId) => (
    {
        type: "DELETE_POST",
        postId
    });
    
    export const deletePostAsynch = (postId) => (callDispatch) => {      
        readableAPI.deletePost(postId).then(res=> callDispatch(deletePost(postId))   
        )
    }

    //callDispatch(deletePost(post)