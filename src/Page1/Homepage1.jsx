import { ArrowRightOutlined, ShopOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import Page1Text from './Page1Text'
import Page1Img from './Page1Img'
import { useNavigate } from 'react-router-dom'
import Page1Nav from './Page1Nav'

function Homepage1() {
  return (
    <div className='homePage1'>
    <Page1Nav />
    <div className='content1'>
       <Page1Text />
       <Page1Img />
    </div>
</div>
  )
}

export default Homepage1