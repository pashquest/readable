const SortReducer = (state = {postSort: "voteScore", commentsSort: "voteScore"}, action) => {
  switch(action.type) {
    case "POSTS_SORT":
      return {
        ...state,
        postSort: action.sortedBy
      }
      case "COMMENTS_SORT":
      return {
        ...state,
        commentsSort: action.sortedBy
      }
    default:
      return state;
  }
};

export default SortReducer;