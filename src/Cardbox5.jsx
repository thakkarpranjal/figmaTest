import { CheckCircleFilled, CheckCircleOutlined, HeartFilled } from '@ant-design/icons'
import React from 'react'

function Cardbox5(props) {
  return (
    <div className='lowerContainer'>
                <div class="teacher-box">
                  <div className='iconHeart'><HeartFilled style={{padding:"3%",   borderRadius: "25px", backgroundColor:"#26335d" , color: "#fff", fontSize:"30px"}}/></div>
                        <h4>{props.ProductOffer}</h4>
                        <h5>{props.Info}</h5>
                        <h3>{props.ProductPrice}<br /> <span>Per Month</span> </h3>
                        <p>{props.Description}</p>
                        <button class="try-btn">Try for free</button>
                        <div class="teacher-main">
                            <div class="teacher-left">
                                <ul>
                                    <li><CheckCircleFilled style={{color:"green", fontSize:"20px"}} /></li>
                                    <li><CheckCircleFilled style={{color:"green", fontSize:"20px"}} /></li>
                                    <li><CheckCircleFilled style={{color:"green", fontSize:"20px"}}/></li>
                                    <li><CheckCircleOutlined style={{color:"green", fontSize:"20px"}} /></li>
                                    <li><CheckCircleOutlined style={{color:"green", fontSize:"20px"}}/></li>
                                    
                                </ul>
                            </div>
                            <div class="teacher-right">
                                <ul>
                                
                                    <li>{props.Line1}</li>
                                    <li>{props.Line2}</li>
                                    <li>{props.Line3}</li>
                                    <li>{props.Line4}</li>
                                    <li>{props.Line5} </li>
                                </ul>
                            </div>
                        </div>
               
                </div>
                </div>
  )
}

export default Cardbox5