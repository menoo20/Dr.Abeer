import React from "react";
import Container from "react-bootstrap/Container";
import Carousel3 from "../components/parts/Carousel3";
import svg from "../images/1.png";

const Home = () => {
  return (
    <Container>
      <header>
        <div className="row justify-content-lg-between justify-content-center align-items-center py-4">
          <div className="col-9 col-lg-6 text-center">
            <img
              className="img-fluid px-4"
              src={svg}
              alt="svg to help illustrat the brain psychology"
            />
          </div>
          <div className="col-10 col-lg-6 text-center">
            <h1 className="display-5">الصحة العقلية</h1>
            <Carousel3
              content1="الصحة النفسية هي حالة من الرفاه النفسي تمكّن الشخص من مواجهة ضغوط الحياة، وتحقيق إمكاناته، والتعلّم والعمل بشكل جيد، والمساهمة في مجتمعه المحلي"
              content2="هي جزء لا يتجزأ من الصحة والرفاه اللذين يدعمان قدراتنا الفردية والجماعية على اتخاذ القرارات وإقامة العلاقات وتشكيل العالم الذي نعيش فيه. والصحة النفسية هي حق أساسي من حقوق الإنسان. وهي حاسمة الأهمية للتنمية الشخصية والمجتمعية والاجتماعية الاقتصادية"
              content3="الصحة النفسية لا تقتصر على غياب الاضطرابات النفسية. فهي جزء من سلسلة متصلة معقدة، تختلف من شخص إلى آخر، وتتسم بدرجات متفاوتة من الصعوبة والضيق، وبحصائل اجتماعية وسريرية يُحتمل أن تكون مختلفة للغاية"
            />
          </div>
        </div>
      </header>
    </Container>
  );
};

export default Home;
