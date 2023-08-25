import React from 'react'
import Objectdata5 from './Objectdata5'
import Cardbox5 from './Cardbox5'

function Createdata5(ObjData){
    return(
        <Cardbox5 
        key={ObjData.id}
        ProductOffer = {ObjData.ProductOffer}
        Info = {ObjData.Info}
        ProductPrice = {ObjData.ProductPrice}
        Description = {ObjData.Discription}
        Line1 = {ObjData.Line1}
        Line2 = {ObjData.Line2}
        Line3 = {ObjData.Line3}
        Line4 = {ObjData.Line4}
        Line5 = {ObjData.Line5}
        />
    )
}
function Coverpage5() {
  return (
    <div className='boxes'>{Objectdata5.map(Createdata5)}</div>
  )
}

export default Coverpage5