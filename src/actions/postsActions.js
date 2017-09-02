import * as readableAPI from '../readableAPI'

// Used Thunk Middleware - the Action returns a function 
const receivePosts = (posts) => ({
    type: "RECEIVE_POSTS",
    posts
});

export const getPosts = () => (callDispatch) => {
    readableAPI.getPosts().then(posts => callDispatch(receivePosts(posts))
  );
};

export const changeSort = (sortedBy) => {
    console.log("Action sortedBy", sortedBy)
    return{
    type: "CHANGE_SORT",
    sortedBy: sortedBy
    }
}
