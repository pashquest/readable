import * as readableAPI from '../readableAPI'
import uuidv1 from 'uuid'
//Used Thunk Middleware - the Action returns a function 

// -------receivePost---------
const receivePosts = (posts) => ({
    type: "RECEIVE_POSTS",
    posts
});

export const getPosts = () => (callDispatch) => {
    readableAPI.getPosts().then(posts => callDispatch(receivePosts(posts),
    console.log("BASSER ALLE POSTS",posts))
    
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
const addPost = (post) => (
console.log("ACTION BASSER addPOst",post),
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
  //  console.log("BASSERPOST-DANACH",post)
    readableAPI.addPost(post).then(res=> callDispatch(addPost(post))   
    )
}