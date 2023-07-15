import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating";
import Accordion from "./components/Accordion";
import OnOff from "./components/onOff/OnOff";
import UncontrolledOnOff from "./components/UncontrolledonOff/UncontrolledOnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion";


function App() {
    console.log('App rendering');

    let [ratingValue, setRatingValue] = useState<RatingValueType>(3)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className = {'App'}>

            <Rating value = {ratingValue}
                    onClick = {setRatingValue} />
            <UncontrolledRating />

            <Accordion titleValue = 'Menu'
                       collapsed = {accordionCollapsed}
                       onChange = {() => {
                           setAccordionCollapsed(!accordionCollapsed)
                       }} />

            {/*<OnOff on = {switchOn} onChange = {(on) => {*/}
            {/*    setSwitchOn(on)*/}
            {/*}} />*/}

            <UncontrolledOnOff onChange={setSwitchOn} /> {switchOn.toString()}

            {/*<UncontrolledOnOff />*/}
            <UncontrolledAccordion titleValue = 'blabla' />

            {/*<UncontrolledRating />*/}


            {/*<Rating value={4}/>*/}
            {/*<UncontrolledAccordion titleValue={'Users'} />*/}
            {/*<UncontrolledOnOff />*/}
            {/*<UncontrolledOnOff />*/}
            {/*<PageTitle title = {'This is App component'} />*/}
            {/*<PageTitle title = {'My friends'} />*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value = {2} />*/}
            {/*<Rating value={5}/>*/}


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
