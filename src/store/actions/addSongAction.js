export const addSongToRoom = (songs) => {
    
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();

        console.log(songs);

        //Works. But with a bug
        /* Object.keys(songs).map((item, i) => {
            console.log(songs[item]);
            firestore.collection('Queues').doc(songs[item].roomId).update({
                ...songs,
                songs: {
                    [songs[item].song.variablesId]: {
                        "addedBy": songs[item].addedBy,
                        "thumbnail": songs[item].song.variablesThumbnail,
                        "title": songs[item].song.variablesTitle,
                        "song": songs[item]
                    }
                }
            }).then(() => {
                console.log("successfully added!");
            }).catch((err) => {
                console.log(err);
            })
        }) */
    }
}