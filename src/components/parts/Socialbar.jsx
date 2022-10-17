import React from "react";
import Container from "react-bootstrap/esm/Container";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Socialbar = () => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      under construction
    </Tooltip>
  );

  const twitterTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Not Yet!
    </Tooltip>
  );

  return (
    <>
      <Container className="py-3 small">
        <div className="d-flex justify-content-end align-items-center">
          <a
            href="mailto:menooteaching@gmail.com"
            style={{ textDecoration: "none", color: "black" }}
            target="_blank"
            rel="noreferrer"
          >
            <p >
              <i className="bi bi-envelope-fill mx-1"> </i>
            </p>
          </a>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={twitterTooltip}
          >
            <p>
              <i
                className="bi bi-twitter mx-1"
                style={{ color: "#00acee" }}
              ></i>
            </p>
          </OverlayTrigger>
          <a
            href="https://www.facebook.com/abeer.elakramy"
            target="_blank"
            rel="noreferrer"
          >
            <p>
              <i
                className="bi bi-facebook mx-1"
                style={{ color: "#3b5998" }}
              ></i>
            </p>
          </a>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <p>
              <i
                className="bi bi-youtube mx-1"
                style={{ color: "#ff0000" }}
              ></i>
            </p>
          </OverlayTrigger>

          <a
            href="https://wa.me/+201228205112"
            target="_blank"
            rel="noreferrer"
          >
            <p>
              <i
                className="bi bi-whatsapp mx-1"
                style={{ color: "#25d469" }}
              ></i>
            </p>
          </a>
        </div>
      </Container>
      <hr className="m-0" style={{color: "#ffec97" , backgroundColor: "#ffec97", height:"4px", opacity:"1"}}></hr>
    </>
  );
};

export default Socialbar;
