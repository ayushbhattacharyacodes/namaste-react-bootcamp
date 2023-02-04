import { useState,useEffect } from "react";

const Profile = () =>{
    const [number,setNumber] = useState(0)
      // useEffect(() => {
      //     // API Call
      //     const timer = setInterval(() => {
      //       console.log("NAMASTE REACT OP ");
      //     }, 1000);
      //     console.log("useEffect");
      
      //     return () => {
      //       clearInterval(timer);
      //       console.log("useEffect Return");
      //     };
      //   }, []);
  return(
    <div>
        <h2>This is a Profile Functional Component</h2>
        <p>{number}</p>
        <button onClick={()=>{setNumber(1)}}>Count</button>
    </div>
  )
}

export default Profile;