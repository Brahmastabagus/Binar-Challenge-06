import React, { useEffect, useRef, useState } from 'react'
import { Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from "../assets/svg/logo.svg";
import Facebook from "../assets/svg/icon_facebook.svg";
import Instagram from "../assets/svg/icon_instagram.svg";
import Twitter from "../assets/svg/icon_twitter.svg";
import Mail from "../assets/svg/icon_mail.svg";
import Twitch from "../assets/svg/icon_twitch.svg";
import Check from "../assets/svg/fi_check.svg";
import ThumbsUp from "../assets/svg/fi_thumbs-up.svg";
import Tag from "../assets/svg/fi_tag.svg";
import Clock from "../assets/svg/fi_clock.svg";
import Award from "../assets/svg/fi_award.svg";
import Star from "../assets/svg/fi_Star.svg";
import CarIMG from "../assets/img/img_car.png";
import ImgService from '../assets/img/img_service.png'
import Photo1 from '../assets/img/img_photo_1.png'
import Photo2 from '../assets/img/img_photo_2.png'
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
  0: { items: 1 },
  700: { items: 2 },
  768: { items: 2 },
};

const items = [
  <div class="card align-items-center gap-4 testimonial__cards me-2">
    <img src={Photo1} class="testimonial__img-testimonial" alt="..." />
    <div class="card-body d-flex flex-column justify-content-center gap-2">
      <div
        class="testimonial__rate d-flex justify-content-xl-start justify-content-lg-start justify-content-md-center justify-content-sm-center justify-content-center mb-xl-0 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
        <Image class="testimonial__img-rate" src={Star} alt="" title="" />
        <Image class="testimonial__img-rate" src={Star} alt="" title="" />
        <Image class="testimonial__img-rate" src={Star} alt="" title="" />
        <Image class="testimonial__img-rate" src={Star} alt="" title="" />
        <Image class="testimonial__img-rate" src={Star} alt="" title="" />
      </div>
      <p class="text-desc">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod”
      </p>
      <p class="testimonial__text-name">John Dee 32, Bromo</p>
    </div>
  </div>,
  <div class="card align-items-center gap-4 testimonial__cards me-2">
    <img src={Photo2} class="testimonial__img-testimonial" alt="..." />
    <div class="card-body d-flex flex-column justify-content-center gap-2">
      <div
        class="testimonial__rate d-flex justify-content-xl-start justify-content-lg-start justify-content-md-center justify-content-sm-center justify-content-center mb-xl-0 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
        <Image class="testimonial__img-rate" src={Star} alt="" title="" />
        <Image class="testimonial__img-rate" src={Star} alt="" title="" />
        <Image class="testimonial__img-rate" src={Star} alt="" title="" />
        <Image class="testimonial__img-rate" src={Star} alt="" title="" />
        <Image class="testimonial__img-rate" src={Star} alt="" title="" />
      </div>
      <p class="text-desc">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod”
      </p>
      <p class="testimonial__text-name">John Dee 32, Bromo</p>
    </div>
  </div>,
  <div class="card align-items-center gap-4 testimonial__cards me-2">
    <img src={Photo1} class="testimonial__img-testimonial" alt="..." />
    <div class="card-body d-flex flex-column justify-content-center gap-2">
      <div
        class="testimonial__rate d-flex justify-content-xl-start justify-content-lg-start justify-content-md-center justify-content-sm-center justify-content-center mb-xl-0 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
        <Image class="testimonial__img-rate" src={Star} alt="" title="" />
        <Image class="testimonial__img-rate" src={Star} alt="" title="" />
        <Image class="testimonial__img-rate" src={Star} alt="" title="" />
        <Image class="testimonial__img-rate" src={Star} alt="" title="" />
        <Image class="testimonial__img-rate" src={Star} alt="" title="" />
      </div>
      <p class="text-desc">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod”
      </p>
      <p class="testimonial__text-name">John Dee 32, Bromo</p>
    </div>
  </div>,
  <div class="card align-items-center gap-4 testimonial__cards me-2">
    <img src={Photo2} class="testimonial__img-testimonial" alt="..." />
    <div class="card-body d-flex flex-column justify-content-center gap-2">
      <div
        class="testimonial__rate d-flex justify-content-xl-start justify-content-lg-start justify-content-md-center justify-content-sm-center justify-content-center mb-xl-0 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
        <Image class="testimonial__img-rate" src={Star} alt="" title="" />
        <Image class="testimonial__img-rate" src={Star} alt="" title="" />
        <Image class="testimonial__img-rate" src={Star} alt="" title="" />
        <Image class="testimonial__img-rate" src={Star} alt="" title="" />
        <Image class="testimonial__img-rate" src={Star} alt="" title="" />
      </div>
      <p class="text-desc">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod”
      </p>
      <p class="testimonial__text-name">John Dee 32, Bromo</p>
    </div>
  </div>,
  <div class="card align-items-center gap-4 testimonial__cards me-2">
    <img src={Photo1} class="testimonial__img-testimonial" alt="..." />
    <div class="card-body d-flex flex-column justify-content-center gap-2">
      <div
        class="testimonial__rate d-flex justify-content-xl-start justify-content-lg-start justify-content-md-center justify-content-sm-center justify-content-center mb-xl-0 mb-lg-0 mb-md-4 mb-sm-4 mb-4">
        <Image class="testimonial__img-rate" src={Star} alt="" title="" />
        <Image class="testimonial__img-rate" src={Star} alt="" title="" />
        <Image class="testimonial__img-rate" src={Star} alt="" title="" />
        <Image class="testimonial__img-rate" src={Star} alt="" title="" />
        <Image class="testimonial__img-rate" src={Star} alt="" title="" />
      </div>
      <p class="text-desc">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod”
      </p>
      <p class="testimonial__text-name">John Dee 32, Bromo</p>
    </div>
  </div>,
];

