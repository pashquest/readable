export const getCategories = (categories) => 
{
    console.log("ALL Categories in Action")
    return {
        type: 'GET_CATEGORIES',
        payload: categories
    }
};


