import { StarFilled, StarOutlined } from '@ant-design/icons'
import React from 'react'

function Cardbox6(props) {
  return (
    <div className='lowerContent6'>
    <div className='lower6'>
        <img className='man' src={props.Img} />
        <p>{props.Review}</p>
    <ul>
        <li><StarFilled style={{color:"yellow"}}/></li>
        <li><StarFilled style={{color:"yellow"}}/></li>
        <li><StarFilled style={{color:"yellow"}}/></li>
        <li><StarFilled style={{color:"yellow"}}/></li>
        <li><StarOutlined style={{color:"yellow"}}/></li>
    </ul>
    <h3>{props.Name}</h3>
    <h4>{props.Occupation}</h4>
    </div>
</div>
  )
}

export default Cardbox6