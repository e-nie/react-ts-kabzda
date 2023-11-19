import React, {useEffect, useState} from "react";


export default {
    title: 'useEffect demo'
}


// export const SimpleExample = () => {
//     const [fake, setFake] = useState<number>(1);
//     const [counter, setCounter] = useState<number>(1);
//
//     // console.log('SimpleExample');
// //1
//     useEffect(() => {
//
//         console.log('useEffect every render');
//         document.title = counter.toString()
//         //api.getUsers().then('some code')
//         //setInterval
//         //indexedDB
//         //document.getElementById
//         //document.title = 'User'
//     })
//
//     //2
//     useEffect(() => {
//
//         console.log('useEffect only first render(componentDidMount or componentDidUpdate)');
//         document.title = counter.toString()
//         //api.getUsers().then('some code')
//         //setInterval
//         //indexedDB
//         //document.getElementById
//         //document.title = 'User'
//     }, [])
//
//     //3
//     useEffect(() => {
//
//         console.log('useEffect every time when counter dependency changes)');
//         document.title = counter.toString()
//         //api.getUsers().then('some code')
//         //setInterval
//         //indexedDB
//         //document.getElementById
//         //document.title = 'User'
//     }, [counter])
//
//
//     return <>
//         Hello,{counter} {fake}
//
//         <button onClick = {() => setFake(fake + 1)}>fake</button>
//         <button onClick = {() => setCounter(counter + 1)}>counter</button>
//     </>
// }


export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    console.log('SetTimeoutExample');


    //with settimeOut

    // useEffect(() => {
    //     setTimeout(() => {
    //         console.log('SetTimeout');
    //         document.title = counter.toString()
    //     }, 1000)
    // }, [counter ])


    useEffect(() => {

          const interval = setInterval(() => {
            setCounter((state) => state + 1)
        }, 1000)
        return () => {
            clearInterval(interval);
        };
    }, [])

    const getTime = () => {
        let time = new Date()
        let hrs = time.getHours()
        let min = time.getMinutes()
        let sec = time.getSeconds()
        // return `${hrs} :${min}:${sec}`
        return `${hrs} :${min}:${counter}`
    }



    return <>
        Current Time : {getTime()}
        <br/>
        Counter: {counter}
        {/*Hello, counter: {counter} - fake: {fake}*/}

        {/*<button onClick = {() => setFake(fake + 1)}>fake +</button>*/}
        {/*<button onClick = {() => setCounter(counter + 1)}>counter +</button>*/}
    </>
}
