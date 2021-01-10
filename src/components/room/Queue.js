import React from 'react';

const Queue = ({queue}) => {
  

    const htmlList = queue ? (
        Object.keys(queue).map((item, i, arr) => {
            console.log(queue, item);
            return (
            <div className="col m2 card blue-grey darken-1" key={item}>
                <div className="card-content">
                  
                </div>
                <div className="card-action">
              
                <iframe
                        style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "20vh"
                        }}
                        title={item.title}
                        src={`https://www.youtube.com/embed/${item}`}
                        frameBorder="0"
                    />
                </div>

            </div>
            )
        })
    ) : (
        <div className="center">no posts yet</div>
    );

    return (
        <div className="Queue">
        <h5 className="mt-0">Næste i køen</h5>
            <div className="row">
                {htmlList}
                
            </div>
        </div>  
    )
}

export default Queue