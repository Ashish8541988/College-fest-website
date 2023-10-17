import { useState,useEffect } from "react";
import { app } from '../firebase';
import { getAuth,}  from "firebase/auth";
import { getFirestore,  collection, onSnapshot, query,} from "firebase/firestore";
import { Card1 } from "./Card1";
import Card4 from "./Card4";
import Card5 from "./Card5";



const auth=getAuth(app);
const db = getFirestore(app);



let b=[]
let e=[]







const Event =()=>{

const [heading,setheading]=useState("");
const [program_name,setprogram_name]=useState("");
const [Photos,setPhotos]=useState([]);
const [shed,setshed]=useState([]);


useEffect(() => {
  const q = query(collection(db, "Event page"));

  

  const unsubscribeForMessage = onSnapshot(q, (snap) => {
      const a=(snap.docs.map((item)=>item.data()))
      // console.log(a[0].Member)
      
  console.log(a[0],"dkfdkdkf")
  setprogram_name(a[0].program_name);
  setheading(a[0].heading);
  setPhotos(a[0]);
  setshed(a[0]);
  const c=a[0].events_photos
  const d=a[0].Program_Schedule
  for(let i=0;i<c.length;i++){
    b.push(c[i])
                }
    for(let i=0;i<d.length;i++){
        e.push(d[i])
                       }
    });


  return () => {
   
    unsubscribeForMessage();
  };
}, []);

























return(
<>



<main id="main">
   
   {/*==========================
Speakers Section
   ============================*/}
   <section id="speakers" className="wow fadeInUp">
     <div className="container">
       <div className="section-header">
         <h2>Events</h2>
         
       </div>
       <div className="row">
       
         
       {b.map((item,index)=>{

return (
  <Card4 name={item.name}
  url={item.url}
  details={item.details}
   />
 )
})}
    
        
       </div>
     </div>
   </section>

   {/*==========================
Schedule Section
   ============================*/}
   <section id="schedule" className="section-with-bg">
     <div className="container wow fadeInUp">
       <div className="section-header">
         <h2>{program_name}</h2>
         <p style={{color:"blue"}}>PROGRAM SCHEDULE</p>
       </div>
       <ul className="nav nav-tabs" role="tablist">
         <li className="nav-item">
           <a className="nav-link active" href="#day-1" role="tab" data-toggle="tab">Day 1</a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="#day-2" role="tab" data-toggle="tab">Day 2</a>
         </li>
         <li className="nav-item">
           <a className="nav-link" href="#day-3" role="tab" data-toggle="tab">Day 3</a>
         </li>
       </ul>



       <h3 className="sub-heading" style={{color:"grey"}}>{heading}</h3>
       <div className="tab-content row justify-content-center">
         {/* Schdule Day 1 */}
         <div role="tabpanel" className="col-lg-99 tab-pane fade show active" id="day-1">
         {e.map((item,index)=>{return (
  <Card5 time={item.time}
  name1={item.event_name}
  description={item.description}
  last_date={item.last_date}
  link={item.Registration_link}
   />
 )
})}
     











  </div>





         {/* End Schdule Day 1 */}
         {/* Schdule Day 2 */}
      
         

          
           
         {/* End Schdule Day 2 */}
         {/* Schdule Day 3 */}
    
             
            
         </div>
         {/* End Schdule Day 2 */}
       </div>
   
   </section>










   {/*==========================
Venue Section
   ============================*/}
   <section id="venue" className="wow fadeInUp">
   <div className="container-fluid">
       <div className="section-header">
         <h2>for any QUERY</h2>
         <p> DETAILS AND FOR ANY QUERY CONTACT TO
PRAJJWAL :- 8755293708
<p> ABHISHEK LAKHERA :- 6396427754
(CULTURAL HEAD) (EVENT MANAGEMENT)</p></p>
       </div>
       {/* <div className="row no-gutters">
     
       </div> */}
     </div>
    
   </section>
 
  
 



 </main>
 



</>



)



}
export  {Event};
