import React from 'react';
import "../Footer/Footer.css"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
  return (
    <div className='footer_outer container'>
      <div className='footer_inner_container'>
        <div className='footer_Icons'>
          <FacebookOutlinedIcon/>
           <InstagramIcon/>
            <YouTubeIcon/>
        </div>
        <div className='Footer_data'>
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
           <div>
            <ul>
              <li>Gift Card</li>
              <li>Term of Use</li>
              <li>Corporate Information</li>
            </ul>
           </div>
           <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
           </div>
          </div>
        
        </div>
        <div className='service_code'>
        <p> 
            Service Code
          </p> 
          </div>
        <div className='copy-write'>
          &copy;1997-2004Netflix,Inc.
          </div>
    </div>
  )
}

export default Footer