import { useEffect, useRef, useState } from "react";
import Product from "./Product";
import useRandomJoke from "./useRandomJoke";

function App() {
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const [count, setCount] = useState(0);
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const joke = useRandomJoke(firstName,lastName)

  
  const generateJoke = e => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value)
    setLastName(lastNameRef.current.value)
  }


  
  

  const increment =() =>{
    setCount (count+1)
  }

  const decrement =() =>{
    setCount (count-1)
  }

  // useEffect(() => {
  //   console.log("Component mounted or count updated");

  //   return () => {
  //     console.log("Cleanup when component unmounts or count changes");
  //   };
  // }, [count]); // Runs when `count` changes

  //  without dependency array[]
  useEffect(() => {
    console.log("Runs on every render");
  }); 

  // with an empty dependency array []
  useEffect(() => {
    console.log("Runs only once when component mounts");
  }, []);


  // with dependency array[]
  useEffect(() => {
    console.log("Runs when count changes");
  }, [count]);


  // cleanup in useEffect
  useEffect(() => {
    console.log("Effect runs");
    return () => {
      console.log("Cleanup before next effect runs or component unmounts");
    };
  }, [count]);
  

  
  
  

  return (
    <div >
      <center>
      <p>Count: {count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={increment}>+</button>
      
        <Product 
        name ="Google Gemini "
        description ="your AI assistant"
        price = {55.99}
        
        />

       <Product 
        name ="iPhone 16 Pro "
        description ="the best phone"
        price = {1200}
        
        />
        <Product 
        name ="MacBook"
        description =" most favourate computer"
        price = {2900}
        
        />
        

     <h2>Random Joke</h2>
      <p>{joke || "Loading..."}</p>
      <form>
        <input 
        placeholder="firstName"
        ref={firstNameRef}
        />
        <input 
        placeholder="lastName"
        ref={lastNameRef}
        />
      <button onClick={generateJoke}>Get New Joke</button>

      </form>
      

      </center>
      
    </div>
    
  );
}

export default App;
