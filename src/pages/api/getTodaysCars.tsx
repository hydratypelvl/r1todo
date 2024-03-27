import { JSDOM } from 'jsdom';
import { NextApiRequest, NextApiResponse } from 'next';

const getTodaysCars = async (req: NextApiRequest, res: NextApiResponse) => {
    const body = JSON.parse(req.body)

    // function getDate() {
    //     const today = new Date();
    //     const month = ('0' + (today.getMonth() + 1)).slice(-2);
    //     const year = today.getFullYear();
    //     const date = today.getDate();
    //     return `${year}-${month}-${date}`;
    // }

    try {
        const response = await fetch(`https://r1riepas.lv/pieraksts`);
        const html = await response.text();
        const dom = new JSDOM(html);
        const document = dom.window.document;
        // const todaysDate = getDate();
        // Atrod tabulu ar norādīto datumu
        const diena = document.querySelectorAll(`div[data-date="${body.inputDate}"]`);
        // Izvēlas Ulbroku
        const ulbroka = diena[0];
    
        const unfilteredCars = Array.from(ulbroka.querySelectorAll('.time-status')).filter(element => {
            // Ensure the element and its textContent are defined
            return element && element.textContent && !element.textContent.includes('Aizņemts');
          });

        const cars = unfilteredCars;
        // Atrod visus pelekos ierakstus
        const grayFields = ulbroka.querySelectorAll('.slot.unavailable.taken-slot'); 
        // Izviltrē visus pelēkos laukus izņemot ar tekstu Aizņemts
        
        const filteredGrayFields = Array.from(grayFields).filter(element => {
            // Ensure the element and its textContent are defined
            return element && element.textContent && !element.textContent.includes('Aizņemts');
          });

        // const filteredElements = Array.from(elements).filter(element => !element.textContent.includes('Aizņemts'));


        // atluksas masinas (Zalajos laukos)
        const carsLeftToday = cars.length;

        const totalCars = carsLeftToday + filteredGrayFields.length;

        // atluksas masinas (Zalajos laukos)
        const carsDoneToday = cars.length;


        // Create an object to store cars grouped by time
        const groupedCars: { [time: string]: { name: string[] } } = {};
        cars.forEach(car => {
            const carNameElement = car.querySelector('.slot.taken-slot');
            const carTimeElement = car.querySelector('.time-slot');
            if (carNameElement && carTimeElement) {
                const carName = carNameElement.textContent?.trim();
                const carTime = carTimeElement.textContent?.trim();
            
                // Check if carName and carTime are defined strings
                if (typeof carName === 'string' && typeof carTime === 'string') {
                    // Check if the time already exists in groupedCars
                    if (groupedCars[carTime]) {
                        // If the time already exists, push the car name to the existing array
                        groupedCars[carTime].name.push(carName);
                    } else {
                        // If the time doesn't exist, create a new array with the car name
                        groupedCars[carTime] = { name: [carName] };
                    }
                } else {
                    // Handle the case where either carName or carTime is not a string
                }
            }
        });

        // Convert groupedCars object into an array
        const carData = Object.entries(groupedCars).map(([time, { name }]) => ({ name, time }));

        res.status(200).json({ carsLeft: carsLeftToday, totalCars: totalCars, cars: carData });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default getTodaysCars;
