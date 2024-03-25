import { useState, useEffect } from 'react';
import CarTable from '../components/CarTable';

interface Car {
  name: string;
  time: string;
}

interface CarData {
  length: number;
  cars: Car[];
}

const Home = () => {
  const [carData, setCarData] = useState<CarData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://r1todo.vercel.app/api/getTodaysCars');
        const data = await response.json();
        setCarData(data);
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Šodien pierakstā {carData && carData.length} mašīnas. </h1>
      <h1>Vēl palikušas {carData && carData.length} mašīnas. </h1>
      {carData ? <CarTable data={carData} /> : <p>Loading...</p>}
    </div>
  );
};

export default Home;
