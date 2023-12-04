import React, {useEffect, useState} from "react";
import s from './MyClock.module.css'

type PropsType = {
    isAnalog: boolean
}

const get2digitsString = (num: number) => num < 10 ? '0' + num : num

export const MyClock: React.FC<PropsType> = ({isAnalog}) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            console.log('TiK');
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, []);

    const renderDigitalClock = () => {
        return (
            <div>
                <span>{get2digitsString(date.getHours())}</span>
                :
                <span>{get2digitsString(date.getMinutes())}</span>
                :
                <span>{get2digitsString(date.getSeconds())}</span>
            </div>
        )
    }

    const renderAnalogClock = () => {
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()

        // Calculate the rotation angles for each hand

        const hourRotation = (hours % 12) * 30 + minutes * 0.5
        const minuteRotation = (minutes % 6) * 30 + seconds * 0.1
        const secondsRotation = seconds * 6

        const secondsStyle = {
            transform: `rotate(${date.getSeconds() * 6}deg)`
        };
        const minutesStyle = {
            transform: `rotate(${date.getMinutes() * 6}deg)`
        };
        const hoursStyle = {
            transform: `rotate(${date.getHours() * 30}deg)`
        };


        return (
            <div className = {s.analogClock}>
                <div className={`${s.hand} ${s.hourHand}`}
                     style={{ transform: `rotate(${secondsStyle}deg)` }}></div>
                <div className={`${s.hand} ${s.minuteHand}`}
                     style={{ transform: `rotate(${minutesStyle}deg)` }}></div>
                <div className={`${s.hand} ${s.secondHand}`}
                     style={{ transform: `rotate(${secondsStyle}deg)` }}
                ></div>
            </div>
        )
    }

    return (
        <div>
            {isAnalog ? renderAnalogClock() : renderDigitalClock()}
        </div>
    )
}
