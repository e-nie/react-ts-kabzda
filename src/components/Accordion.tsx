import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}


function Accordion(props: AccordionPropsType) {
    return <div>
        <AccordionTitle title = {props.titleValue}
                        onChange = {props.onChange}
        />
        {props.collapsed ? false : <AccordionBody />}
    </div>
}


type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <div>
        <h3 onClick = {props.onChange}>---{props.title}---</h3>
    </div>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
}


export default Accordion
