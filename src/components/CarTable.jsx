import React from 'react';

const CarTable = ({ data, inputDate }) => {
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

  // Function to check if a given time is earlier than the current time
  const isEarlierThanCurrentTime = (time) => {
    const currentTime = new Date();
    const [currentHours, currentMinutes] = [currentTime.getHours(), currentTime.getMinutes()];
    const [rowHours, rowMinutes] = time.split(':').map(Number);
    return rowHours < currentHours || (rowHours === currentHours && rowMinutes <= currentMinutes);
  };

  // Function to check if the given date is today
  const isToday = (someDate) => {
    const today = new Date();
    const dateParts = someDate.split('-');
    const date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]); // Months are zero-based
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  // Render rows for each time with corresponding cars
  const renderRows = () => {
    const groupedCars = groupCarsByTime();
    const rows = [];
    let lastGreyRow = null; // To keep track of the last gray row encountered
    for (const time in groupedCars) {
      if (groupedCars.hasOwnProperty(time)) {
        const cars = groupedCars[time];
        const timeRowSpan = cars.length;
        const rowStyle = {};
        if (isToday(inputDate)) {
          if (isEarlierThanCurrentTime(time)) {
            // Rows earlier than current time and today are gray
            rowStyle.backgroundColor = '#d8d8d8';
            lastGreyRow = time; // Update last gray row
          } else if (lastGreyRow === time) {
            // Apply blue background to the last gray row
            rowStyle.backgroundColor = '#a0e0ff';
          }
        }
        cars.forEach((car, index) => {
          rows.push(
            <tr key={`${time}-${index}`} className="border-b" style={rowStyle}>
              {index === 0 && (
                <th rowSpan={timeRowSpan} className="border-r px-4 py-2">{time}</th>
              )}
              <td className="items-center px-4 py-2">
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
