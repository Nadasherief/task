import React from 'react'
import Image1 from '../Images/poert1.png'; 
import Image2 from '../Images/port2.png'; 
import Image3 from '../Images/port3.png'; 


export default function Portfolio() {
  const containerStyle = {
    display: 'flex',
    height: '100vh', 
  };
  const imageSize = {
    width: '350px', 
    height: 'auto', 
  };
  const handleHover = (event) => {
    event.target.style.opacity = 0.8;
  };

  const handleHoverOut = (event) => {
    event.target.style.opacity = 1;
  };    
  
  return (
    <div className="mb-4" style={containerStyle}>
      <div className="container">
        <div>
          <div className="text-center pt-4" style={{ color: '#2c3e50' }}>
            <h2 className="text-uppercase mb-3 fs-1 fw-bolder">About Component</h2>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="line me-3" style={{ backgroundColor: 'white' }}></div>
              <i className="fa-solid fa-star"></i>
              <div className="line ms-3" style={{ backgroundColor: 'white' }}></div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center px-5 mb-3" >
        <div className="text-center p-7">
          <div>
            <img src={Image1} alt="" className="mb-3 me-4 " style={imageSize} 
                onMouseOver={handleHover}
                onMouseOut={handleHoverOut} />
            <img src={Image2} alt="" className="mb-3 me-4" style={imageSize} 
                onMouseOver={handleHover}
                onMouseOut={handleHoverOut}/>
            <img src={Image3} alt="" className="mb-3" style={imageSize}
                onMouseOver={handleHover}
                onMouseOut={handleHoverOut}/>
          </div>
          <div >
            <img src={Image1} alt="" className="mb-3 me-4" style={imageSize}
                onMouseOver={handleHover}
                onMouseOut={handleHoverOut} />
            <img src={Image2} alt="" className="mb-3 me-4" style={imageSize}
                onMouseOver={handleHover}
                onMouseOut={handleHoverOut}/>
            <img src={Image3} alt="" className="mb-3" style={imageSize} 
                onMouseOver={handleHover}
                onMouseOut={handleHoverOut}/>
          </div>
          </div>
          </div>

        </div>
    </div>
  )
}
