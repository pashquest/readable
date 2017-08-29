const categoryReducer = (state=[], action) => {
  const { categories } = action; //using Destructuring
  switch(action.type) {
    case "RECEIVE_CATEGORIES":
      return {
        ...state,
        categories
      };
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