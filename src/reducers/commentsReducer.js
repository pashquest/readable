const CommentsReducer = (state=[], action) => {
    switch(action.type) {
      case "GET_POST_COMMENTS":
        return action.postComments
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
  
  export default CommentsReducer