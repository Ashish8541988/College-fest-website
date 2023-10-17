import React from "react";
import { Card3 } from "./Card3";
import { useState,useEffect } from "react";
import { app } from '../firebase';
import { getAuth,}  from "firebase/auth";
import { getFirestore,  collection, onSnapshot, query,} from "firebase/firestore";

const auth=getAuth(app);
const db = getFirestore(app);
let b=[]

const About=()=>{

    const [user, setuserdata]=useState([]);

useEffect(() => {
    const v = query(collection(db, "About page"));
    const unsubscribeForMessage4 = onSnapshot(v, (snap) => {
      const t=(snap.docs.map((item)=>item.data()))
      console.log(t[0].About)
const v = t[0].About
console.log(v,"kdjfkjf")
setuserdata(...v)
      for(let i=0;i<v.length;i++){
        b.push(v[i])
        console.log(b,"ffff")
       
                    }
                  
     
    })

  return () => {
    unsubscribeForMessage4();
  }
}, [])




    return(
        <div className="Eventsss">

<h1 className="heading">About us</h1>
   
   {b.map((item,index)=>{

return (
  <Card3 
   name={item.Name}
  url={item.PhotoUrl}
  link={item.linkedln}
  what={item.whatsApp}
  detail={item.about}
  email={item.email}
   />
 )
})}

    
        
   


        </div>


    )
}

export {About};