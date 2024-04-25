import "./index.css";
import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import Car from "../Car";
import Header from "../Header";

interface CarProps {
  image: string;
  title: string;
  start_production: number;
  class: string;
}

const Pagination2 = () => {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);

  const { data } = useFetch<any>(
    `http://localhost:3000/machines?limit=${limit}&page=${page}`
  );



  useEffect(() => {
    if (data && data.results) {
      setCars((prevCars) => [...prevCars, ...data.results]);
    }
  }, [data]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
setLimit(10)
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
    
  }, []);

  const scrollHandler = (e: Event) => {
    const target = e.target as HTMLDocument
    const scrollTop = target.documentElement.scrollTop;
    const scrollHeight = target.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;

    if (scrollTop + clientHeight >= scrollHeight - 5) {

      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div>
      <div>
        <Header />
        <div className="container">
          <div className="cars-wrapper">
            {cars.length > 0 &&
              cars.map((car, index) => (
                <Car
                  key={index}
                  image={car.image}
                  title={car.title}
                  start_production={car.start_production}
                  class={car.title} 
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination2;
