const INITIAL_STATE={
    info: [
        'React Native',
        'ReactJS',
        'Flutters'
    ],
}

export default function schools(state = INITIAL_STATE, action){
    switch (action.type){
        case 'ADD_SCHOOL': 
            return { ...state, info: [... state.info, action.title]};
        default:
            return state;
        }
}
