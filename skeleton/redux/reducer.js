import cloneDeep from 'lodash/cloneDeep'
import set from 'lodash/set'

/**
 * To be customized as per the usage
 * @param {*} state
 * @param {*} action 
 */
export default function reducer (state, action) {
    let newState = cloneDeep(state)
    switch(action.type){
        case 'CHANGE_BTN_TEXT' : return changeBtnDisplayText(newState, action)
        default : return newState
    }
}

const changeBtnDisplayText = (newState, action) => {
    return set(newState, 'btnText', action.text)
}