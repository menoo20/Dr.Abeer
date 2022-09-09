import React from "react";
import "./Post.scss";

import { Container } from "react-bootstrap";

const Post = ({ img, lNumber, p1, p2, p3, youtubeSrc, youtubeTitle }) => {
  return (
    <div className="post p-5">
      <Container className="px-lg-5">
        <h1>الدرس {lNumber} عنوان</h1>
        <figure className="figure my-4">
          <img
            src={img}
            className="figure-img img-fluid rounded "
            alt="lesson 1"
          ></img>
          <figcaption className="figure-caption text-center">
            هذه الصورة توضح العلاقة بين المرضى والاطباء وكيف تتم المعالجة
          </figcaption>
        </figure>
        <p>{p1}</p>
        <p className="small mt-5 mb-3">{p2}</p>
        <div className="ratio ratio-16x9 rounded">
          <iframe
            src={youtubeSrc}
            title={youtubeTitle}
            allowFullScreen
          ></iframe>
        </div>
        <p className="small mt-4">{p3}</p>
        <p className="small mt-4">
          هي جزء لا يتجزأ من الصحة والرفاه اللذين يدعمان قدراتنا الفردية
          والجماعية على اتخاذ القرارات وإقامة العلاقات وتشكيل العالم الذي نعيش
          فيه. والصحة النفسية هي حق أساسي من حقوق الإنسان. وهي حاسمة الأهمية
          للتنمية الشخصية والمجتمعية والاجتماعية الاقتصادية
        </p>
      </Container>
    </div>
  );
};

export default Post;
