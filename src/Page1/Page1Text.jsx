import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Page1Text() {
  const navigate = useNavigate();
  const Quote = (e) =>
     {
        e.preventDefault();
        navigate("/getquote")
    }
  return (
    <div className='contentLeft1'>
    <div className='titleLeft1'>
    <h5>For Better Future</h5>
    </div>
    <div className='headlineLeft1'>
        <h1>HIGH QUALITY COURSES</h1>
    </div>
    <div className='headlineSec1'>
    <h4>Find the right instructor for you from over 10,000 teachers</h4>
    </div>
    <div className='contentButtonLeft1'>
        <Button onClick={Quote} className='join-btn' style={{borderRadius: "5px",
background: "#FF6551"}} type='primary'>Get Quote Now</Button>
        <Button className='learn-btn' style={{backgroundColor:"transparent", borderColor:"#FF6551", color:"#FF6551"}}>Learn More</Button>
    </div>
</div>
  )
}

export default Page1Text