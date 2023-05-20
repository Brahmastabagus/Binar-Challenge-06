import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import CarIMG from "../../assets/img/img_car.png";

const Jumbotron = () => {
  return (
    <>
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
    </>
  )
}

export default Jumbotron