import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join Our Exclusive webistes to buy Bags
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <a href='https://www.youtube.com'
            target='_blank'>Submit video</a>
            {/* <Link to='/'>Submit Video</Link> */}
            {/* <Link to='/'>Ambassadors</Link> */}
            <a href='https://www.youtube.com'
            target='_blank'>Ambassador</a>
            {/* <Link to='/'>Agency</Link> */}
            <a href='https://www.youtube.com'
            target='_blank'>Agency</a>
            {/* <Link to='/'>Influencer</Link> */}
            <a href='https://www.youtube.com'
            target='_blank'>Influencer</a>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
             {/* <Link >Instagram</Link> */}
             <a href='https://www.Instagram.com'
            target='_blank'>Instagram</a>
             {/* <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link> */}
             <a href='https://www.facebook.com'
            target='_blank'>facebook</a>
             <a href='https://www.Youtube.com'
            target='_blank'>Youtube</a>
             <a href='https://www.Twitter.com'
            target='_blank'>Twitter</a>

            
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              AFFILMART
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>AFFILMART © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              
              target='_blank'
              aria-label='Facebook'
            > <a href='https://www.facebook.com/'>
              <i class='fab fa-facebook-f' ></i></a>
            </Link>
            
             <Link
              class='social-icon-link instagram'
              target='_blank'
              aria-label='Instagram'
            >
              
               <a href='https://www.instagram.com/'>
                 <i  class='fab fa-instagram'></i></a>
            </Link>
            
            
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <a href='https://www.youtube.com/'>
              <i class='fab fa-youtube'></i></a>
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <a href='https://www.twitter.com/'>
              <i class='fab fa-twitter'></i></a>
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <a href='https://www.LinkedIn.com/'>
              <i class='fab fa-linkedin'></i></a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
