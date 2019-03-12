const postReducer = (State = [], action ) =>{
    switch(action.type){
        case 'ADD_POST':
            return State.concat([action.data]);
        case 'DELETE_POST':
            return State.filter((post)=>post.id !== action.id);
        default:
            return State;
    }
}

export default postReducer