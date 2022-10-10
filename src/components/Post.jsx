import React from "react";
import "./Post.scss";
import Container from "react-bootstrap/Container";
import pdf from "../images/pdf.png"

const Post = ({
  img,
  lNumber,
  unitName,
  modrakat,
  ahdafM,
  ahdafW,
  strategies,
  methods,
  view,
  download
}) => {
  return (
    <div className="post p-0 p-sm-5">
      <Container className=" px-2 px-lg-5">
        <h1 className="pb-5 text-center " style={{ fontSize: "1.5rem" }}>
          الدرس {lNumber}{" "}
        </h1>
        <p className="lead fw-bold mb-3">الصف/ الثانى الإعدادى</p>
        <p className="lead fw-bold mb-3">عنوان الوحدة/ {unitName}</p>
        <figure className="figure my-4">
          <img
            src={img}
            className="figure-img img-fluid rounded "
            alt="lesson 1"
          ></img>
        </figure>
        <h4 className="my-3" style={{ fontSize: "1.3rem" }}>
          المدركات الأساسية : -
        </h4>
        <ul>
          {modrakat.map((modrak) => {
            return (
              <li>
                <p>{modrak}</p>
              </li>
            );
          })}
        </ul>
        <h4 className="my-3" style={{ fontSize: "1.3rem" }}>
          الأهداف السلوكية :-
        </h4>
        <p> في نهاية هذا الدرس من المتوقع ان تكون التلميذة قادرة علي ان : -</p>
        <h4 className="my-3" style={{ fontSize: "1.3rem" }}>
          االأهداف المعرفية : -
        </h4>
        <ul>
          {ahdafM.map((hadaf) => {
            return (
              <li>
                <p>{hadaf}</p>
              </li>
            );
          })}
        </ul>
        <h4 className="my-3" style={{ fontSize: "1.3rem" }}>
          االأهداف الوجدانية : -
        </h4>
        <ul>
          {ahdafW.map((hadaf) => {
            return (
              <li>
                <p>{hadaf}</p>
              </li>
            );
          })}
        </ul>
        <h4 className="my-3" style={{ fontSize: "1.3rem" }}>
          استراتيجية التعليم المستخدمة : -
        </h4>
        <ul>
          {strategies.map((strategy) => {
            return (
              <li>
                <p>{strategy}</p>
              </li>
            );
          })}
        </ul>
        <h4 className="my-3" style={{ fontSize: "1.3rem" }}>
          اساليب التعلم المستخدمة : -
        </h4>
        <ul>
          {methods.map((method) => {
            return (
              <li>
                <p>{method}</p>
              </li>
            );
          })}
        </ul>
        <a
          href={view}
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none"
        >
          أقرأ المزيد...
        </a>
        <div className="text-center my-4">
          <a
            className="btn btn-lg text-center btn-dark d-inline-block  "
            href={download}
            role="button"
            dir="ltr"
          >
            Download Pdf
            <img 
            className="img-fluid mx-2" 
            src={pdf} 
            alt="download pdf"
            style={{"verticalAlign": "sub"}} />
          </a>
        </div>
      </Container>
    </div>
  );
};

export default Post;
