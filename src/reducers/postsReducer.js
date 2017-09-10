const postsReducer = (state=[], action) => {
const {res} = action
    switch(action.type) { 
      case "RECEIVE_POSTS":
        return action.posts
      case "ADD_POST":
        return [...state, action.post]
        case "UPDATE_POST":
        return [...state]
      case "DELETE_POST":
        return state.filter(post => (post.id !== action.postId)) //Filter die COmments raus die nicht gleich dem gelöschten sind
      case "VOTE_POST":
        return state.map(post => (post.id === res.id) ? action.res : post) 
      default:
        return state;
    }
  };
  
  export default postsReducer;