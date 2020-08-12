import React from "react";
import {SettingsDisplay} from "./Display/SettingsDisplay/SettingsDisplay";
import '../Counter/Counter.css'
import SettingsButton from "./SettingsButton/SettingsButton";
import {CountButton} from "../Counter/Button/CountButton/CountButton";

type SettingsPropsType = {
    minCount: number
    maxCount: number
    updateMaxCount: (maxValue: number) => void
    updateMinCount: (minValue: number) => void
    setMaxMinValue: () => void
}

function Settings(props: SettingsPropsType) {

    return (
        <div className={"count__wrapper"}>
            <div className={"count-num__box"}>
                <SettingsDisplay updateMaxCount={props.updateMaxCount} updateMinCount={props.updateMinCount}/>
            </div>
            <div className={"count-button__box"}>
                <div className={"count-button__box__wrapper"}>
                    <CountButton title={"Set"} minCount={props.minCount} maxCount={props.maxCount}
                                 buttonAction={props.setMaxMinValue} disabled={false}
                    />
                </div>
            </div>
        </div>
    )
}

export default Settings;
