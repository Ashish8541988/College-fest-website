import React from "react";
import { Card } from "./Card";
import { useState,useEffect } from 'react';
import { app } from '../firebase';
import { getAuth,}  from "firebase/auth";
import { getFirestore,  collection, onSnapshot, query,} from "firebase/firestore";
import { Card1 } from "./Card1";




const auth=getAuth(app);
const db = getFirestore(app);



let b=[]
console.log(b)










const Photography=()=>{
  const [head,sethead]=useState("")
  const [decs , setdecs]=useState("")
  const [urll,seturll]=useState("");
    const [user, setuserdata]=useState([]);
    useEffect(() => {
        const q = query(collection(db, "Photography"));
    
        
    
        const unsubscribeForMessage = onSnapshot(q, (snap) => {
            const a=(snap.docs.map((item)=>item.data()))
            // console.log(a[0].Member)
            
        const c=  a[0].Member;
        console.log(c[0])
        sethead(a[0].Head)
        setuserdata(...c)
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
        <div className="photo">
<div className="About">

<Card1
url={urll}
name={head}
position1={"Head"}
/>

<div className="description">
<h3 >{decs}

</h3>
</div>
</div>
<h2 className="gp">Members</h2>
<div className="About1">
   
{b.map((item,index)=>{

return (
  <Card name={item.Name}
  url={item.PhotoUrl}
  position1={`${item.Branch} ${item.Year} Yr`}
   />
 )
})}

</div>

        </div>
    )
}

export {Photography};