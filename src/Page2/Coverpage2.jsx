import React from 'react'
import Objectdata2 from '../Objectdata2';
import Cardfile2 from './Cardfile2';
function CreateEntry(ObjData) {
    console.log("obj", parseInt(ObjData.id) % 2 === 1 ? "CardFile1" : "");
    return (
      <div
        className={
          parseInt(ObjData.id) % 2 === 1 ? "CardFile CardFile1" : "CardFile"
        }
      >
        <Cardfile2
          key={ObjData.id}
          Img={ObjData.img}
          Head={ObjData.heading}
          line={ObjData.line}
          Para={ObjData.paragraph}
        />
      </div>
    );
  }
function Coverpage2() {
  return (
    <div className="Page2CardRow">{Objectdata2.map(CreateEntry)}</div>
  )
}

export default Coverpage2