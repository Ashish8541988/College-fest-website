import React from 'react'

const Card4 = ({url,name,details}) => {
  return (
    <>
<div className="col-lg-4 col-md-6">
           <div className="speaker">
             <img src={url} alt="Speaker 1" className="img-fluid" />
             <div className="details">
              
               <h3>{name}</h3>
               <h3><a href="speaker-details.html">{details}</a></h3>
               
             </div>
           </div>
         </div>
    </>
  )
}

export default Card4