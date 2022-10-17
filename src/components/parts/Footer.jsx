import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left col-md-4 col-sm-6 px-2">
        <p className="about text-md-end">
          <span> عن الموقع</span> هذا الموقع يتبني فكرة التعليم المدمج في مادة
          الاقتصاد المنزلي لنعرض من خلاله منهج الصف الثاني الاعدادي لتدريسه داخل
          الفصل الدراسي وجهاً لوجه معي وعن طريق التعلم الذاتي لطالباتي عن طريق
          هذا الموقع لنستطيع ان ننمي بعض المهارات مثل مهارات التفكير البصري
          والمهارات العملية الانتاجية والتحصيل لطالبات الصف الثاني الاعدادي
        </p>
        <div className="icons text-md-end">
          <a href="https://www.facebook.com/abeer.elakramy" target="_blank" rel="noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://wa.me/+201228205112" target="_blank" rel="noreferrer">
            <i className="bi bi-whatsapp"></i>
          </a>
          <Link to="/">
            <i className="bi bi-linkedin"></i>
          </Link>
          <Link to="/">
            <i className="bi bi-instagram"></i>
          </Link>
        </div>
      </div>
      <div className="footer-center col-md-4 col-sm-6 col-12">
        <div>
          <p className="small">
            <span> ش السلطان حسين عم رقم 12</span> مصر , إسماعيلية
          </p>
          <i className="bi bi-geo-alt"></i>
        </div>
        <div className="mb-2">
          <p dir="ltr" className="small">
            {" "}
            (+20) 1228205112
          </p>
          <i className="bi bi-telephone"></i>
        </div>
        <div>
          <p>
            <a href="mailto:menooteaching@gmail.com" className="small" style={{fontSize: "12px"}}>
              {" "}
              menooteaching@gmail.com
            </a>
          </p>
          <i className="bi bi-envelope"></i>
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        <h4>
          {" "}
          Dr/Abeer<span> Mohammed</span>
        </h4>
        <p className="menu">
          <Link to="/">
            الرئيسية<span className="mx-2">|</span>
          </Link>
          <Link to="/about">
            عن الباحثة<span className="mx-2">|</span>
          </Link>
          <Link to="/unit1">
            المحتوى<span className="mx-2">|</span>
          </Link>
          <Link to="/extras">معلومات إثرائية</Link>
        </p>
        <p className="name"> Dr.Abeer Mohammed &copy; 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
