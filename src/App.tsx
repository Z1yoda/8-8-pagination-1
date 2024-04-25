import React, { useEffect, useState } from 'react';
import './App.css'
import Pagination from '@mui/material/Pagination';
import Car from './components/Car';
import Header from './components/Header';

interface CarType {
    image: string,
    title: string,
    start_production: number,
    class:string,
}

interface ResponseType {
  next: {
    page: number,
    limit: number
  },
  previous: {
    page: number,
    limit: number
  }
  results: CarType[],
  total:number
}

function App() {
  const [cars, setCars] = useState<CarType[]>([])
  const [currentPage, setCurrentPage]= useState<number>(1)
const [limit, setLimit]= useState<number>(10)
const [total, setTotal]= useState<number>(10)

async function getData(limit:number, page:number) {
  try {
    const resp = await fetch(`http://localhost:3000/machines?limit=${limit}&page=${currentPage}`)
    const data: ResponseType = await resp.json()
    setCars(data.results)
    setTotal(data.total)
  } catch (error) {
    console.log(error);
    
  }
}

  useEffect(() => {
    getData(limit, currentPage)
  }, [])

   useEffect(() => {
    getData(limit, currentPage)
  }, [limit, currentPage])

  const handleChange = (_: React.ChangeEvent<unknown>, count: number) => {
    setCurrentPage(count)
    
  }

  return (
    <>
      <div >
       <Header></Header>
        <div className='container mt-5'>
          <div className='cars-wrapper'>
            {
          cars.length > 0 && cars.map((car,index ) => {
            return (
              <Car key={index} image={car.image} title={car.title}start_production={car.start_production} class={car.title}></Car>
            )
          })
        }
          </div>
        </div>
        <div className="container footer mb-5 text-end">
          <Pagination style={{marginLeft: "950px", marginBottom:"15px"}} onChange={handleChange} count={Math.trunc(total / limit)} variant="outlined" shape="rounded" />
          <select value={limit} onChange={(e: React.ChangeEvent<HTMLSelectElement>)=>{setLimit(Number((e.target.value)))}}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={40}>40</option>
          </select>
       </div>
    </div>
    </>
  )
}

export default App
