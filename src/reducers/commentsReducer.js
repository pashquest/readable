const CommentsReducer = (state=[], action) => {

const {res} = action
    switch(action.type) {
      case "GET_POST_COMMENTS":
        return action.postComments
      case "ADD_COMMENT":
        return [...state, action.comment]
      case "UPDATE_COMMENT":
        return [...state]
      case "DELETE_COMMENT":
        return state.filter(comment => (comment.id !== action.commentId)) //Filter die COmments raus die nicht gleich dem gelöschten sind
      case "VOTE_COMMENT":
        return state.map(comment => (comment.id === res.id) ? action.res : comment) //wenn gleich Id, dann ersetze sie in meinem Array mit action.res 
      default:
        return state;
    }
  };
  
  export default CommentsReducer