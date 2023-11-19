import React, {useMemo, useState} from "react";

export default {
    title: 'useState demo'
}

function generateData() {
    console.log('Generate Data');
    return 1
}

export const Example1 = () => {
    console.log('Example');

    // const  initialValue = useMemo(generateData,[])

    const [counter, setCounter] = useState<number>(generateData); // отработает один раз, тк реакт не умеет запоминать функции


    return <>
        <button onClick = {() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}



