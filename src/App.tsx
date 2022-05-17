import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./Rating";
import {PageTitle} from "./PageTitle";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnControlledAccordion/UnControlledAccordion";

function App() {

    return (
        <div className="App">
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <UnControlledAccordion titleValue={'menu'}/>
            <UnControlledAccordion titleValue={'Users'}/>
            <Rating/>
            <Rating/>
            <Rating/>
            <OnOff/>
            <OnOff/>

        </div>
    );
}

export default App;
