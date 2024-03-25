// components/CarTable.js
import React from 'react';

const CarTable = ({ data }) => {
  // Function to group cars by time
  const groupCarsByTime = () => {
    const groupedCars = {};
    data.cars.forEach(car => {
      if (groupedCars[car.time]) {
        groupedCars[car.time].push(...car.name);
      } else {
        groupedCars[car.time] = [...car.name];
      }
    });
    return groupedCars;
  };

  // Render rows for each time with corresponding cars
  const renderRows = () => {
    const groupedCars = groupCarsByTime();
    const rows = [];
    for (const time in groupedCars) {
      if (groupedCars.hasOwnProperty(time)) {
        const cars = groupedCars[time];
        const timeRowSpan = cars.length;
        cars.forEach((car, index) => {
          rows.push(
            <tr key={`${time}-${index}`} className="border-b">
              {index === 0 && (
                <th rowSpan={timeRowSpan} className="border-r px-4 py-2">{time}</th>
              )}
              <td className="items-center px-4 py-2">
                <input type="checkbox" className="mr-2" />
                <span>{car}</span>
              </td>
            </tr>
          );
        });
      }
    }
    return rows;
  };

  return (
    <table className="min-w-full">
      <thead>
        <tr>
          <th className="border-b px-4 py-2">Time</th>
          <th className="border-b px-4 py-2">Cars</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  );
};

export default CarTable;
