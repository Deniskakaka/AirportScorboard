import { FetchFly } from "../FlygateAway";

export const LIST_FLYING = 'LIST_FLYING';

export const listFlying = (list: any) => {
    return {
        type: LIST_FLYING,
        payload: {
            list
        }
    }
};

export function getListFlying () {
    return function (dispatch: any): any{
        FetchFly().then(res => dispatch(listFlying(res)))
    }
}