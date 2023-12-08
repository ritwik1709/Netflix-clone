import React from 'react';
import '../Styles/Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='line'></div>

        <div className='footerDiv'>
        <span>Questions? Call 000-800-919-1694</span>
        <div className='footerlinks'>
            <div>
                <a href="/">FAQ</a>
                <a href="/">Media Center</a>
                <a href="/">Ways to Watch</a>
                <a href="/">Cookie Preferences</a>
                <a href="/">Speed Test</a>
            </div>
            <div>
                <a href="/">Help Center</a>
                <a href="/">Investors Relations</a>
                <a href="/">Terms of Use</a>
                <a href="/">Corporate Information</a>
                <a href="/">Legal Notices</a>
            </div>
            <div>
                <a href="/">Account</a>
                <a href="/">Jobs</a>
                <a href="/">Privacy</a>
                <a href="/">Contact Us</a>
                <a href="/">Only on Netflix</a>
            </div>
        </div>
            <h4>Netflix India</h4>
        </div>
        
    </div>
  )
}

export default Footer;