const LandingPage = () => {
  const percent = 0.2;
  const section = useRef(null);
  const [padding, setPadding] = useState(0);

  const syncState = () => {
    const { current } = section;
    if (current) {
      setPadding(current.offsetWidth * percent);
    }
  };

  useEffect(syncState, []);
  return (
    <>
      <Navbar key={"md"} bg="light" expand={"md"}>
        <Container fluid>
          <Navbar.Brand className="navbar-brand" href="#">
            <Image src={Logo} alt="Logo" title="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Offcanvas
            id="responsive-navbar-nav"
            aria-labelledby="responsiveLabel-navbar-nav"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="responsiveLabel-navbar-nav">
                BCR
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 align-items-center">
                <Nav.Link className="nav-link active" aria-current="page" href="#service">Our Service</Nav.Link>
                <Nav.Link className="nav-link active" href="#why">Why US</Nav.Link>
                <Nav.Link className="nav-link active" href="#testimonial">Testimonial</Nav.Link>
                <Nav.Link className="nav-link active" href="#faq">FAQ</Nav.Link>
                <Nav.Link className="nav-link active" href="#faq"><Button variant="outline-success">Register</Button></Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <section className="jumbotron" id="jumbotron">
        <Container fluid={"xl"}>
          <Row>
            <Col xl={6} lg={10} md={10} sm={12} xs={12}
              className="mx-lg-auto mx-md-auto mx-sm-auto mx-auto my-auto jumbotron__main">
              <h1 className="jumbotron__title text-title">Sewa & Rental Mobil Terbaik di kawasan Purbalingga</h1>
              <p className="jumbotron__desc text-desc mb-4">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
                terbaik dengan
                harga terjangkau. Selalu siap
                melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
              <Link to="/cars">
                <Button class="jumbotron__button transition-all-200 bg-lime-green" variant='success'>Mulai Sewa Mobil</Button>
              </Link>
            </Col>
            <Col xl={6} lg={12} md={12} className="jumbotron__img">
              <Image src={CarIMG} alt="car image" />
            </Col>
          </Row>
        </Container>
      </section>

      <section class="service" id="service">
        <Container fluid={"xl"}>
          <Row class="row gap-5 justify-content-center">
            <Col xxl={4} xl={5} lg={8} md={10} sm={10} class="d-flex justify-content-center align-items-center">
              <div class="service__img">
                <Image fluid src={ImgService} alt="image service" />
              </div>
            </Col>
            <Col xl={5} lg={10} md={10} sm={12} xs={12} class="mx-xl-0 mx-lg-auto mx-md-auto mx-sm-auto mx-auto">
              <h1 class="service__title text-title__2 mt-4">Best Car Rental for any kind of trip in Purbalingga!</h1>
              <p class="service__desc text-desc mt-4">Sewa mobil di Purbalingga bersama Binar Car Rental jaminan harga lebih
                murah dibandingkan yang lain, kondisi mobil baru,
                serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
              <ul class="list-group mt-3">
                <li class="list-group-item d-flex align-items-center">
                  <div class="service__check bg-light-blue d-flex justify-content-center align-items-center">
                    <Image src={Check} alt="Check" title="Check" />
                  </div>
                  <p class="text-desc">Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                </li>
                <li class="list-group-item d-flex align-items-center">
                  <div class="service__check bg-light-blue d-flex justify-content-center align-items-center">
                    <Image src={Check} alt="Check" title="Check" />
                  </div>
                  <p class="text-desc">Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                </li>
                <li class="list-group-item d-flex align-items-center">
                  <div class="service__check bg-light-blue d-flex justify-content-center align-items-center">
                    <Image src={Check} alt="Check" title="Check" />
                  </div>
                  <p class="text-desc">Sewa Mobil Jangka Panjang Bulanan</p>
                </li>
                <li class="list-group-item d-flex align-items-center">
                  <div class="service__check bg-light-blue d-flex justify-content-center align-items-center">
                    <Image src={Check} alt="Check" title="Check" />
                  </div>
                  <p class="text-desc">Gratis Antar - Jemput Mobil di Bandara</p>
                </li>
                <li class="list-group-item d-flex align-items-center">
                  <div class="service__check bg-light-blue d-flex justify-content-center align-items-center">
                    <Image src={Check} alt="Check" title="Check" />
                  </div>
                  <p class="text-desc">Layanan Airport Transfer / Drop In Out</p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <section class="why container-xl" id="why">
        <div class="row d-flex flex-column align-items-center">
          <div class="col-xl-12 col-lg-10 col-md-10 col-sm-12 col-12">
            <Row>
              <Col>
                <h1 class="why__title text-title__2">Why Us?</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <p class="why__desc text-desc mt-3">Mengapa harus pilih Binar Car Rental?</p>
              </Col>
            </Row>
            <div class="row row-cols-xl-4 row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1 gy-3">
              <Col>
                <div class="card">
                  <div class="card-body p-4">
                    <div class="card-svg d-flex justify-content-center align-items-center bg-warning">
                      <Image src={ThumbsUp} alt="Thumbs" title="Thumbs" />
                    </div>
                    <h5 class="card-title my-3">Mobil Lengkap</h5>
                    <p class="card-text text-desc">
                      Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
                    </p>
                  </div>
                </div>
              </Col>
              <Col>
                <div class="card">
                  <div class="card-body p-4">
                    <div class="card-svg d-flex justify-content-center align-items-center bg-danger">
                      <Image src={Tag} alt="Tag" title="Tag" />
                    </div>
                    <h5 class="card-title my-3">Harga Murah</h5>
                    <p class="card-text text-desc">
                      Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
                    </p>
                  </div>
                </div>
              </Col>
              <Col>
                <div class="card">
                  <div class="card-body p-4">
                    <div class="card-svg d-flex justify-content-center align-items-center bg-dark-blue">
                      <Image src={Clock} alt="Clock" title="Clock" />
                    </div>
                    <h5 class="card-title my-3">Layanan 24 Jam</h5>
                    <p class="card-text text-desc">
                      Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu
                    </p>
                  </div>
                </div>
              </Col>
              <Col>
                <div class="card">
                  <div class="card-body p-4">
                    <div class="card-svg d-flex justify-content-center align-items-center bg-lime-green">
                      <Image src={Award} alt="award" title="award" />
                    </div>
                    <h5 class="card-title my-3">Sopir Profesional</h5>
                    <p class="card-text text-desc">
                      Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
                    </p>
                  </div>
                </div>
              </Col>
            </div>
          </div>
        </div>
      </section>

      <section class="testimonial" id="testimonial">
        <div class="container-xl">
          <div class="row text-center">
            <Col>
              <h1 class="text-title__2">Testimonial</h1>
            </Col>
          </div>
          <div class="row text-center">
            <Col>
              <p class="testimonial__text-desc text-desc">Berbagai review positif dari para pelanggan kami</p>
            </Col>
          </div>
        </div>
        <div ref={section}>
          <AliceCarousel
            infinite
            mouseTracking
            items={items}
            paddingLeft={padding}
            paddingRight={padding}
            onResized={syncState} 
          />
        </div>
      </section>

      <section class="started container-xl" id="started">
        <div class="started__getting d-flex flex-column justify-content-center align-items-center text-white bg-dark-blue">
          <div class="row justify-content-center text-center">
            <div class="col-12">
              <h1 class="started__title">Sewa Mobil di Purbalingga Sekarang</h1>
            </div>
          </div>
          <div class="row text-center justify-content-center">
            <div class="col-8">
              <p class="text-desc mt-3 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna
                aliqua.</p>
            </div>
          </div>
          <Row>
            <Col>
              <Link to="/cars">
                <Button class="jumbotron__button transition-all-200 bg-lime-green" variant='success'>Mulai Sewa Mobil</Button>
              </Link>
            </Col>
          </Row>
        </div>
      </section>

      <section class="faq container-xl" id="faq">
        <Row>
          <div class="col-xl-5 col-lg-4 col-md-10 col-sm-12 col-12 offset-xl-0 offset-lg-1 offset-md-1 offset-0">
            <h1 class="text-title__2 text-xl-start text-lg-start text-md-center text-sm-center text-center">Frequently Asked Question</h1>
            <p class="text-desc text-xl-start text-lg-start text-md-center text-sm-center text-center mt-3 mb-lg-0 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div class="col-xl-7 col-lg-6 col-md-10 col-sm-12 col-12 offset-lg-0 offset-md-1 offset-0">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button text-desc" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    Apa saja syarat yang dibutuhkan?
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body text-desc">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds
                    the appropriate classes that we use to style each element. These classes control the overall appearance, as well
                    as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our
                    default variables. It's also worth noting that just about any HTML can go within the
                    <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button text-desc collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                    aria-expanded="false" aria-controls="collapseTwo">
                    Berapa hari minimal sewa mobil lepas kunci?
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body text-desc">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin
                    adds the appropriate classes that we use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our
                    default variables. It's also worth noting that just about any HTML can go within the
                    <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button text-desc collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                    aria-expanded="false" aria-controls="collapseThree">
                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body text-desc">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin
                    adds the appropriate classes that we use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our
                    default variables. It's also worth noting that just about any HTML can go within the
                    <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button class="accordion-button text-desc collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour"
                    aria-expanded="false" aria-controls="collapseFour">
                    Apakah Ada biaya antar-jemput?
                  </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body text-desc">
                    <strong>This is the fourth item's accordion body.</strong> It is hidden by default, until the collapse plugin
                    adds the appropriate classes that we use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our
                    default variables. It's also worth noting that just about any HTML can go within the
                    <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button class="accordion-button text-desc collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive"
                    aria-expanded="false" aria-controls="collapseFive">
                    Bagaimana jika terjadi kecelakaan
                  </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body text-desc">
                    <strong>This is the fifth item's accordion body.</strong> It is hidden by default, until the collapse plugin
                    adds the appropriate classes that we use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our
                    default variables. It's also worth noting that just about any HTML can go within the
                    <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </section>

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
                      <Image src={Facebook} alt="Facebook" title="Facebook" />
                    </a>
                    <a href="https://instagram.com" className="" target="_blank">
                      <Image src={Instagram} alt="Instagram" title="Instagram" />
                    </a>
                    <a href="https://twitter.com" className="" target="_blank">
                      <Image src={Twitter} alt="Twitter" title="Twitter" />
                    </a>
                    <a href="https://https://mail.google.com/" className="" target="_blank">
                      <Image src={Mail} alt="Mail" title="Mail" />
                    </a>
                    <a href="https://twitch.tv" className="" target="_blank">
                      <Image src={Twitch} alt="Twitch" title="Twitch" />
                    </a>
                  </div>
                </Col>
                <Col>
                  <p className="text-desc">Copyright Binar 2022</p>
                  <Image className="mt-3" src={Logo} alt="Logo" title="Logo" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default LandingPage