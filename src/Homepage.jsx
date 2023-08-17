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
  import banner from './imgs/banner.png'
  import img1 from './imgs/img1.svg'
  import img2 from './imgs/img2.svg'
  import img3 from './imgs/img3.svg'
  import img4 from './imgs/img4.svg'
  import line from './imgs/line.svg'
  import line1 from './imgs/line1.svg'
  import product1 from './imgs/product1.png'
  import product2 from './imgs/product2.png'
  import product3 from './imgs/product3.png'
  import product4 from './imgs/product4.png'
  import homePage from './imgs/Homepage.png'
  import man from './imgs/man1.png'
  
import './Homepage.css'

function Homepage() {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
    return (
        <div className='Homepage'>
            <div className='homePage1'>
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
                            <Button type='text' 
                            >Login</Button>
                            <Button  type='primary' style={{
                                backgroundColor: "#FF6551"
                            }}>Join us <ArrowRightOutlined /></Button>
                        </div>
                    </div>
                </div>
                <div className='content1'>
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
                            <Button className='join-btn' style={{borderRadius: "5px",
background: "#FF6551"}} type='primary'>Get Quote Now</Button>
                            <Button className='learn-btn' style={{backgroundColor:"transparent", borderColor:"#FF6551", color:"#FF6551"}}>Learn More</Button>
                        </div>
                    </div>
                    <div className='contentRight1'>
                        <div className='contentRightImg1'>
                          <img className='imgHere' src={banner} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='homePage2'>
                <div className='container'>
                    <div className='details'>
                        <h6>Practice Advice</h6>
                        <h2>Most Popular Courses</h2>
                        <p>Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics </p>
                    </div>
                    <div className='cards'>
                    <div className="course-box">
                            <img className="img1" src={img1} />
                            <h2>Certified Teacher</h2>
                            <img className='line' src={line} />
                            <img className='line1' src={line1} />
                            <p>The gradual
                                accumulation of
                                information about </p>
                        </div>
                
                        <div className="course-box2">
                            <img className="img1" src={img2} />
                            <h2>Training Courses</h2>
                            <img className='line' src={line} />
                            <img className='line1' src={line1} />
                            <p>The gradual
                                accumulation of
                                information about </p>
                        
                        </div>
                        
                        <div className="course-box">
                            <img className="img1" src={img3} />
                            <h2>Training Courses</h2>
                            <img className='line' src={line} />
                            <img className='line1' src={line1} />
                            <p>The gradual
                                accumulation of
                                information about </p>
                        </div>
                       
                        <div className="course-box2">
                            <img className="img1" src={img4} />
                            <h2>Lifetime Access</h2>
                            <img className='line' src={line} />
                            <img className='line1' src={line1} />
                            <p>The gradual
                                accumulation of
                                information about </p>
                        </div>
                        </div>
                    </div>
                
            </div>
            <div className='homePage3'>
                <div className='container2'>
                    <div className='details2'>
                    <h2> Practice Advice</h2>
                    <h1>Our Experts Teacher</h1>
                    <p>Problems trying to resolve the conflict between<br />
                        the two major realms of Classical physics: Newtonian mechanics </p>
                    </div>
                    <div className='cards2'>
                        <div className='Practice-box'>
                        <img className='img2' src={product1} />
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
                    </div>
                    <div className='Practice-box'>
                        <img className='img2' src={product2} />
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
                        <img className='img2' src={product3} />
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
                        <img className='img2' src={product4} />
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
                    </div>
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
                <div className='boxes'>
                    
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
                </div>
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
                </div>
                </div>
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
                    <div className='reviews'>
                    <div className='lowerContent6'>
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
                    </div>
                    <div className='lowerContent6'>
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
                        </div>
                        </div>
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