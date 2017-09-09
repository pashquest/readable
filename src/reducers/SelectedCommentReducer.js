const SelectedCommentReducer = (state = {}, action) => {
    console.log(action.Post)
    const { comment } = action
    switch (action.type) {
      case "SELECTED_COMMENT":
        return comment
      case "REMOVE_SELECTED_COMMENT":
        return {} // to empty the state of selectedComment
      default:
        return state;
    }
  };
  
  export default SelectedCommentReducer