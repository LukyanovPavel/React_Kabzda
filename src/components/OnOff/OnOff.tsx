import style from './OnOff.module.css'
import {useState} from "react";

type OnOffPropsType = {
}

export const OnOff = (props: OnOffPropsType) => {

    let [on, setOn] = useState(false)

    return (
        <div className={style.wrapper}>
            <div
                className={style.box + ' ' + (on && style.bgcGreen)}
                onClick={()=>setOn(true)}
            >On
            </div>
            <div
                className={style.box + ' ' + (!on && style.bgcRed)}
                onClick={()=> setOn(false)}
            >Off
            </div>
            <div className={style.circle + ' ' + (on ? style.bgcGreen : style.bgcRed)}/>
        </div>
    )
}

