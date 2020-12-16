const initState = {
    rooms: [
        {id: "1", title: 'Queify Playlise', users: 12, songs: 58, createdAt: '20. November'},
        {id: "2", title: 'Queify Playlise', users: 12, songs: 58, createdAt: '20. November'},
        {id: "3", title: 'Queify Playlise', users: 12, songs: 58, createdAt: '20. November'}
    ]
}

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