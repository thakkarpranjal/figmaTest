import { ArrowRightOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Badge, Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Page1Nav() {
    const navigate = useNavigate();
    const cart = (e) => {
        e.preventDefault();
        navigate("/cart")
    }
    const data = JSON.parse(localStorage.getItem('setItem'))
    return (
        <div className='header1'>
            <div className='logo'>
                <h2>Brandname</h2>
            </div>
            <div className='navHeader'>
                <div className='menuHeader1'>
                    <Button type='text'>Home</Button>
                    <Button type='text'>Product</Button>
                    <Button type='text'>Pricing</Button>
                    <Button type='text'>Contact</Button>
                </div>
                <div className='userHeader'>
                    <Badge count={data.length} ><Button onClick={cart} className='cartGo'> <ShoppingCartOutlined style={{ color: "darkblue" }} /></Button> </Badge>
                    <Button type='text'
                    >Login</Button>
                    <Button type='primary' style={{
                        backgroundColor: "#FF6551"
                    }}>Join us <ArrowRightOutlined /></Button>
                </div>
            </div>
        </div>
    )
}

export default Page1Nav