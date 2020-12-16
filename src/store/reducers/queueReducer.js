const initState = {
    queues: [
        {id: "1", author: 'LOL', title: 'Take Over', image: '/images/takingover.jpg'},
        {id: "2", author: 'Lukas Gråskinke', title: 'Strip No More', image: '/images/Strip_No_More.jpg'},
        {id: "3", author: 'Volbeat', title: 'Lomesome Rider', image: '/images/volbeat.jpg'},
        {id: "4", author: 'Volbeat', title: 'For Evigt', image: '/images/volbeat.jpg'},
        {id: "5", author: 'Fall out Boys', title: 'Immortals', image: '/images/immortals.jpg'}
    ]
}

const queueReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_QUEUE':
            console.log('created queue', action.queue);
            return state;
        case 'CREATE_QUEUE_ERROR':
            console.log('create project error', action.err);
            return state
        default:
            return state
    }
    
}

export default queueReducer