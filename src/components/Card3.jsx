import React from 'react'

export const Card3 = ({name,url,link,what,email,detail}) => {
  return (
    <><div className="containerr">
    
          <div className="aboutsub">
                <div className="icon">
                    <img className="i" src={url}  alt=""/>
                    <h2>{name}</h2>
                </div>
   
                <div className="social_media"> 
                     <i className="fa-brands fa-linkedin" id="social" ><a href={link}/></i>
                     <i className="fa-regular fa-envelope" id="social">{email}</i> 
                     <i className="fa-brands fa-whatsapp" id="social">{what}</i>
                </div>
          </div>
          <div className="details">
              <p>{detail}</p>
          </div>
    
</div></>
  )
}
