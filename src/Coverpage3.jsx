import React from 'react'
import Objectdata3 from './Objectdata3'
import Cardbox3 from './Cardbox3';


function Createdata3(ObjData3) {
    console.log(ObjData3, "dddddddddddddddd");

    return (
        <Cardbox3
            key={ObjData3.id}
            id={ObjData3?.id}
            Img={ObjData3.Img}
            ProductName={ObjData3.ProductName}
            Rate={ObjData3.Rating}
            Heading={ObjData3.Heading}
            ProductInfo={ObjData3.ProductInfo}
            Sales={ObjData3.SalesCount}
            Price1={ObjData3.DisabledPrice}
            Price2={ObjData3.HighlitedPrice}
        // head="Expert"
        />

    );
}


function Coverpage3() {
    return (
        <div className='Homepage3'>{Objectdata3.map(Createdata3)}</div>
    );
}

export default Coverpage3