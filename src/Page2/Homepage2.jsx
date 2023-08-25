import React from 'react'
import img1 from './img1.svg'
  import img2 from './img2.svg'
  import img3 from './img3.svg'
  import img4 from './img4.svg'
  import line from './line.svg'
  import line1 from './line1.svg'
import Coverpage2 from './Coverpage2'
function Homepage2() {
  return (
    <div className='homePage2'>
    <div className='container'>
        <div className='details'>
            <h6>Practice Advice</h6>
            <h2>Most Popular Courses</h2>
            <p>Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
        <div className='cards'>
            <Coverpage2 />
            </div>
        </div>
    
</div>
  )
}

export default Homepage2