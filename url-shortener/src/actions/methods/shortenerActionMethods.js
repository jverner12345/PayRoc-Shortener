import {SAVE_URL, SHORTEN_URL} from '../actions';


export function saveUrl(result){
    alert('new object action ' + result.originalUrl);

    return {type: SAVE_URL, result: result}
}

export function shortenUrl(result){
    return {type:SHORTEN_URL, result: ''}
}