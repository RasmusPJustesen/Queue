const initState = {}

const roomsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_ROOM':
            console.log('created queue', action.queue);
            return state;
        case 'CREATE_ROOM_ERROR':
            console.log('create room error', action.err);
            return state
        default:
            return state
    }
    
}

export default roomsReducer