import React from 'react';
import './footer.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>
          ShopMe is your one-stop online store where you can find everything you need! 
          From clothing and electronics to beauty products and home essentials, we have it all. Shop with ease and confidence at ShopMe! 😊
          </p>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li><Link href="/list">Shop</Link></li>
            <li><Link href="/">Contact Us</Link></li>
            <li><Link href="/">About Us</Link></li>
            <li><Link href="/">FAQ</Link></li>
            <li><Link href="/">Terms & Conditions</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Customer Service</h2>
          <ul>
            <li><Link href="/bseller">Returns</Link></li>
            <li><Link href="/list">Shipping Info</Link></li>
            <li><Link href="/">Support</Link></li>
            <li><Link href="/">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: abc@gmail.com</p>
          
          <p>Address: Karachi, Sindh Pakistan</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Shop Me.Com. All rights reserved.</p>
        <div className="social-icons">
          <Link href="#"  rel="noreferrer">Facebook</Link>
          <Link href="#"  rel="noreferrer">Instagram</Link>
          <Link href="#"  rel="noreferrer">LinkedIn</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
