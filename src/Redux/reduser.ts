import { LIST_FLYING } from './actionReduser';

const initialState = {
    list: {}
};

const mainReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case LIST_FLYING: {
            return {
                ...state,
                list: action.payload.list
            }
        }
        default:
            return state;
    }
}

export default mainReducer;