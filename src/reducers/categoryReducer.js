const categoryReducer = (state=[], action) => {
  switch(action.type) {
    case "RECEIVE_CATEGORIES":
      return action.categories
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

export default categoryReducer;