import * as readableAPI from '../readableAPI'

// Used Thunk Middleware - the Action returns a function 
const receivePosts = (posts) => ({
    type: "RECEIVE_POSTS",
    posts
});

export const getPosts = () => (callDispatch) => {
    console.log("Action getPosts"),
    readableAPI.getPosts().then(posts => callDispatch(receivePosts(posts))
  );
};

