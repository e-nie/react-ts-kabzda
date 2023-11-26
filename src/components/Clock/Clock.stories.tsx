import {action} from '@storybook/addon-actions';
import type {Meta, StoryObj} from '@storybook/react';


import React, {useState} from "react";
import {Clock} from "./Clock";
import {Accordion} from "../Accordion/Accordion";



export default {
    title: 'Clock',
    component: Clock
};


export const BaseExample = () => {

    return <Clock />
}
