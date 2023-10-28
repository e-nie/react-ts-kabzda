import React, {useState, KeyboardEvent, useEffect} from "react";
import styles from './Select.module.css'


type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value);

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)
    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)

    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i+1]
                        :props.items[i-1]
                    if (pretendentElement) {
                        props.onChange((pretendentElement.value))
                        return
                    }
                }
            }
            if(!selectedItem) {
            props.onChange((props.items[0].value))

            }
        }
        if(e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }


    return (
        <>
            {/*<select name = '' id = ''>*/}
            {/*    <option value = ''>Minsk</option>*/}
            {/*    <option value = ''>Moscow</option>*/}
            {/*    <option value = ''>Kyiv</option>*/}
            {/*</select>*/}

            <div className = {styles.select} onKeyDown = {onKeyDownHandler} tabIndex = {0}>
                <span className = {styles.main} onClick = {toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className = {styles.items}>
                        <div>{props.items.map(i => <div
                            onMouseEnter = {() => {
                                setHoveredElementValue(i.value)
                            }}
                            className = {styles.item + ' ' + (hoveredItem === i ? styles.selected : '')}
                            key = {i.value}
                            onClick = {() => {
                                onItemClick(i.value)
                            }}
                        >
                            {i.title}
                        </div>)} </div>
                    </div>
                }
            </div>
        </>
    )


}



