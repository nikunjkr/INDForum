const reducer = (Comments=[], action) => {
    switch(action.type) {
        case 'GET_POST_COMMENTS':
            return action.payload ;
        case 'CREATE':
            return [...Comments, action.payload] ;
        case 'UPVOTE_COMMENT':
            return action.payload ;
        case 'DOWNVOTE_COMMENT':
            return action.payload ;
        default:
            return Comments;

    }
}

export default reducer;