import React, {useState} from "react";
import './App.css'

type RatingPropsType = {

}

type StarPropsType = {
    class: string
    onClick: ()=>void
}

export const Rating = (props: RatingPropsType) => {

    const star = Array(5).fill(0);
    const [state, setState] = useState(0);
    const onClickHandler = (value: number) => {
        setState(value)
    }
    return (
        <div>
            {star.map((star, index
            )=>{
                console.log(`state ${state} index ${index}`)
                return (
                    <Star key={index} class={state > index ? 'bold' : ''} onClick={()=>onClickHandler(index + 1)}/>
                )
            })}
        </div>
    )
}

const Star = (props: StarPropsType) => {

    return (
        <span onClick={props.onClick} className={props.class}>Star </span>
    )

}