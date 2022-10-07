import React from 'react'
import Container from "react-bootstrap/Container";
import pdf from "../images/pdf.png"

const Test1 = ({view, download}) => {
  return (
    <div className="post p-5">
    <Container className="px-lg-5">
      <h1 className="text-center pb-4" style={{"fontSize": "1.5rem"}}>تقييم الوحدة الأولى (أسرة مفكرة) </h1>
      <p className="lead py-5 text-center">
        يرجى التوجه مباشرة إلى رابط التقييم . أفضل التمنيات لكم بالتوفيق والنجاح
      </p>
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
    )
}

export default Test1