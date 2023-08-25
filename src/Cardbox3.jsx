import React, { useState } from 'react';
import Row2Col1Img from './imgs/Row2Col1Img.png';
import Objectdata3 from './Objectdata3'
import Coverpage3 from './Coverpage3';
import { EyeOutlined, HeartOutlined, ShoppingCartOutlined, StarFilled } from '@ant-design/icons';
import { Badge, Button } from 'antd';
import { useNavigate } from 'react-router-dom';



function Cardbox3(ObjData3) {
    const [cartDataArray, setCartDataArray] = useState([]);
    const addToCart = (productData) => {
        if (productData) {
            let data = localStorage.getItem('setItem');
            let cartdata = JSON.parse(data);
            // cartdata.push(productData)
            // localStorage.setItem('setItem',JSON.stringify(cartdata))
            // console.log(cartdata)
            if (cartdata && cartdata?.length > 0) {
                let findIndex = cartdata.findIndex(o => o.id === productData.id);
                if (findIndex > -1) {
                    console.log("asdf", cartdata[findIndex])
                } else {
                    cartdata.push(productData);
                    localStorage.setItem('setItem', JSON.stringify(cartdata))
                }
            } else {
                localStorage.setItem('setItem', JSON.stringify([productData]))
            }

        } else {
            localStorage.setItem('setItem', JSON.stringify(productData))
        }
        // console.log("productData", productData);

    }
    return (
        <div className='Practice-box'>
            <img className='img2' src={ObjData3.Img} />
            <div className='imgParts'>
                <div className='imgTitle'>
                    <h3>Sale</h3>
                </div>
                <div className='buttons'>
                    <Button >{<HeartOutlined />}</Button>
                    <Button onClick={() => {
                        addToCart(ObjData3);
                    }} >

                        {<ShoppingCartOutlined />}</Button>
                    <Button>{<EyeOutlined />}</Button>
                </div>
            </div>

            <div class="practice-main">
                <div class="practice-left">
                    <h3>{ObjData3.ProductName}</h3>
                </div>
                {/* <h3>{props.ProductName}</h3> */}
                <div class="practice-rignt">
                    <button className='star-btn'><StarFilled style={{ color: "yellow" }} />{ObjData3.Rate}
                    </button>
                </div>
            </div>
            <h2>{ObjData3.Heading}</h2>
            <p>{ObjData3.ProductInfo}</p>
            <h4><i class="bi bi-download"></i>{ObjData3.Sales}</h4>
            <h5>{ObjData3.Price1}<span>{ObjData3.Price2}</span></h5>
            <button class="learn-more"> Learn More<i class="bi bi-chevron-right"></i></button>
        </div>
    );
}

export default Cardbox3;