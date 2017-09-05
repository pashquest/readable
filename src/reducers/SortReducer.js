const SortReducer = (state = "voteScore", action) => {
  switch(action.type) {
    case "CHANGE_SORT":
      return action.sortedBy
    default:
      return state;
  }
};

export default SortReducer;