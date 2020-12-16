export const createProject = (queue) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
      // make async call to database
      const firestore = getFirestore();
      
      firestore.collection('Queues').add({
        ...queue,
        queues: {
          song:[],
        },
        users: {
          user: []
        },
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_ROOM', queue });
      }).catch((err) => {
        console.log(err);
        dispatch({ type: 'CREATE_ROOM_ERROR', err });
      })
      
    }
  };