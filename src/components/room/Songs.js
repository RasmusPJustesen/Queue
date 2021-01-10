import React from 'react'

const Songs = (props) => {
 
  const { queue } = props

    const handleClick = () => {
        props.changePopUp();
    }


    const htmlList = queue ? (
        Object.keys(queue).map((item, i, arr) => {
            console.log(queue[item]);
            return (
                <li>
                <div>
                    <img src={queue[item].image} alt=""/>
                    <p className="bold truncate">{queue[item].title}</p>
                </div>
            </li>
            )
        })
    ) : (
        <div className="center">no posts yet</div>
    );

 
    return (
        <div className="Songs">
            <div className="flex justify-content-between valign-wrapper">
                <h5>Sange</h5>
                <button onClick={handleClick} className="btn deep-orange accent-2 white-text"><i className="fas fa-plus-square mr-2"></i>Tilføj</button>
            </div>
            <div>
                <ol>
                    {htmlList}
                </ol>
            </div>
        </div>
    ) 
}

export default Songs