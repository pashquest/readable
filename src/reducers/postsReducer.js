const postsReducer = (state=[], action) => {
    switch(action.type) { 
      case "RECEIVE_POSTS":
        return action.posts
      case "ADD_POST":
        return [...state, action.post]
        /*
        case SELECT_CATEGORY:
        return {
          ...state,
          selectedCategory
        }; */
      default:
        return state;
    }
  };
  
  export default postsReducer;