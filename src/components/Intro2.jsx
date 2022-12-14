import React from "react";
import Container from "react-bootstrap/Container";

const Intro2 = ({ lNumber, img }) => {
  return (
    <div className="post p-0 p-sm-5">
      <Container className=" px-2 px-lg-5">
        <h1 className="text-center pb-4" style={{ fontSize: "1.5rem" }}>
          مقدمة الوحدة الثانية (أسرة متحابة){" "}
        </h1>
        <figure className="figure my-4">
          <img
            src={img}
            className="figure-img img-fluid rounded "
            alt="lesson 1"
          ></img>
        </figure>
        <p className="pb-3">
          من خلال اللقاء التمهيدي مع التلميذات وبعد القاء السلام علي التلميذات ،
          سيتم تهيئة الوحدة .
        </p>
        <p className="pb-3">
          من خلال عرض صور لأسرتين احدهما مجتمعة مع بعضها ويظهر عليهم السعادة
          والاخرى يجلس كل منهم بمفرده ثم اسألهن اي الاسرتين هو حال اسرتك ؟
          وايهما تفضلين ؟ ولماذا ؟
        </p>
        <p className="pb-3">
          استمع لآرائهن و استجابتهن ونتناقش فيها ، ثم أسألهن عن أهمية التقارب
          والتعاون واستماع افراد الاسرة لبعضهم البعض ؟
        </p>
        <p className="pb-3">
          اتلقي استجابتهن ثم أوضح لهن ان لتوفير حياة اسرية سعيدة يسود بين
          أفرادها الحب و الحنان و الترابط و التألف لابد من احساس كل فرد
          بمسئوليته تجاه الاخر و البعد عن الانانية وحب الذات ، وضرورة تفهم كل
          فرد لمسئوليته في اسرته
        </p>
        <p className="pb-3">وهذا ما سنتناوله في  موضوعات وحدتنا ( اسرة متحابة )</p>
        <h3 className="pb-3" style={{ fontSize: "1.3rem" }}>
          دروس الوحدة :
        </h3>
        <ul>
          <li>
            <p>تفهم دور و مسئوليات الفرد في الاسرة</p>
          </li>
          <li>
            <p>العوامل المؤثرة علي دور الفرد في الاسرة</p>
          </li>
          <li>
            <p>أثاث المسكن</p>
          </li>
          <li>
            <p>العناية بأثاث المسكن</p>
          </li>
          <li>
            <p>تجميل المسكن  ( تنفيذ قطعة لتجميل المسكن ( خدادية ) )</p>
          </li>
          <li>
            <p>تابع تجميل المسكن     ( تنفيذ قطعة لتجميل المسكن( مفرش ) )</p>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Intro2;
