import React, { useState, useEffect } from 'react';
import './App.css';

const CountdownTimer: React.FC = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date('2024-08-01T00:00:00') - +new Date();
        let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className={"card"}>
            <h1>Qui sera le plus Grand Puant ?</h1>
            <p>{timeLeft.days} Jours {timeLeft.hours} Heures {timeLeft.minutes} Minutes {timeLeft.seconds} Secondes</p>
        </div>
    );
};

export default CountdownTimer;