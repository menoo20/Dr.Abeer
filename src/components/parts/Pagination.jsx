import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Pagination = ({setPageNumber}) => {
  return (
    <Container>
      <div className="d-flex justify-content-center my-5 gap-3 flex-wrap">
        <Button onClick={() => setPageNumber(0)}>المقدمة</Button>
        <Button onClick={() => setPageNumber(1)}>1</Button>
        <Button onClick={() => setPageNumber(2)}>2</Button>
        <Button onClick={() => setPageNumber(3)}>3</Button>
        <Button onClick={() => setPageNumber(4)}>4</Button>
        <Button onClick={() => setPageNumber(5)}>5</Button>
        <Button onClick={() => setPageNumber(6)}>6</Button>
        <Button onClick={() => setPageNumber(7)}>التقييم</Button>
      </div>
    </Container>
  );
};

export default Pagination;
