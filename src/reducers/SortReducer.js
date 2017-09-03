const SortReducer = (state = "voteScore", action) => {
  switch(action.type) {
    case "CHANGE_SORT":
      return action.sortedBy
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

export default SortReducer;