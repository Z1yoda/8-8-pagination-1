import { Link } from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <header className='header '>
      <div className="container d-flex justify-content-around">
        <h1 className='text-center'>Cars</h1>
        <div className='d-flex gap-4 align-items-center'>
        <Link className='text-light' to='/pagination1'>Page-Based</Link>
        <Link className='text-light' to='/pagination2'>Scroll-Based</Link>
      </div>
      </div>
      
       </header>
  )
}

export default Header