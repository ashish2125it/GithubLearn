import { useState } from "react";
import  UserCard  from "./assets/component/UserCard";

function App() {
  const [count, setCount] = useState(0);

  const increment_fun = () => {
    setCount(count + 1); 
  };

  const decrement_fun = () => {
    // setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
    if(count>0)
      setCount(count-1);
    else
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          color: count > 0 ? "green" : "black",
          marginBottom: "20px",
        }}
      >
         You have clicked {count} times
      </div>
      <button
        onClick={increment_fun}
        style={{
          padding: "10px 20px",
          margin: "5px",
          fontSize: "16px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Increment
      </button>
      <button
        onClick={decrement_fun}
        style={{
          padding: "10px 20px",
          margin: "5px",
          fontSize: "16px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Decrement
      </button>

      <UserCard name="ashish khurana" occ="Software Engineer"  />

    </div>
    
    
  );
}

export default App;
