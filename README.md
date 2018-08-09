1. npm install redux --save

2. create store
- mkdir -p src/js/store
create index.js to createStore is the function for creating the Redux store.
- touch src/js/store/index.js

// src/js/store/index.js
import { createStore } from "redux";
import rootReducer from "../reducers/index";
const store = createStore(rootReducer);
export default store;

3. Create Reducer
What’s a Redux reducer made of?

A reducer is a Javascript function taking two parameters: the state and the action.

A reducer function has a switch statement (although unwieldy, a naive reducer could also use if/else).

The reducer calculates the next state depending on the action type. Moreover, it should return at least the initial state when no action type matches.

When the action type matches a case clause the reducer calculates the next state and returns a new object.

- mkdir -p src/js/reducers
- touch src/js/reducers/index.js
// src/js/reducers/index.js
const initialState = {
    articles: []
    };
    const rootReducer = (state = initialState, action) => state;
    export default rootReducer;

4. Create Action
- mkdir -p src/js/actions
- touch src/js/actions/index.js
  // src/js/actions/index.js
  export const addArticle = article => ({ type: "ADD_ARTICLE", payload: article });

5. Create Constant
- mkdir -p src/js/constants
- touch src/js/constants/action-types.js
    // src/js/constants/action-types.js
    export const ADD_ARTICLE = "ADD_ARTICLE";

6. npm i --save-dev babel-plugin-transform-object-rest-spread4

7. create index.js
- touch src/js/index.js
    import store from "../js/store/index";
    import { addArticle } from "../js/actions/index";
    window.store = store;
    window.addArticle = addArticle;

8. Open up src/index.jsas well, clean up its content and update it as follows:
    import index from "./js/index"

9.  npm i react-redux --save-dev

10. modify index.js

11. mkdir -p src/js/components
     touch src/js/components/List.js
     touch src/js/components/Form.js
12. npm i uuid --save-dev

Reference
https://www.valentinog.com/blog/react-redux-tutorial-beginners/