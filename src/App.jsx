// import React from "react"
// import Memories from "./Memories"
// import AddMemories from "./AddMemories"


// export default function App(props){
//   return(
//     <div className="container">
//       <Memories tittle={props.tittle} content={props.content} />
//       <AddMemories/>
    


//     </div>
//   )
// }



// App.js
import React, { useState } from "react";
import Memories from "./Memories";
import AddMemories from "./AddMemories";
import "./App.css"; // Import CSS file
import NavBar from "./NavBar";

export default function App() {
  const [memories, setMemories] = useState([]);

  // Function to add a new memory to the list
  const addMemory = (newMemory) => {
    setMemories([...memories, newMemory]);
  };

  return (
    <div>
          <NavBar/>
        <div className="container">
            {/* Render each memory */}
            
            {memories.map((memory, index) => (
              <Memories
                key={index}
                title={memory.title}
                content={memory.content}
                date={memory.date}
              />
            ))}
            {/* Pass the addMemory function as a prop to the AddMemories component */}
            <AddMemories onSave={addMemory} />
          </div>



    </div>
  );
}
