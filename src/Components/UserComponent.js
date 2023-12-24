import { useState } from "react";

const UserComponent=({name})=>{
    const[count,setCount]=useState(0);
    const[count2]=useState(2);

  


    return(
        <div className="user-card">
            <h1>count:{count}</h1>
            <button onClick={()=>{
                setCount(count+1);
            }}>Increase Count</button>
            <h1>count2:{count2}</h1>
            <h2>Name:{name}</h2>
            <h3>Location:Pune</h3>
            <h3>Contact:aditya@gmail.com</h3>
        </div>

    )
}

export default UserComponent;