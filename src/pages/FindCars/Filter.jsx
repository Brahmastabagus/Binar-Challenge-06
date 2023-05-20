import React from 'react'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'

const Filter = ({ formValue, setFormValue, handleSubmit }) => {
  return (
    <>
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
                        <Form.Label htmlFor="cars">Tipe Driver</Form.Label>
                        <Form.Select
                          id="tipe-driver"
                          aria-label="Default select example"
                          required
                          onChange={(e) => setFormValue({ ...formValue, tipe: e.target.value })}>
                          <option selected disabled>Pilih tipe driver</option>
                          <option value="Default">Semua</option>
                          <option value="true">Dengan supir</option>
                          <option value="false">Tanpa Sopir (Lepas Kunci)</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group
                        className="d-flex flex-column align-items-xl-start align-items-lg-start align-items-md-center align-items-sm-center align-items-center justify-content-center">
                        <Form.Label htmlFor="tanggal">Tanggal</Form.Label>
                        <Form.Control id="tanggal" type="date" className="find__forms" placeholder="Pilih tanggal" onChange={(e) => setFormValue({ ...formValue, tanggal: e.target.value })} />
                      </Form.Group>
                      <Form.Group
                        className="d-flex flex-column align-items-xl-start align-items-lg-start align-items-md-center align-items-sm-center align-items-center justify-content-center">
                        <Form.Label htmlFor="waktu-jemput">Waktu Jemput/Ambil<sup
                          style={{ color: "red" }}>*</sup></Form.Label>
                        <Form.Control className="find__forms" type="time" name="time" id="waktu-jemput"
                          placeholder="Pilih waktu" required onChange={(e) => setFormValue({ ...formValue, jemput: e.target.value })} />
                      </Form.Group>
                      <Form.Group
                        className="d-flex flex-column align-items-xl-start align-items-lg-start align-items-md-center align-items-sm-center align-items-center justify-content-center">
                        <Form.Label htmlFor="jumlah-penumpang">Jumlah Penumpang (optional)</Form.Label>
                        <Form.Control id="jumlah-penumpang" type="number" name=""
                          placeholder="Jumlah penumpang" onChange={(e) => setFormValue({ ...formValue, penumpang: e.target.value })} />
                      </Form.Group>
                      <div className="mt-xl-0 mt-lg-0 mt-md-2 mt-sm-2 mt-2">
                        <Button id="load-btn" type="submit" className="btn-lime-green" variant='success' onClick={handleSubmit}>Cari Mobil</Button>
                      </div>
                    </div>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Filter