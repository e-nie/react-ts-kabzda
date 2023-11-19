import React, {useEffect,  useState} from "react";


export default {
    title: 'useEffect demo'
}


export const SimpleExample = () => {
    const [fake, setFake] = useState<number>(1);
    const [counter, setCounter] = useState<number>(1);

    // console.log('SimpleExample');
//1
    useEffect(() => {

        console.log('useEffect every render');
        document.title = counter.toString()
        //api.getUsers().then('some code')
        //setInterval
        //indexedDB
        //document.getElementById
        //document.title = 'User'
    })

   //2
    useEffect(() => {

        console.log('useEffect only first render(componentDidMount)');
        document.title = counter.toString()
        //api.getUsers().then('some code')
        //setInterval
        //indexedDB
        //document.getElementById
        //document.title = 'User'
    },[])

    //3
    useEffect(() => {

        console.log('useEffect every time when counter dependency changes)');
        document.title = counter.toString()
        //api.getUsers().then('some code')
        //setInterval
        //indexedDB
        //document.getElementById
        //document.title = 'User'
    },[counter ])



    return <>
        Hello,{counter} {fake}

        <button onClick = {() => setFake(fake + 1)}>fake</button>
        <button onClick = {() => setCounter(counter + 1)}>counter</button>
    </>
}
