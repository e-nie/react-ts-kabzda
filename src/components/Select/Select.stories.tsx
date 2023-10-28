import React, {useState} from 'react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select
}

export const BaseExampleWithValue = () => {
    const [value, setValue] = useState('2');
    return <>
        <Select
            value = {value}
            onChange = {setValue}
            items = {[
                {value: '1', title: 'Moscow'},
                {value: '2', title: 'Minsk'},
                {value: '3', title: 'Kyiv'}
            ]}
        />
    </>
}

export const BaseExampleWithoutValue = () => {
    const [value, setValue] = useState(null);

    return <>
        <Select
            value = {value}
            onChange = {setValue}
            items = {[
                {value: '1', title: 'Moscow'},
                {value: '2', title: 'Minsk'},
                {value: '3', title: 'Kyiv'}
            ]}
        />
    </>
}
