import React from "react";

type AccordionPropsType ={
    titleValue: string
    collapsed: boolean
}

type AccordionTitlePropsType = {
    title: string
}

export const Accordion =(props: AccordionPropsType)=> {
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

const AccordionTitle =(props: AccordionTitlePropsType)=> {
    return (
        <div>
            <h3>-- {props.title} --</h3>
        </div>
    )
}

const AccordionBody =()=> {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}
