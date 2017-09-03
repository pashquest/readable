import * as readableAPI from '../readableAPI'

// Used Thunk Middleware - the Action returns a function 
const receiveCategories = (categories) => ({
    type: "RECEIVE_CATEGORIES",
    categories
});

export const getCategories = () => (callDispatch) => {
    readableAPI.getCategories().then(categories => callDispatch(receiveCategories(categories))
  );
};

