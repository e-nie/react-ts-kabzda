import {useEffect, useState} from "react";
import {DigitalClockView} from "./DigitalClockView";
import {AnalogClockView} from "./AnalogClockView";

type Propstype = {
    mode?: 'digital' | 'analog'
}



export const Clock: React.FC<Propstype> = (props) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        debugger
        const intervalID = setInterval(() => {
            console.log('TiK');
            setDate(new Date())
        }, 1000)

        return () => {
            debugger
            clearInterval(intervalID)
        }
    }, []);

    let view
    switch (props.mode) {
        case 'analog' :
            view =<AnalogClockView date={date}/>
            break
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }

    return <div>
        {view}
    </div>
}


export type ClockViewPropsType = {
    date: Date
}

