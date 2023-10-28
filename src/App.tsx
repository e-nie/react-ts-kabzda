import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating";
import {Accordion} from "./components/Accordion";
import {OnOff} from "./components/onOff/OnOff";
import {UncontrolledOnOff} from "./components/UncontrolledonOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion";


function App() {
    console.log('App rendering');

    let [ratingValue, setRatingValue] = useState<RatingValueType>(3)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className = {'App'}>

            <Rating value = {ratingValue}
                    onClick = {setRatingValue} />
            {/*<UncontrolledRating  onChange={}/>*/}

            {/*<Accordion titleValue = 'Menu'*/}
            {/*           collapsed = {accordionCollapsed}*/}
            {/*           onChange = {() => {*/}
            {/*               setAccordionCollapsed(!accordionCollapsed)*/}
            {/*           }}   items={items}/>*/}

            <OnOff on = {switchOn} onChange = {(on) => {
                setSwitchOn(on)
            }} />

            <UncontrolledOnOff onChange={setSwitchOn} /> {switchOn.toString()}


            <UncontrolledAccordion titleValue = 'blabla' />


        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('AppTitle rendered');
    return <h1>
        {props.title}
    </h1>
}


export default App;
