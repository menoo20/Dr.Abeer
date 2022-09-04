import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left col-md-4 col-sm-6">
        <p className="about">
          <span> About the company</span> Ut congue augue non tellus bibendum,
          in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus
          odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer
          tellus est, vehicula eu lectus tincidunt, ultricies feugiat leo.
          Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue.
          Nam ut nibh mollis, tristique ante sed, viverra massa.
        </p>
        <div className="icons">
          <Link to="/">
            <i className="bi bi-facebook"></i>
          </Link>
          <Link to="/">
            <i className="bi bi-twitter"></i>
          </Link>
          <Link to="/">
            <i className="bi bi-linkedin"></i>
          </Link>
          <Link to="/">
            <i className="bi bi-instagram"></i>
          </Link>
        </div>
      </div>
      <div className="footer-center col-md-4 col-sm-6 col-12">
        <div >
          
          <p className="small">
            <span> ش السلطان حسين عم رقم 12</span> مصر , إسماعيلية 
          </p>
          <i className="bi bi-geo-alt"></i>
        </div>
        <div className="mb-2">
          
          <p dir="ltr" className="small"> (+20) 106 5868 177</p>
          <i className="bi bi-telephone"></i>
        </div>
        <div>
          
          <p>
            <Link to="/" className="small"> menooteaching@gmail.com</Link>
          </p>
          <i className="bi bi-envelope"></i>
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        <h2>
          {" "}
          Company<span> logo</span>
        </h2>
        <p className="menu">
     
          <Link to="/">الرئيسية<span className="mx-2">|</span></Link>
          <Link to="/">
            عن الباحثة<span className="mx-2">|</span>
          </Link>
          <Link to="/">
            المحتوى<span className="mx-2">|</span>
          </Link>
          <Link to="/">
            السيرة الذاتية<span className="mx-2">|</span>
          </Link>
          <Link to="/">
            معلومات إثرائية
          </Link>
        </p>
        <p className="name"> Company Name &copy; 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
