import React, { useRef, useState } from 'react';

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

export const ControlledInputWithFixedValue = () => <input value = 'it-incubator.by' />;
