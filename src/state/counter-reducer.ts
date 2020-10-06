const INCREMENT_VALUE = "INCREMENT_VALUE"
const RESET_VALUE = "RESET_VALUE"
const SET_MIN_VALUE = "SET_MIN_VALUE"
const SET_MAX_VALUE = "SET_MAX_VALUE"


type initialStateType = {
    maxValue: number
    minValue: number
}

type incrementValueType = {
    type: 'INCREMENT_VALUE'
}

type resetValueType = {
    type: 'RESET_VALUE'
}

type setMaxValueType = {
    type: 'SET_MAX_VALUE'
    value: number
}

type setMinValueType = {
    type: 'SET_MIN_VALUE'
    value: number
}

const initialState={
    maxValue: 0,
    minValue: 0
}


export type ActionsType = incrementValueType | resetValueType | setMaxValueType | setMinValueType

const counterReducer = (state: initialStateType = initialState, action: ActionsType):initialStateType => {
    switch (action.type) {
        case INCREMENT_VALUE:
            return {
                ...state,
                minValue: state.minValue + 1
            }
        case RESET_VALUE:
            return {
                ...state,
                minValue: state.minValue
            }
        default:
            return state
    }
}

export const incrementValue = ()=>({
    type: INCREMENT_VALUE
})

export const resetValue = () => ({
    type: RESET_VALUE,
})

export const setMinValue = (value: number) => ({
    type: SET_MIN_VALUE,
    value
})

export const setMaxValue = (value: number) => ({
    type: SET_MAX_VALUE,
    value
})

export default counterReducer;
