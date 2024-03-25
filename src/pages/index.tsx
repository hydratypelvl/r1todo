// pages/index.js
import { useState, useEffect } from 'react';
import CarTable from '../components/CarTable';

const Home = () => {
  const [carData, setCarData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://r1todo.vercel.app/api/getTodaysCars');
      const data = await response.json();
      setCarData(data);
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
