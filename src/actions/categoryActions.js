import * as readableAPI from '../readableAPI'

const receiveCategories = (categories) => ({
    type: "RECEIVE_CATEGORIES",
    categories
});

export const getCategories = () => (dispatch) => {
    readableAPI.getCategories().then(
    (categories) => dispatch(receiveCategories(categories))
  );
};

