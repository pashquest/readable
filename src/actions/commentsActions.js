import * as readableAPI from '../readableAPI'
import uuidv1 from 'uuid'
//Used Thunk Middleware - the Action returns a function 

// -------Get Post Comments---------
const receivePostComments = (postComments) => ({
    type: "GET_POST_COMMENTS",
    postComments
});

export const getPostComments = (PostId) => (callDispatch) => {
    readableAPI.getPostComments(PostId).then(postComments => callDispatch(receivePostComments(postComments))    
  );
};

//------------ChangeCommentsSort-------------------------
export const changeCommentsSort = (sortedBy) => {
    return{
    type: "COMMENTS_SORT",
    sortedBy
    }
}

//------------AddComment-------------------------
const addComment = (comment) => (
    {
        type: "ADD_COMMENT",
        comment
    });
    
    export const addCommentAsynch = (comment, parentId) => (callDispatch) => {
        const id = uuidv1()
        const timestamp = Date.now()
        
        comment = {
            id,
            timestamp,
            parentId,
            ...comment
        }
        readableAPI.addComment(comment).then(res=> callDispatch(addComment(comment))   
        )
    }