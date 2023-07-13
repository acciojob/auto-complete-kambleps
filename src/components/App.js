
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]
  let[fruit,setFruit]=useState("");
  let[filtered,setFiltered]=useState(fruits)
  useEffect(()=>{
    setFiltered(fruits.filter((value)=>value.includes(fruit)))
  },[fruit])
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Search Item</h1>
        <input type="text" onChange={(e)=>setFruit(e.target.value)}></input>
        <ul>
        {
          filtered.map((value)=>{
            <li>{value}</li>
          })
        }
        </ul>
    </div>
  )
};

export default App
