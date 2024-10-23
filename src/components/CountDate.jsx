import { useState, useEffect } from 'react';

function CountDates() {
    const [time, setTime] = useState(new Date());

    // useEffect to set up the interval
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date()); // Update time every second
        }, 1000); // 1000ms = 1 second

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);
    
    // Current date/time in milliseconds
    const today = time.getTime();

    // Create a Date object for the target date '30-10-2024'
    const targetDate = new Date('2024-10-30T00:00:00'); // Set target date and time to midnight
    const targetTime = targetDate.getTime();

    // Calculate the difference in milliseconds between the target date and current time
    const timeDifferenceMs = targetTime - today;

    // Calculate hours, minutes, and seconds from the time difference
    const diffHours = Math.floor(timeDifferenceMs / (1000 * 60 * 60)) % 24;
    const diffMinutes = Math.floor((timeDifferenceMs / (1000 * 60)) % 60);
    const diffSeconds = Math.floor((timeDifferenceMs / 1000) % 60);

    // Format the remaining time (HH:MM:SS) with leading zeros
    const formattedTimeDifference = `${String(diffHours).padStart(2, '0')}:${String(diffMinutes).padStart(2, '0')}:${String(diffSeconds).padStart(2, '0')}`;

    // Calculate the difference in days
    const dayDifference = Math.ceil(timeDifferenceMs / (1000 * 60 * 60 * 24));

    return (
        <div className="App flex flex-col items-center bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-md">
            <h1 className="text-center text-4xl font-bold mb-5 mt-3">นับถอยหลัง</h1>
            <div className="flex flex-wrap justify-center items-center gap-6 bg-white text-blue-600 rounded-lg shadow-lg p-8 mb-6">
                <div className="flex flex-col items-center">
                    <h2 className="text-7xl font-semibold text-red-600">{dayDifference}</h2>
                    <p className="text-lg text-red-600">วัน</p>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-4xl font-semibold">{formattedTimeDifference}</h2>
                    <p className="text-lg">ชั่วโมง นาที วินาที</p>
                </div>
            </div>
        </div>


    );
}

export default CountDates;
