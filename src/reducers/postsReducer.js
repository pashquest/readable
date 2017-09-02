const postsReducer = (state={}, action) => {
    const { posts } = action; //using Destructuring
    switch(action.type) {
      case "RECEIVE_POSTS":
        return {
          ...state,
          posts
        };
      case "CHANGE_SORT":
        return {
          ...state,
          sortedBy: action.sortedBy
        }; 
        /*
        case SELECT_CATEGORY:
        return {
          ...state,
          selectedCategory
        }; 
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