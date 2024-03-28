// import { useState } from "react"
// import App from "./App";
// import "./App.css"

// // import App from "./App";

// export default function AddMemories(){
//      const [tittleForMemory,setTittle]=useState("");
//      const [contentForMemory,setContent]=useState("");
//      const [sendDAta,setData]=useState({
//         tittle:"",
//         content:"",
//      }
       
//      )


//     const handleChangeTittle=(event)=>{
//         setTittle(event.target.value)
//     }
//     const handleChangeContent=(event)=>{
//         setContent(event.target.value)
//     }
//     const handleSave =()=>{
       
//             setData(tittleForMemory,contentForMemory)

//     }


//     return (
        
//         <div className="Memories">

//         <textarea 
//             placeholder="write a name for your memory"
//             value={tittleForMemory}
//             onChange={handleChangeTittle} 
          
//         > </textarea>

//         <textarea placeholder="write your memory" 
//             value={contentForMemory}  
//             onChange={handleChangeContent} 
        
//         > </textarea>
//         <br/>
    
//         <button className="save" onClick={ handleSave }>save</button>
//         <App data={sendDAta} />

       
        
//         </div>
    
//     )
// }



// AddMemories.js
import React, { useState } from "react";
import "./App.css"; // Import CSS file

export default function AddMemories({ onSave }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {
    const newMemory = {
      title: title,
      content: content,
      date: new Date().toLocaleDateString()
    };
    if(title !== "" && title !==" " && content !==""&& content !==" "){
        onSave(newMemory);
    }
    
    setTitle(""); // Reset input fields
    setContent("");
  };

  return (
    <div className="NewMemories">
      <textarea
        placeholder="Write a name for your memory"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></textarea>
      <textarea
        placeholder="Write your memory"
        rows={8}
        columns={16}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button className="save" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}
