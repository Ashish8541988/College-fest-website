import React from 'react'

const Card5 = ({time,name1,description,last_date,link}) => {
  return (
    <> <div className="row schedule-item">
    <div className="col-md-2"><time>{time}</time></div>
    <div className="col-md-10">
      <h4>{name1}</h4>
  <div>{description}<div>
<div>{last_date}</div>
For registration please fill the form as soon as possible Link :-</div>
       </div> <a  style={{color:"orange"}}href={link} target="_blank" >
         {link}</a> 
         
    </div>
    
  </div></>
  )
}

export default Card5