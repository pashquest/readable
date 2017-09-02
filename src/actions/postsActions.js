import * as readableAPI from '../readableAPI'
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
