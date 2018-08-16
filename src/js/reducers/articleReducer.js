// src/js/reducers/index.js
// const initialState = {
//     articles: []
//     };
//     const rootReducer = (state = initialState, action) => state;
//     export default rootReducer;

import { ADD_ARTICLE,LOAD_ARTICLES } from "../constants/action-types";
const initialState = {
    articles: []
};
export default (state = initialState, action) => { //Step 3
    switch (action.type) {
    case LOAD_ARTICLES :
        return {
            ...state,
            articles: [...state.articles, action.payload] 
        }
    case ADD_ARTICLE:
       // state.articles.push(action.payload);
       //return state;
        //return { ...state, articles: state.articles.concat(action.payload) };
        return { ...state, articles: [...state.articles, action.payload] };
       
    default:
        return state;
    }
}
//export default rootReducer;