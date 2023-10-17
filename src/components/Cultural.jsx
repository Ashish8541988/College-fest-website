import React from "react";
import { Card } from "./Card";
import { Card1 } from "./Card1";
import { useState,useEffect } from 'react';
import { app } from '../firebase';
import { getAuth,}  from "firebase/auth";
import { getFirestore,  collection, onSnapshot, query,} from "firebase/firestore";





const auth=getAuth(app);
const db = getFirestore(app);



let b=[]




const Cultural=()=>{
  const [head,sethead]=useState("")
  const [decs , setdecs]=useState("")
  const [user, setuserdata]=useState([]);
  const [urll,seturll]=useState("");
    console.log("akfk",b[0])
    useEffect(() => {
        const q = query(collection(db, "Cultural"));
    
        
    
        const unsubscribeForMessage = onSnapshot(q, (snap) => {
            const a=(snap.docs.map((item)=>item.data()))
            
            console.log(a,"kdkjdkfjdf")
        const c=  a[0].Members;
       
        setuserdata(...c)
       
        sethead(a[0].Head)
        setdecs(a[0].Discription)
          seturll(a[0].Photo_url)
           
            for(let i=0;i<c.length;i++){
b.push(c[i])
            }
          });
      
    
        return () => {
         
          unsubscribeForMessage();
        };
      }, []);







    return(
        <div className="cultural">
<div className="About">

<Card1
url={urll}
name={head}
position1={"Head"}
/>

<div className="description">
<h3 >{decs}</h3>
</div>
</div>
<h2 className="gp">Members</h2>
<div className="About1">
   
{b.map((item,index)=>{

return (
  <Card name={item.Name}
  url={"/Docouments/sac1.jpg"}
  position1={`${item.Branch} ${item.Year} Yr`}
   />
 )
})}

</div>

        </div>
    )
}

export {Cultural};