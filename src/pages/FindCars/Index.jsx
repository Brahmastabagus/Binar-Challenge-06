import { useEffect, useState } from 'react';
import Navigation from './Navigation';
import Jumbotron from './Jumbotron';
import Footer from './Footer';
import Filter from './Filter';
import Cars from './Cars';

const Index = () => {
  const [data, setData] = useState([])
  const [formValue, setFormValue] = useState([])
  const [filterData, setFilterData] = useState([])
  const [text, setText] = useState("")
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

    const filter = data.filter((data) => {
      const dataTime = data.availableAt.slice(0, 10)
      const dateFilter = dataTime > formValue.tanggal
      const capacityFilter = data.capacity >= formValue.penumpang
      const tipe = formValue.tipe === "true" ? true : false
      const nameDriver = tipe === true ? "Dengan Supir" : "Tanpa Supir"
      const tipeDriverFilter = tipe === data.available

      if (formValue.tipe && formValue.jemput && formValue.tanggal && formValue.penumpang) {
        setText(`Menampilkan mobil ${nameDriver} dengan tanggal ${formValue.tanggal} dan jumlah penumpang lebih dari ${formValue.penumpang} orang`)
        return tipeDriverFilter && capacityFilter && dateFilter
      } else if (formValue.tipe == "Default") {
        setText(`Menampilkan semua mobil`)
        return data
      } else if (formValue.tipe && formValue.jemput && formValue.tanggal) {
        setText(`Menampilkan mobil ${nameDriver} dengan tanggal ${formValue.tanggal}`)
        return tipeDriverFilter && dateFilter
      } else if (formValue.tipe && formValue.penumpang) {
        setText(`Menampilkan mobil ${nameDriver} dan jumlah penumpang lebih dari ${formValue.penumpang} orang`)
        return tipeDriverFilter && capacityFilter
      } else if (formValue.tipe) {
        setText(`Menampilkan mobil ${nameDriver}`)
        return tipeDriverFilter
      } else {
        setText(`Tidak ada mobil`)
        return false
      }
    })

    setFilterData(filter)
  }

  return (
    <>
      <Navigation />
      <Jumbotron />
      <Filter formValue={formValue} setFormValue={setFormValue} handleSubmit={handleSubmit} />
      <Cars text={text} filterData={filterData} />
      <Footer />
    </>
  )
}

export default Index