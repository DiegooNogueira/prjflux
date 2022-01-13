const EEEE={
    data: [
        'React Native',
        'ReactJS'
    ],
}

export default function languages(state = EEEE, action){
    switch (action.type){
        case 'ADD_LANGUAGE': 
            return { ...state, data: [... state.data, action.title]};
        default:
            return state;
        }
}
