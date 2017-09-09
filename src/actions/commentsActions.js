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
//------------Update COMMENT-------------------------
const updateComment = (comment) => (
    {
        type: "UPDATE_COMMENT",
        comment
    });
    
export const updateCommentAsynch = (comment) => (callDispatch) => {
        const timestamp = Date.now()
        
        comment = {
            timestamp,
            ...comment
        }
        console.log("BASSER COMMENT API",comment)
        readableAPI.updateComment(comment).then(res=> callDispatch(updateComment(comment))   
        )
    }

//------------DELETE COMMENT-------------------------
const deleteComment = (commentId) => (
    {
        type: "DELETE_COMMENT",
        commentId
    });
    
    export const deleteCommentAsynch = (commentId) => (callDispatch) => {      
        readableAPI.deleteComment(commentId).then(res=> callDispatch(deleteComment(commentId))   
        )
    }

//------------Select Comment-------------------------
export const selectedComment = (comment) => {
    return {
      type: "SELECTED_COMMENT",
      comment
    }
  }

//------------RemoveSelectComment for StateCleanUp----------------------
export const removeSelectedComment = () => {
    return {
      type: "REMOVE_SELECTED_COMMENT"
    }
  }
//------------Vote COmment---------
const voteComment = (res) => (
    {
        type: "VOTE_COMMENT",
        res
    });
    
    export const voteCommentAsynch = (commentId, voteValue) => (callDispatch) => {      
        readableAPI.voteComment(commentId, voteValue).then(res => callDispatch(voteComment(res))   
        )
    }