import React from 'react'






const Registration = () => {
  return (
   
      <form className='register'>
        
      <h2>Registration form</h2>
      <div className="form">
        <div className="key">
          <div className='detail'>
          <p>Name</p>
          <input type="text" className="name" placeholder='e.g. Ashish Arya' />
          </div>
          <div className='detail'>
          <p>Email</p>
          <input type="email" className="email"  placeholder='e.g. ashisharya8541988@gmail.com'/>
          </div>
          <div className='detail'>
          <p>Contact Number</p>
          <input type="number" className="contactn" placeholder='e.g. 9368041369' />
          </div>
          <div className='detail'>
          <p>Course</p>
          <select>
          <option>Choose your course</option>
            <option>M.Tech</option>
            <option>B.Tech</option>
            <option>MCA</option>
            </select>
          </div>
          <div className='detail'>
          <p>Branch</p>
          <select name="select">
          
          <option>Choose your branch</option>
          <option value="ECE">ECE</option>
            <option value="ECE">CSE</option>
            <option value="ECE">EE</option>
            <option value="ECE">CE</option>
            <option value="ECE">AIML</option>
            <option value="ECE">ME</option>
          </select>
          {/* <input type="text" className="branch" /> */}
          </div>
          <div className='detail'>
          <p>Institue Id number</p>
          <input type="text" className="branch" />
          </div>
          <div className='detail'>
          <p>Event</p>
          <select name="select" multiple>
          
          <option>Choose event</option>
          <option value="ECE">Dance</option>
            <option value="ECE">Solo song</option>
            <option value="ECE">Play</option>
            <option value="ECE">Quiz</option>
            <option value="ECE">kkfdkf</option>
            <option value="ECE">kdkdkdf</option>
          </select>
      
          </div>
        </div>
      </div>
<button type='submit' className='submit1'>Submit</button>

</form>
   
  )
}

export default Registration