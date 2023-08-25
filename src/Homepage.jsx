import React from 'react'
import { Button, Carousel } from 'antd'
import {
    ArrowRightOutlined ,
    CheckCircleFilled,
    CheckCircleOutlined,
    HeartFilled,
    HeartOutlined,
    InstagramFilled,
    PhoneFilled,
    RightOutlined, 
    StarFilled,
    StarOutlined,
    TwitterOutlined
  } from '@ant-design/icons';
  import './Responsive1.css';
  import homePage from './imgs/Homepage.png'
  
  import Row2Col1Img from './imgs/Row2Col1Img.png'
  import Row2Col2Img from './imgs/Row2Col2Img.png'
  import Row2Col3Img from './imgs/Row2Col3Img.png'
  import Row2Col4Img from './imgs/Row2Col4Img.png'

 
  import man from './imgs/man1.png'
  import "./Css/Page2.css"
import './Homepage.css'
import Homepage1 from './Page1/Homepage1';
import Homepage2 from './Page2/Homepage2';
import Cardbox3 from './Cardbox3';
import Cardbox5 from './Cardbox5';
import Coverpage3 from './Coverpage3';
import Coverpage5 from './Coverpage5';
import Coverpage6 from './Coverpage6';

function Homepage() {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
    return (
        <div className='Homepage'>
            <Homepage1 />
           <Homepage2 />

            <div className='homePage3'>
                <div className='container2'>
                    <div className='details2'>
                    <h2> Practice Advice</h2>
                    <h1>Our Experts Teacher</h1>
                    <p>Problems trying to resolve the conflict between<br />
                        the two major realms of Classical physics: Newtonian mechanics </p>
                    </div>
                    <div className='cards2'>
                        <Coverpage3 />
                    {/* <div className='Practice-box'>
                        <img className='img2' src={Row2Col2Img} />
                        <div class="practice-main">
                            <div class="practice-left">
                                <h3>Expert instruction</h3>
                            </div>
                            <div class="practice-rignt">
                                <button className='star-btn'> 4.9</button>
                            </div>
                        </div>
                        <h2>Our Experts Teacher</h2>
                        <p>We focus on ergonomics
                            and meeting you....</p>
                        <h4><i class="bi bi-download"></i> 15 Sales</h4>
                        <h5>$16.48 <span>$6.48</span></h5>
                        <button class="learn-more"> Learn More<i class="bi bi-chevron-right"></i></button>
                    </div>
                    <div className='Practice-box'>
                        <img className='img2' src={Row2Col3Img} />
                        <div class="practice-main">
                            <div class="practice-left">
                                <h3>Expert instruction</h3>
                            </div>
                            <div class="practice-rignt">
                                <button className='star-btn'> 4.9</button>
                            </div>
                        </div>
                        <h2>Our Experts Teacher</h2>
                        <p>We focus on ergonomics
                            and meeting you....</p>
                        <h4><i class="bi bi-download"></i> 15 Sales</h4>
                        <h5>$16.48 <span>$6.48</span></h5>
                        <button class="learn-more"> Learn More<i class="bi bi-chevron-right"></i></button>
                    </div>
                    <div className='Practice-box'>
                        <img className='img2' src={Row2Col4Img} />
                        <div class="practice-main">
                            <div class="practice-left">
                                <h3>Expert instruction</h3>
                            </div>
                            <div class="practice-rignt">
                                <button className='star-btn'><i class="bi bi-star-fill"></i> 4.9</button>
                            </div>
                        </div>
                        <h2>Our Experts Teacher</h2>
                        <p>We focus on ergonomics
                            and meeting you....</p>
                        <h4><i class="bi bi-download"></i> 15 Sales</h4>
                        <h5>$16.48 <span>$6.48</span></h5>
                        <button class="learn-more"> Learn More<i class="bi bi-chevron-right"></i></button>
                    </div> */}
                    </div>
                </div>
            </div>
            <div className='homePage4'>
                <div className='container4'>
                <div className='leftImages'>
                    <img className='img3' src={homePage} />
                </div>
                <div className='rightContent'>
                    <div className='rightContentBox'>
                <h1>Most Popular <br />
                                Courses</h1>
                            <p>Problems trying to resolve the conflict between
                                the two major realms of Classical physics:
                                Newtonian mechanics </p>
                            <button class="learn">Learn More<RightOutlined className='bi bi-chevron-right'/></button>
                            </div>
                </div>
            </div>
            </div>
            <div className='homePage5'>
              <div className='container5'>
                <div className='upperContainer'>
                <h2> Practice Advice</h2>
                    <h1>Our Experts Teacher</h1>
                    <p>Problems trying to resolve the conflict between<br />
                        the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
               
                    <Coverpage5 />
{/*                     
                
                <div className='lowerContainer'>
                <div class="teacher-box">
                <div className='iconHeart'><HeartFilled style={{padding:"3%",  borderRadius: "25px", backgroundColor:"#26335d" , color: "#fff", fontSize:"30px"}}/></div>
                        <h4>FREE</h4>
                        <h5>Organize across all apps by<br /> hand</h5>
                        <h3>19$ <br /> <span>Per Month</span> </h3>
                        <p>Slate helps you see how<br /> many more days you need...</p>
                        <button class="try-btn">Try for free</button>
                        <div class="teacher-main">
                            <div class="teacher-left">
                                <ul>
                                    <li><CheckCircleFilled style={{color:"green" , fontSize:"20px"}} /></li>
                                    <li><CheckCircleFilled style={{color:"green", fontSize:"20px"}} /></li>
                                    <li><CheckCircleFilled style={{color:"green", fontSize:"20px"}}/></li>
                                    <li><CheckCircleOutlined style={{color:"green" ,fontSize:"20px"}} /></li>
                                    <li><CheckCircleOutlined style={{color:"green", fontSize:"20px"}}/></li>
                                    
                                </ul>
                            </div>
                            <div class="teacher-right">
                                <ul>
                                    <li>Unlimited product updates </li>
                                    <li>Unlimited product updates </li>
                                    <li>Unlimited product updates </li>
                                    <li>1GB Cloud storage </li>
                                    <li>Email and community <br />support </li>
                                </ul>
                            </div>
                        </div>
               
                </div>
                </div>
                <div className='lowerContainer'>
                <div class="teacher-box">
                <div className='iconHeart'><HeartFilled style={{padding:"3%",   borderRadius: "25px", backgroundColor:"#26335d" , color: "#fff", fontSize:"30px"}}/></div>
                        <h4>FREE</h4>
                        <h5>Organize across all apps by<br /> hand</h5>
                        <h3>19$ <br /> <span>Per Month</span> </h3>
                        <p>Slate helps you see how<br /> many more days you need...</p>
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
                                    <li>Unlimited product updates </li>
                                    <li>Unlimited product updates </li>
                                    <li>Unlimited product updates </li>
                                    <li>1GB Cloud storage </li>
                                    <li>Email and community <br />support </li>
                                </ul>
                            </div>
                        </div>
               
                </div>
                </div> */}
                
              </div>
            </div>
            <div className='homePage6'>
                <div className='content6'>
                    <div className='upperContent6'>
                        <div className='upper6'>
                        <h2> Testimonial</h2>
                <h1>Approdable Packages</h1>
                <p>Problems trying to resolve the conflict between<br />
                    the two major realms of Classical physics: Newtonian mechanics </p>
                        </div>
                    </div>
                    <Coverpage6 />
                    
                   {/* { <div className='lowerContent6'>
                        <div className='lower6'>
                            <img className='man' src={man} />
                            <p>Slate helps you see how many more days
                        you need to work to reach your financial
                        goal for the month and year.</p>
                        <ul>
                            <li><StarFilled style={{color:"yellow"}}/></li>
                            <li><StarFilled style={{color:"yellow"}}/></li>
                            <li><StarFilled style={{color:"yellow"}}/></li>
                            <li><StarFilled style={{color:"yellow"}}/></li>
                            <li><StarOutlined style={{color:"yellow"}}/></li>
                        </ul>
                        <h3>Regina Miles</h3>
                        <h4>Designer</h4>
                        </div>
                        </div>} */}
                        
                </div>
            </div>
            <div className='homePage7'>
            <div class="container7">
            <div class="new-box">
               
                <h2>Newsletter</h2>
                <h1>Every Client Matters</h1>
                <p>Problems trying to resolve the conflict between <br />
                    the two major realms of Classical physics: Newtonian mechanics </p>
                    <div className='mailHere'>
                <input class="email" placeholder="Your Email" /><button class="sub">Subscribe</button>
                </div>
            </div>
        </div>
            </div>
            <div className='homePage8'>
            <div className='containerFooter'>
            
                <div className='container8'>
                    <h2>Company Info</h2>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Carrier</a></li>
                        <li><a href="#"> We are hiring</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>

                    </div>
                    <div className='container8'>
                    <h2>Legal </h2>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Carrier</a></li>
                        <li><a href="#"> We are hiring</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div className='container8'>
               
                    <h2>Company Info</h2>
                    <ul>
                        <li><a href="#">Business Marketing</a></li>
                        <li><a href="#">User Analytic</a></li>
                        <li><a href="#"> Live Chat</a></li>
                        <li><a href="#">Unlimited Support</a></li>
                    </ul>
                    </div>
                    <div className='container8'>
                    <h2>Resources</h2>
                    <ul>
                        <li><a href="#">IOS & Android</a></li>
                        <li><a href="#">Watch a Demo</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">API</a></li>
                    </ul>
                   </div>
                   <div className='container8'>
                    <h2>Get In Touch</h2>
                    <ul>
                        <li><i class="bi bi-telephone"></i><a href="#">(480) 555-0103</a></li>
                        <li><i class="bi bi-geo-alt"></i><a href="#">4517 Washington Ave. Manchester,<br />
                                Kentucky 39495</a></li>
                        <li><i class="bi bi-envelope"></i><a href="#">debra.holt@example.com</a></li>
                    </ul>
                   </div>
            
        </div>
            </div>
            <div className='social'>
                <div className='container9'>
            <p>Made With Love By Figmaland All Right Reserved </p>
                    <ul>
                        <li><PhoneFilled style={{color:"#ff6551"}}/></li>
                        <li><InstagramFilled style={{color:"#ff6551"}}/></li>
                        <li><TwitterOutlined style={{color:"#ff6551"}}/></li>
                    </ul>
                    </div>
            </div>
        </div>
    )
}

export default Homepage