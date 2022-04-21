import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens:10,
    total:63,
  });

  inv.total =  inv.books+inv.notebooks+inv.inkpens+inv.pens
  const adding = ()=>{
    inv.books = inv.books+1
    setInv({
     ...inv 
    })
  }
  const adding1 = ()=>{
    inv.notebooks = inv.notebooks+1
    setInv({
     ...inv 
    })
  }
  const adding2 = ()=>{
    inv.pens = inv.pens+1
    setInv({
     ...inv 
    })
  }
  const adding3 = ()=>{
    inv.inkpens = inv.inkpens+1
    setInv({
     ...inv 
    })
  } 

  const subtract = () =>{
    inv.books = inv.books-1;
    setInv({
      ...inv
    })
  }

  const subtract1 = () =>{
    inv.notebooks = inv.notebooks-1;
    setInv({
      ...inv
    })
  }

  const subtract2 = () =>{
    inv.pens = inv.pens-1;
    setInv({
      ...inv
    })
  }
  const subtract3 = () =>{
    inv.inkpens = inv.inkpens-1;
    setInv({
      ...inv
    })
  }
  // Create add and remove functions here that changes the
    // state.
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button onClick={adding} className="circlularButton">+</button>
        <button onClick={subtract} className="circlularButton">-</button>
        <span>{inv.books}</span>
      </div>

      <div className="items">
        <span>Notebooks: </span>
        <button onClick={adding1} className="circlularButton">+</button>
        <button onClick={subtract1} className="circlularButton">-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button onClick={adding2} className="circlularButton">+</button>
        <button onClick={subtract2} className="circlularButton">-</button>
        <span>{inv.pens}</span>
      </div>

      <div className="items">
        <span>Ink Pens: </span>
        <button onClick={adding3} className="circlularButton">+</button>
        <button onClick={subtract3} className="circlularButton">-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {inv.total}
    </div>
  );
};
