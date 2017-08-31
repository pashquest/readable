const postsReducer = (state={}, action) => {
    const { posts } = action; //using Destructuring
    switch(action.type) {
      case "RECEIVE_POSTS":
        return {
          ...state,
          posts
        };
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