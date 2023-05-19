import { Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from "../assets/svg/logo.svg";
import Facebook from "../assets/svg/icon_facebook.svg";
import Instagram from "../assets/svg/icon_instagram.svg";
import Twitter from "../assets/svg/icon_twitter.svg";
import Mail from "../assets/svg/icon_mail.svg";
import Twitch from "../assets/svg/icon_twitch.svg";
import User from "../assets/svg/fi_users.svg";
import Setting from "../assets/svg/fi_settings.svg";
import Calender from "../assets/svg/fi_calendar.svg";
import CarIMG from "../assets/img/img_car.png";
// import * as Img from '../assets/images/'
import { useEffect, useState } from 'react';

const FindCars = () => {
  const [data, setData] = useState([])
  const [formValue, setFormValue] = useState([])
  const [filterData, setFilterData] = useState([])
  const api = "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"

  const getData = async () => {
    const res = await fetch(api)
    const datas = await res.json()

    setData(datas)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // const tipe = e.target.value
    // if (tipe === "Default") {
    //   setFilterData(data)
    // } else {
    //   const filterData = data.filter((data) => data.available === Boolean(tipe))

    //   setFilterData(filterData)
    // }

    const filter = data.filter((data) => {
      const dataTime = new Date(data.availableAt)
      const miliDataTime = Number(dataTime.getTime())
      const dateFilter = miliDataTime > formValue.jemput
      const capacityFilter = data.capacity == formValue.penumpang
      const tipe = formValue.tipe === "true" ? true : false
      // const nameDriver = tipe === true ? "Dengan Supir" : "Tanpa Supir"
      const tipeDriverFilter = tipe === data.available

      
      if (formValue.tipe && formValue.jemput && formValue.tanggal && formValue.penumpang) {
        return tipeDriverFilter && capacityFilter && dateFilter
      } else if (formValue.tipe && formValue.jemput && formValue.tanggal) {
        console.log("kk");
        return tipeDriverFilter && dateFilter
      } else if (formValue.tipe && formValue.penumpang) {
        console.log("ll");
        return tipeDriverFilter && capacityFilter
      } else if (formValue.tipe) {
        return tipeDriverFilter
      } else if (formValue.tipe === "Default") {
        return data
      } {
        return false
      }
      // console.log(formValue.tipe);
      // data.available === Boolean(tipe)
    })
    console.log(filter);

    setFilterData(filter)

    // console.log(formValue);
  }

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
              className="mx-lg-auto mx-md-auto mx-sm-auto mx-auto jumbotron__main">
              <h1 className="jumbotron__title text-title">Sewa & Rental Mobil Terbaik di kawasan Purbalingga</h1>
              <p className="jumbotron__desc text-desc">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
                terbaik dengan
                harga terjangkau. Selalu siap
                melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            </Col>
            <Col xl={6} lg={12} md={12} className="jumbotron__img">
              <Image src={CarIMG} alt="car image" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="find" id="find">
        <Container fluid={"xl"}>
          <div className="d-flex justify-content-center">
            <Card className="shadow">
              <Card.Body className="p-4">
                <Form id="myForm" action="#" method="get">
                  <Row>
                    <div
                      className="d-flex flex-xl-row flex-lg-row flex-md-column flex-sm-column flex-column justify-content-around align-items-xl-end align-items-lg-end align-items-sm-center align-items-md-center align-items-center gap-2">
                      <Form.Group
                        className="d-flex flex-column align-items-xl-start align-items-lg-start align-items-md-center align-items-sm-center align-items-center justify-content-center">
                        <Form.Label for="cars">Tipe Driver</Form.Label>
                        <Form.Select
                          id="tipe-driver"
                          aria-label="Default select example"
                          // value={formValue.tipe}
                          onChange={(e) => setFormValue({ ...formValue, tipe: e.target.value })}>
                          <option selected value="Default">Pilih tipe driver</option>
                          <option value="true">Dengan supir</option>
                          <option value="false">Tanpa Sopir (Lepas Kunci)</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group
                        className="d-flex flex-column align-items-xl-start align-items-lg-start align-items-md-center align-items-sm-center align-items-center justify-content-center">
                        <Form.Label for="tanggal">Tanggal</Form.Label>
                        <Form.Control id="tanggal" type="date" className="find__forms" placeholder="Pilih tanggal" onChange={(e) => setFormValue({ ...formValue, tanggal: e.target.value })} />
                      </Form.Group>
                      <Form.Group
                        className="d-flex flex-column align-items-xl-start align-items-lg-start align-items-md-center align-items-sm-center align-items-center justify-content-center">
                        <Form.Label for="waktu-jemput">Waktu Jemput/Ambil<sup
                          style={{ color: "red" }}>*</sup></Form.Label>
                        <Form.Control className="find__forms" type="time" name="time" id="waktu-jemput"
                          placeholder="Pilih waktu" required onChange={(e) => setFormValue({ ...formValue, jemput: e.target.value })} />
                      </Form.Group>
                      <Form.Group
                        className="d-flex flex-column align-items-xl-start align-items-lg-start align-items-md-center align-items-sm-center align-items-center justify-content-center">
                        <Form.Label for="jumlah-penumpang">Jumlah Penumpang (optional)</Form.Label>
                        <Form.Control id="jumlah-penumpang" type="number" name=""
                          placeholder="Jumlah penumpang" onChange={(e) => setFormValue({ ...formValue, penumpang: e.target.value })} />
                      </Form.Group>
                      <div className="mt-xl-0 mt-lg-0 mt-md-2 mt-sm-2 mt-2">
                        <Button id="load-btn" type="submit" className="btn-lime-green" onClick={handleSubmit}>Cari Mobil</Button>
                      </div>
                    </div>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </section>

      <section className="cars" id="cars">
        <Container fluid={"md"}>
          <h1 className="mb-2 text-title__2 cari"></h1>
          <Row xl={3} lg={3} md={2} sm={2} xs={1} id="cars-container" className="gy-3">
            {filterData.map((data) => {
              return (
                <Col>
                  <Card className='shadow'>
                    {/* <img src="" class="card-img-top" alt="${data.manufacture}" /> */}
                    <Card.Img src={`./images${data.image.slice(8)}`} className='card-img-top' thumbnail />
                    <Card.Body>
                      <Card.Body className="p-0">
                        <Card.Subtitle className="text-desc__2">{data.manufacture} {data.model} / {data.type}</Card.Subtitle>
                        <Card.Title className="text-title__3 my-2">Rp {data.rentPerDay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} / hari</Card.Title>
                        <Card.Text className="text-desc desc mb-3">{data.description}</Card.Text>
                      </Card.Body>
                      <ListGroup className="list-group-flush gap-2 mt-4">
                        <ListGroup.Item className="d-flex gap-2">
                          <img src={User} alt="" title="" />
                          <p className="text-desc">{data.capacity} Orang</p>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex gap-2">
                          <img src={Setting} alt="" title="" />
                          <p className="text-desc">{data.transmission}</p>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex gap-2">
                          <img src={Calender} alt="" title="" />
                          <p className="text-desc">Tahun {data.year}</p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <p className="text-desc">{data.available === true ? "Dengan supir" : "Tanpa Supir"}</p>
                        </ListGroup.Item>
                      </ListGroup>
                      <button className="button btn-lime-green mt-4">Pilih Mobil</button>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Container>
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

export default FindCars