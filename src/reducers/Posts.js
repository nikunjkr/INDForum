// reducer is function which accepts a state and an action

const reducer = (Posts=[], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload ;
        default:
            return Posts;

    }
}

export default reducer;