const SelectedPostReducer = (state = {}, action) => {
    console.log(action.Post)
    const { Post } = action
    switch (action.type) {
      case "SELECTED_POST":
        return Post
      default:
        return state;
    }
  };
  
  export default SelectedPostReducer