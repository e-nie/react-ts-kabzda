import React, { useRef, useState } from 'react';
import { action } from '@storybook/addon-actions';


export default {
    title: 'input',
};

export const UncontrolledInput = () => <input />;

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('');

    const onChange = (e) => {
        const actualValue = e.currentTarget.value;
        setValue(actualValue);
    };

    return <><input value = { value } onChange = { onChange } />{ value } </>;
};


export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef(null);

    const save = () => {
        const el = inputRef.current;
        setValue(el.value);
    };


    return <><input ref = { inputRef } />
        <button onClick = { save }>save</button>
        actual value: { value } </>;
};

export const ControlledInput = () => {

    const [parentValue, setParentValue] = useState('');

    const onChange = (e) => {
        setParentValue(e.currentTarget.value);
    };
    return <input value = { parentValue } onChange = { onChange } />;
};

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true);
    const onChange = (e) => {
        setParentValue(e.currentTarget.checked);
    };
    return <input type = { 'checkbox' } checked = { parentValue } onChange = { onChange } />;
};

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState('1');
    const onChange = (e) => {
        setParentValue(e.currentTarget.value);
    };
    return <select value={parentValue} onChange={onChange}>
        <option >none</option>
        <option value = '1'>Minsk</option>
        <option value = '2'>Moscow</option>
        <option value = '3'>Kyiv</option>
    </select>

}


    export const ControlledInputWithFixedValue = () => <input value = 'it-incubator.by' />;
