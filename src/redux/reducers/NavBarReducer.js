import {NAV_BAR_CLICK} from '../contants/NavBar';

const initialState = {
    selectedInfo : {}
}

export default (state = initialState, action) => {
    switch (action.type) {

    case NAV_BAR_CLICK:
        state.selectedInfo = action.data;
        return {...state}
    default:
        return state
    }
}
