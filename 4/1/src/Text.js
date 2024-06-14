import React, { useState } from "react"

function Text() {
 const [message, setMessage] = useState("message");

 function handleMessageChange(event) {    
        setMessage(event.target.value);  
     }

 return (
  <div>
   <h1>My message: {message}</h1>
   <input type="text" value={message} onChange={handleMessageChange}/>
  </div>
  )
 }

export default Text