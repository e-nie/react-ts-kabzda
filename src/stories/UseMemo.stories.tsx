import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}


export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5);
    const [b, setB] = useState<number>(5);
    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100_000_000) {
                fake++
                let fakeValue = Math.random()
            }
            tempResultA = tempResultA * i

        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }
    return <>
        <input value = {a} onChange = {(e) => setA(Number(e.currentTarget.value))} />
        <input value = {b} onChange = {(e) => setB(Number(e.currentTarget.value))} />
        <hr />
        <div>Result for a:{resultA}</div>
        <div>Resulat for b: {resultB}</div>
    </>

}


const UsersSecret = (props: { users: Array<string> }) => {
    console.log('users');
    return <div>{props.users.map((u, i) => <div key = {i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('Example');
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Evchen', 'Evelyne', 'Robert', 'Mark']);

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }
    return <>
        <button onClick = {() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <button onClick = {() => addUser()}>Add User</button>
        {counter}
        <Users users = {newArray} />
    </>
}
