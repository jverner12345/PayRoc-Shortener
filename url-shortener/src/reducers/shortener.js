import * as shortener from '../actions/actions.js';

var initialState = {
    originalUrl: null,
    shortenedLink: null,

}

export default function shortenerReducer(state = initialState, action){
    switch(action.Type){
        case shortener.SAVE_URL:
            break;
        default:
            return state;
    }
}