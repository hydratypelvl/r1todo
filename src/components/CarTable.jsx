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

  function getTime() {
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    return `${hours}:${minutes}`;
  }

  // Check if a given time is earlier than the current time
  const isEarlierThanCurrentTime = (time) => {
    const [currentHours, currentMinutes] = getTime().split(':').map(Number);
    const [rowHours, rowMinutes] = time.split(':').map(Number);
    return rowHours < currentHours || (rowHours === currentHours && rowMinutes <= currentMinutes);
  };

  // Render rows for each time with corresponding cars
  const renderRows = () => {
    const groupedCars = groupCarsByTime();
    const rows = [];
    let lastGreyRow = null; // To keep track of the last grey row encountered
    for (const time in groupedCars) {
      if (groupedCars.hasOwnProperty(time)) {
        const cars = groupedCars[time];
        const timeRowSpan = cars.length;
        const rowStyle = {};
        if (isEarlierThanCurrentTime(time)) {
          rowStyle.backgroundColor = '#d8d8d8'; // Rows earlier than current time are gray
          lastGreyRow = time; // Update last grey row
        }
        cars.forEach((car, index) => {
          rows.push(
            <tr key={`${time}-${index}`} className="border-b" style={rowStyle}>
              {index === 0 && (
                <th rowSpan={timeRowSpan} className="border-r px-4 py-2">{time}</th>
              )}
              <td className="items-center px-4 py-2">
                {/* <input type="checkbox" className="mr-2" /> */}
                <span>{car}</span>
              </td>
            </tr>
          );
        });
      }
    }
    // Apply green background to the last grey row
    if (lastGreyRow) {
      rows.forEach(row => {
        if (row.key.startsWith(lastGreyRow)) {
          row.props.style.backgroundColor = '#a0e0ff';
        }
      });
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
