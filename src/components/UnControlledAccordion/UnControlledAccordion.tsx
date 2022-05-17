import React, {useState} from "react";

type AccordionPropsType ={
    titleValue: string
    //collapsed: boolean
}

type AccordionTitlePropsType = {
    collapsed: boolean
    title: string
    callback: (value: boolean) => void}

export const UnControlledAccordion =(props: AccordionPropsType)=> {

    const [collapsed, setCollapsed] = useState(true)
    const callback = (value: boolean) => {
        setCollapsed(value)
    }

    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                collapsed={collapsed}
                callback={callback}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

const AccordionTitle =(props: AccordionTitlePropsType)=> {

    const onClickHandler = () => {
        props.callback(!props.collapsed)
    }

    return (
        <div>
            <h3 onClick={onClickHandler}>-- {props.title} --</h3>
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
