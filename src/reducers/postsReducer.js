const postsReducer = (state={}, action) => {
    const { posts, post } = action; //using Destructuring
    console.log("BASSER POST",post)
    console.log("BASSER ACTION",action)
    console.log("BASSER STATE",state)
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
        case "ADD_POST":
        return {
          ...state,
          post
          }
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