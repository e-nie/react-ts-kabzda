import {useEffect, useState} from "react";

type Propstype = {}

const get2digitsString = (num: number) => num < 10 ? '0' + num : num

export const Clock: React.FC<Propstype> = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
            debugger
        const intervalID = setInterval(() => {
            console.log('TiK');
            setDate(new Date())
        }, 1000)

        return ()=> {
                debugger
            clearInterval(intervalID)
        }

    }, []);


    return <div>
        <span>{get2digitsString(date.getHours())}</span>
        :
        <span>{get2digitsString(date.getMinutes())}</span>
        :
        <span>{get2digitsString(date.getSeconds())}</span>
    </div>
}
