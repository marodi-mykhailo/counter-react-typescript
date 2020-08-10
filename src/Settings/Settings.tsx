import React from "react";
import {SettingsDisplay} from "./Display/SettingsDisplay/SettingsDisplay";

function Settings() {
    const updateMaxCount = (maxValue: number) => {
        updateMaxCount(maxValue)
    }

    const updateMinCount = (minValue: number) =>{
        updateMinCount(minValue)
    }

    return (<div>
            <SettingsDisplay updateMaxCount={updateMaxCount} updateMinCount={updateMinCount}/>
    </div>)
}

export default Settings;
