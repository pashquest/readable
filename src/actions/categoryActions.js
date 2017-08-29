import * as readableAPI from '../readableAPI'

const receiveCategories = (categories) => ({
    type: "RECEIVE_CATEGORIES",
    categories
});

export const getCategories = () => (dispatch) => {
    console.log("Action Dispatch"),
    readableAPI.getCategories().then(
    (categories) => dispatch(receiveCategories(categories))
  );
};

