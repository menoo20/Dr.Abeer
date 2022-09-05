import React from "react";
import "./Post.scss";
import lesson1 from "../images/3.jpg";

const Post = () => {
  return (
    <div className="post p-5">
      <h1>الدرس الاول عنوان</h1>
      <figure class="figure my-4">
        <img
          src={lesson1}
          className="figure-img img-fluid rounded "
          alt="lesson 1"
        ></img>
        <figcaption class="figure-caption text-center">
          هذه الصورة توضح العلاقة بين المرضى والاطباء وكيف تتم المعالجة
        </figcaption>
      </figure>
      <p className="small mt-5">
        هي جزء لا يتجزأ من الصحة والرفاه اللذين يدعمان قدراتنا الفردية والجماعية
        على اتخاذ القرارات وإقامة العلاقات وتشكيل العالم الذي نعيش فيه. والصحة
        النفسية هي حق أساسي من حقوق الإنسان. وهي حاسمة الأهمية للتنمية الشخصية
        والمجتمعية والاجتماعية الاقتصادية
      </p>
    </div>
  );
};

export default Post;
