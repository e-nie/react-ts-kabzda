import {ClockViewPropsType} from "./Clock";
import     './AnalogClockView.css'

export const AnalogClockView: React.FC<ClockViewPropsType> = ({date}) => {
    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };
    return <div className = {"clock"}>
        <div className={"analog-clock"}>
            <div className={"dial seconds"} style={secondsStyle} />
            <div className={"dial minutes"} style={minutesStyle} />
            <div className={"dial hours"} style={hoursStyle} />
        </div>
        <div className = {"digital-clock"}></div>
    </div>
}
