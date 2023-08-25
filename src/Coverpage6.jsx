import React from 'react'
import ObjectData6 from './Objectdata6'
import Cardbox6 from './Cardbox6'
function createData6(ObjData){
return( <Cardbox6 
    Key = {ObjData.id}
    Img = {ObjData.Img}
    Review = {ObjData.Review}
    Rating = {ObjData.Rating}
    Name = {ObjData.Name}
    Occupation = {ObjData.Occupation}
    />)
   
}
function Coverpage6() {
  return (
    <div className='reviews'>
        {ObjectData6.map(createData6)}
    </div>
  )
}

export default Coverpage6