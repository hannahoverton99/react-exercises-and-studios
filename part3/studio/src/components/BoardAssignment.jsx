import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
     {
      
      label: "dinner", 
      value: "dinner"},

      {
       label: "cheesy",
       value: "cheesy"},

       {label: "americana",
        value: "americana"},
   ];
const [boardName, setBoardName] = useState("No boards yet.");



const handleChange = (event) => {
   setBoardName(event.target.value);
}

return (
   <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((value)=> <option key={value.value}>{value.label}</option>)}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
