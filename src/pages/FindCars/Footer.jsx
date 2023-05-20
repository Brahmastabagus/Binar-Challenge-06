import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Logo from "../../assets/svg/logo.svg";
import Facebook from "../../assets/svg/icon_facebook.svg";
import Instagram from "../../assets/svg/icon_instagram.svg";
import Twitter from "../../assets/svg/icon_twitter.svg";
import Mail from "../../assets/svg/icon_mail.svg";
import Twitch from "../../assets/svg/icon_twitch.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer container-xl" id="footer">
        <Container fluid={"xl"}>
          <Row>
            <Col xl={12} lg={11} md={11} sm={12} xs={12}
              className="offset-xl-0 offset-lg-1 offset-md-1 offset-sm-0 offset-0">
              <Row xl={4} lg={4} md={2} sm={2} xs={1} className="gy-3">
                <Col>
                  <p className="text-desc">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                  <p className="text-desc mt-3">binarcarrental@gmail.com</p>
                  <p className="text-desc mt-3">081-233-334-808</p>
                </Col>
                <Col className="d-flex flex-column align-items-xl-center align-items-lg-center align-items-md-start">
                  <Col className="footer__link">
                    <a href="#service">
                      <p className="text-desc__2">Our services</p>
                    </a>
                    <a href="#why">
                      <p className="text-desc__2 mt-3">Why Us</p>
                    </a>
                    <a href="#testimonial">
                      <p className="text-desc__2 mt-3">Testimonial</p>
                    </a>
                    <a href="#faq">
                      <p className="text-desc__2 mt-3">FAQ</p>
                    </a>
                  </Col>
                </Col>
                <Col>
                  <p className="text-desc">Connect with us</p>
                  <div className="d-flex flex-wrap mt-3 gap-3">
                    <a href="https://facebook.com" target="_blank">
                      <img src={Facebook} alt="Facebook" title="Facebook" />
                    </a>
                    <a href="https://instagram.com" className="" target="_blank">
                      <img src={Instagram} alt="Instagram" title="Instagram" />
                    </a>
                    <a href="https://twitter.com" className="" target="_blank">
                      <img src={Twitter} alt="Twitter" title="Twitter" />
                    </a>
                    <a href="https://https://mail.google.com/" className="" target="_blank">
                      <img src={Mail} alt="Mail" title="Mail" />
                    </a>
                    <a href="https://twitch.tv" className="" target="_blank">
                      <img src={Twitch} alt="Twitch" title="Twitch" />
                    </a>
                  </div>
                </Col>
                <Col>
                  <p className="text-desc">Copyright Binar 2022</p>
                  <img className="mt-3" src={Logo} alt="Logo" title="Logo" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer