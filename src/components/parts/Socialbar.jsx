import React from "react";
import Container from "react-bootstrap/esm/Container";

const Socialbar = () => {
  return (
    <>
      <Container className="py-3 small">
        <div className="d-flex justify-content-end align-items-center">
          <p>
            menooteaching@gmail.com<i className="bi bi-envelope-fill mx-1"> </i>
          </p>
          <p>
            <i className="bi bi-twitter mx-1" style={{ color: "#00acee" }}></i>
          </p>
          <p>
            <i className="bi bi-facebook mx-1" style={{ color: "#3b5998" }}></i>
          </p>
          <p>
            <i className="bi bi-youtube mx-1" style={{ color: "#ff0000" }}></i>
          </p>
          <p>
            <i className="bi bi-whatsapp mx-1" style={{ color: "#25d469" }}></i>
          </p>
        </div>
      </Container>
      <hr className="m-0"></hr>
    </>
  );
};

export default Socialbar;
