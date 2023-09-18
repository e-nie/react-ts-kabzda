import {action} from '@storybook/addon-actions';
import {useState} from "react";
import {OnOff} from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff
};


const callback = action('on or off clicked')
export const OnMode = () => <OnOff on = {true} onChange = {callback} />
export const OffMode = () => <OnOff on = {false} onChange = {callback} />


export const ChangeMode = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff on = {value} onChange = {setValue} />
}


