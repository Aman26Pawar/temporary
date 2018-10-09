const loginReducer = (state = [] , action) => {
    switch(action.type){
        case 'ADD_LOGIN':
            return state.concat([action.loggedInData]);
        case 'LOGOUT':
            return state.splice(1,1);
        default:
         return state;
    }

}

export default loginReducer