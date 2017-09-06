const SelectedCategoryReducer = (state = "all", action) => {
const {select} = action
  switch(action.type) {
    case "SELECTED_CATEGORY":
      return select
    default:
      return state;
  }
};

export default SelectedCategoryReducer 