const SelectedPostReducer = (state = {}, action) => {
    console.log(action.Post)
    const { Post } = action
    switch (action.type) {
      case "SELECTED_POST":
        return Post
      case "REMOVE_SELECTED_POST":
        return {} // to empty the state of selectedPost
      default:
        return state;
    }
  };
  
  export default SelectedPostReducer