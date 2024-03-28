// export default function Memories(props){

    
//     return (
//         <div className="Memories">
//         <section className="header">
//         <h1 className="title">{props.tittle}</h1>
//         <p className="content">{props.content}</p>
//         </section>
//         <section className="footer">
//             <p>{props.date}</p>
//             {/* <p>delet</p> */}
//         </section>
       

//         </div>
//     )
// }



// Memories.js
import React from "react";
import "./App.css"; // Import CSS file

export default function Memories(props) {
  const { title, content, date } = props; // Destructure props

  return (
    <div className="Memories">
      <section className="header">
        <h1 className="title">{title}</h1>
        <p className="content">{content}</p>
      </section>
      <section className="footer">
        <p>{date}</p>
        {/* <p>delete</p> */}
      </section>
    </div>
  );
}
