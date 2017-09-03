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
//------------ChangeSort-------------------------
export const changeSort = (sortedBy) => {
    return{
    type: "CHANGE_SORT",
    sortedBy: sortedBy
    }
}

//------------AddPost-------------------------
const addPost = (post) => ({
    type: "POST_ADD",
    post
});

export const addPostAsynch = (post) => (callDispatch) => {
    console.log("BASSER GOT CALLED")
    const id = uuidv1()
    const timestamp = Date.now()

    post = {
        id,
        timestamp,
        ...post
    }
    readableAPI.addPost().then(res=> callDispatch(addPost(post))   
    )
}