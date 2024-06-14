import { useEffect } from "react";
import React, { useState } from "react"

function Effect() {
 const [message, setMessage] = useState("message");
 const [count, setCount] = useState(0);
 var countRender = 0;

 useEffect(() => {
   countRender++;
   console.log(countRender);
 })

 function handleMessageChange(event) {    
        setMessage(event.target.value);  
     }

 return (
  <div>
   <h1>My message: {message}</h1>
   <input type="text" value={message} onChange={handleMessageChange}/>
   
   <h1>Count of click {count}</h1>
   <button
     onClick={() => {
       setCount(count + 1)
     }}
   >
     Click Me
   </button>
  </div>
  )
 }

export default Effect