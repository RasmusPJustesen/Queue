export const addSongToRoom = (songs, id, queue) => {
    console.log(songs);
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();

            Object.keys(songs).map((item, i, arr) => {

         return firestore.collection('Queues').doc(id).update({
                queues:{
                song: { 
                    ...songs,    
                    [item]: {
                        id: songs[item].id,
                        title: songs[item].title,
                        image: songs[item].image
                        }
                    }
                }
            }).then(() => {
                console.log("successfully added!");
            }).catch((err) => {
                console.log(err);
            })
        })  
      
    }
  };    

  