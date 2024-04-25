import { FC } from 'react'
import './index.css'

interface CarProps {
    image: string,
    title: string,
    start_production: number,
    class:string,
}

const Car: FC<CarProps>= (props) => {
  return (
      <div className='card-wrap'>
          <img src={props.image}  alt="" />
          <h3>{props.title}</h3>
          <h4>{props.start_production}</h4>
          <h4>{ props.class}</h4>
    </div>
  )
}

export default Car