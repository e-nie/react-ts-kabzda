import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import {Rating} from "./components/Rating";
import OnOff from "./components/onOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating";

function App() {
    console.log('App rendering');
    return (
        <div className = {'App'}>
            <OnOff />
            <UncontrolledAccordion titleValue = 'Menu' />
            <Accordion titleValue='Menu' collapsed={false}/>

            <UncontrolledRating />
            <Rating value={4}/>
            {/*<UncontrolledAccordion titleValue={'Users'} />*/}
            {/*<OnOff />*/}
            {/*<OnOff />*/}
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
