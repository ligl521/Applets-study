import {get,post} from "./http.js"

export const getRankObjectList = p => get('/rankObject/list.do', p);

