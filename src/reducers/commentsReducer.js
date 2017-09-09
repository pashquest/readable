const CommentsReducer = (state=[], action) => {
    switch(action.type) {
      case "GET_POST_COMMENTS":
        return action.postComments
      case "ADD_COMMENT":
        return [...state, action.comment]
      case "UPDATE_COMMENT":
        return [...state]
      case "DELETE_COMMENT":
        return [...state]
      default:
        return state;
    }
  };
  
  export default CommentsReducer