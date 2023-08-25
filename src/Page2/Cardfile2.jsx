import { Col, Image } from 'antd'
import React from 'react'

function Cardfile2(props) {
  return (
    <Col id={props.mainDiv} className="CardMainDiv">
      <div className="CardMainDivStack">
        <Col id={props.colId} className="Cardimgdiv" sm={6}>
          <img src={props.Img} />
        </Col>

        <h5 className="CardH5Div">{props.Head}</h5>
        <div className='line'></div>
        <div className="HorizontalDiv"></div>

        <p className="Page2CardParagraphText">{props.Para}</p>
      </div>
    </Col>
  )
}

export default Cardfile2