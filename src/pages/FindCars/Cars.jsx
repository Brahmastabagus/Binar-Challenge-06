import React from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import User from "../../assets/svg/fi_users.svg";
import Setting from "../../assets/svg/fi_settings.svg";
import Calender from "../../assets/svg/fi_calendar.svg";

const Cars = ({ text, filterData }) => {
  return (
    <>
      <section className="cars" id="cars">
        <Container fluid={"md"}>
          <h1 className="mb-2 text-title__2 cari">{text ? `${text}(${filterData.length})` : ""}</h1>
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
    </>
  )
}

export default Cars