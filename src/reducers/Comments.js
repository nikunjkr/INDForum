const reducer = (Comments=[], action) => {
    switch(action.type) {
        case 'GET_COMMENTS':
            return action.payload ;
        case 'CREATE':
            return [...Comments, action.payload] ;
        default:
            return Comments;

    }
}

export default reducer;