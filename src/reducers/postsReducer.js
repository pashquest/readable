const postsReducer = (state=[], action) => {
    switch(action.type) { 
      case "RECEIVE_POSTS":
        return action.posts
      case "ADD_POST":
        return [...state, action.post]
        case "UPDATE_POST":
        return [...state]
      case "DELETE_POST":
        return [...state]
      default:
        return state;
    }
  };
  
  export default postsReducer;