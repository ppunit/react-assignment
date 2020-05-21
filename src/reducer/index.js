const initialState={
    list:{},
    comments:{}
   
}

export default function user(state = initialState, action) {
    switch (action.type) {
        case "LIST":return{...state,list:action.target};
        case "COMMENTS":return{...state,comments:action.target}
        

        default:
            return state;
    }
}