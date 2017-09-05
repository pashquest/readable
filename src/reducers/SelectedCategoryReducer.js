const SelectedCategoryReducer = (state = "all", action) => {
  switch(action.type) {
    case "SELECTED_CATEGORY":
      return action.selectedCategory
    default:
      return state;
  }
};

export default SelectedCategoryReducer