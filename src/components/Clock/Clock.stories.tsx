


import React, {useState} from "react";
import {Clock} from "./Clock";
import {Accordion} from "../Accordion/Accordion";



export default {
    title: 'Clock',
    component: Clock
};


export const BaseAnalogExample = () => {

    return <Clock mode={'analog'} />
}

export const BaseDigitalExample = () => {

    return <Clock mode={'digital'}/>
}
