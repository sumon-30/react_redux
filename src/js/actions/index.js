// src/js/actions/index.js
import { ADD_ARTICLE,LOAD_ARTICLES } from "../constants/action-types";
import axioApi from './../../axioConfig';

//const url = "http://localhost:5000/api/"
const url = process.env.NODE_ENV === 'production' ? "/api/" : "http://localhost:5000/api/"


export function loadArticles () {//Step 2 
    return (dispatch) => {
        axioApi.get('articles').then((res) => {
            dispatch({type:LOAD_ARTICLES, payload : res.data})
        }).catch((err) => {
            dispatch({type:'LOAD_ARTICLES_ERR', payload : err})
        })
    }
}
// //export const addArticle = article => ({ type: "ADD_ARTICLE", payload: article });
 export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });