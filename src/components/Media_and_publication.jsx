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











const Publication=()=>{
  const [head,sethead]=useState("")
  const [decs , setdecs]=useState("")
  const [urll,seturll]=useState("");
    const [user, setuserdata]=useState([]);
    
    useEffect(() => {
        const q = query(collection(db, "Auditorium"));
    
        
    
        const unsubscribeForMessage = onSnapshot(q, (snap) => {
            const a=(snap.docs.map((item)=>item.data()))
            // console.log(a[0].Member)
            
        const c=  a[0].Members;
        console.log(c[0])
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
        <div className="media">
<div className="About">

<Card1
url={urll}
name={head}
position1={"Head"}
/>

<div className="description">
<h3 >
{decs}
</h3>
</div>
</div>
<h2 className="gp">Members</h2>
<div className="About1">
   
<Card
url={"/Docouments/sac1.jpg"}
name={"Ashu Raj"}
position1={"CSE(AIML) 3rd Yr"}
/>
<Card
url={"/Docouments/sac1.jpg"}
name={"Vedant Bhardwaj"}
position1={"CSE 3rd Yr"}
/>

<Card
url={"/Docouments/sac1.jpg"}
name={"Aishwarya"}
position1={"BT 3rd Yr"}
/>

<Card
url={"/Docouments/sac1.jpg"}
name={"Ujjwal ShanKar"}
position1={"CSE(AIML) 3rd Yr"}
/>

<Card
url={"/Docouments/sac1.jpg"}
name={"Divyansh Puri"}
position1={"EE 2nd Yr"}
/>
<Card
url={"/Docouments/sac1.jpg"}
name={"Jiyanshi"}
position1={"CSE  1st Yr"}
/>
<Card
url={"/Docouments/sac1.jpg"}
name={"Anamika Kathait"}
position1={"CSE  1st Yr"}
/>
<Card
url={"/Docouments/sac1.jpg"}
name={"Aarushi Dhoundiyal"}
position1={"CSE  1st Yr"}
/>
<Card
url={"/Docouments/sac1.jpg"}
name={"Akanksh"}
position1={"CSE  1st Yr"}
/>
<Card
url={"/Docouments/sac1.jpg"}
name={"Kartik Maheshwari"}
position1={"CSE(AIML)  1st Yr"}
/>
<Card
url={"/Docouments/sac1.jpg"}
name={"Aayushi Kulshri"}
position1={"CSE  1st Yr"}
/><Card
url={"/Docouments/sac1.jpg"}
name={"Nandani Naula"}
position1={"CSE(AIML)  1st Yr"}
/>
<Card
url={"/Docouments/sac1.jpg"}
name={"Aditi Shailani"}
position1={"CSE  1st Yr"}
/>
<Card
url={"/Docouments/sac1.jpg"}
name={"Vishwas Verma"}
position1={"CSE(AIML)  1st Yr"}
/>
<Card
url={"/Docouments/sac1.jpg"}
name={"Sujal Singh Bisht"}
position1={"ME 1st Yr"}
/>

</div>

        </div>
    )
}

export {Publication};