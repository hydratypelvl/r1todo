import React, { useState, useEffect } from 'react';
import CarTable from '../components/CarTable';
import { LuCalendarClock } from "react-icons/lu";

interface Car {
  name: string;
  time: string;
}

interface CarData {
  totalCars: number;
  carsLeft: number;
  cars: Car[];
}

const Home = () => {
  const [carData, setCarData] = useState<CarData | null>(null);
  const [inputDate, setInputDate] = useState<string>(getDate());
  const [initialLoad, setInitialLoad] = useState<boolean>(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputDate(event.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await fetch('/api/getTodaysCars', {
        method: 'POST',
        body: JSON.stringify({ inputDate }),
      });
      const data = await response.json();
      setCarData(data);
    } catch (error) {
      console.error('Error fetching car data:', error);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchData();
    setInitialLoad(false); // Set initialLoad to false after submitting
  };

  function getDate() {
    const today = new Date();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const year = today.getFullYear();
    const date = today.getDate();
    return `${year}-${month}-${date}`;
  }

  useEffect(() => {
    if (initialLoad) {
      fetchData();
      setInitialLoad(false);
    }
  }, [initialLoad]);

  return (
    <div>
      
      {carData && <h1>Šodien pierakstā {carData && carData.totalCars} mašīnas. </h1>}
      {carData && <h1>Vēl palikušas {carData && carData.carsLeft} mašīnas. </h1>}
      {carData ? <CarTable data={carData} /> : <p>Loading... R2</p>}

      {carData && 
        <form onSubmit={handleSubmit} className='my-4'>
        
          <div className="relative"> 
            <input type="text"
                  value={inputDate} 
                  onChange={handleInputChange}
                  className="pl-10 pr-4 py-2 border rounded-lg mr-2" 
                  placeholder="Ievadi datumu" /> 
                  
            <div className="absolute inset-y-0 left-0 pl-3  
                        flex items-center  
                        pointer-events-none"> 
                <i className="fas fa-envelope text-gray-400"></i> 
                <LuCalendarClock />
            </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Mainīt</button>

          </div>
        </form>
      } 
    </div>
  );
};

export default Home;
