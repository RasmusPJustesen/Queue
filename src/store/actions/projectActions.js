export const createProject = (song) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
      // make async call to database
      const firestore = getFirestore();
      firestore.collection('Songs').add({
        ...song,
        authorId: 12345
      }).then(() => {
        dispatch({ type: 'CREATE_QUEUE', song });
      }).catch((err) => {
        console.log(err);
        dispatch({ type: 'CREATE_QUEUE_ERROR', err });
      })
      
    }
  };