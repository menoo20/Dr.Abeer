import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Post.scss";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Post = ({
  img,
  lNumber,
  unitName,
  modrakat,
  ahdafM,
  ahdafW,
  strategies,
  methods
}) => {
  return (
    <div className="post p-5">
      <Container className="px-lg-5">
        <h1
          className="pb-5 text-center "
          style={{ fontSize: "1.5rem" }}
        >
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
        <h4 className="my-3" style={{"fontSize": "1.3rem"}}>المدركات الأساسية : -</h4>
        <ul>
          {modrakat.map((modrak) => {
            return (
              <li>
                <p>{modrak}</p>
              </li>
            );
          })}
        </ul>
        <h4 className="my-3" style={{"fontSize": "1.3rem"}}>الأهداف السلوكية :-</h4>
        <p> في نهاية هذا الدرس من المتوقع ان تكون التلميذة قادرة علي ان : -</p>
        <h4 className="my-3" style={{"fontSize": "1.3rem"}}>االأهداف المعرفية : -</h4>
        <ul>
          {ahdafM.map((hadaf) => {
            return (
              <li>
                <p>{hadaf}</p>
              </li>
            );
          })}
        </ul>
        <h4 className="my-3" style={{"fontSize": "1.3rem"}}>االأهداف الوجدانية : -</h4>
        <ul>
          {ahdafW.map((hadaf) => {
            return (
              <li>
                <p>{hadaf}</p>
              </li>
            );
          })}
        </ul>
        <h4 className="my-3" style={{"fontSize": "1.3rem"}}>استراتيجية التعليم المستخدمة : -</h4>
        <ul>
          {strategies.map((strategy) => {
            return (
              <li>
                <p>{strategy}</p>
              </li>
            );
          })}
        </ul>
        <h4 className="my-3" style={{"fontSize": "1.3rem"}}>اساليب التعلم المستخدمة : -</h4>
        <ul>
          {methods.map((method) => {
            return (
              <li>
                <p>{method}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
};

export default Post;
