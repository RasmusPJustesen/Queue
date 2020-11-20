import React from 'react'

const Songs = () => {
  return (
    <div className="Songs">
      <div className="flex justify-content-between valign-wrapper">
        <h5>Sange</h5>
        <button className="btn deep-orange accent-2 white-text"><i class="fas fa-plus-square mr-2"></i>Tilføj</button>
      </div>
      <div>
        <ol>
          <li>
            <div>
              <img src="/images/rasmus.jpg" alt=""/>
              <p className="bold">Gates of Babylon</p>
            </div>
          </li>
          <li>
            <div>
              <img src="/images/nicklas.jpg" alt=""/>
              <p>Take Over</p>
            </div>
          </li>
          <li>
            <div>
              <img src="/images/nicklas.jpg" alt=""/>
              <p>Strip no More</p>
            </div>
          </li>
          <li>
            <div>
              <img src="/images/rasmus.jpg" alt=""/>
              <p>Lomesome Rider</p>
            </div>
          </li>
          <li>
            <div>
              <img src="/images/rasmus.jpg" alt=""/>
              <p>For evigt</p>
            </div>
          </li>
          <li>
            <div>
              <img src="/images/nicklas.jpg" alt=""/>
              <p>Immortals</p>
            </div>
          </li>
          <li>
            <div>
              <img src="/images/nicklas.jpg" alt=""/>
              <p>Lie to Me</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  ) 
}

export default Songs