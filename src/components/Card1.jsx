import React from "react";
import { useNavigate,Link } from "react-router-dom";






const Card1=({url,name, position,position1,dec})=>{

  const navigate = useNavigate();

  const navigateHome = () => {
    // 👇️ navigate to /
    navigate(position);
  };



    return(
        <div id="event2" onClick={navigateHome}>
           <div className="event1">
             <img className="photo1" src={url} alt="member" />
             <h3>{name}</h3>
             <p>{position1}</p>
           </div>
           </div>
          
          
    )
}

export {Card1};