## redux-thunk-payload

#### install
```
npm install redux-thunk-payload -S
```

#### use

```
//createStore.js
import thunkMiddleware from 'redux-thunk-payload';
let applyMiddlewares = [
    thunkMiddleware,
    ...other middleware
];
let composes = [applyMiddleware(...applyMiddlewares)];
const enhancer = compose(
    ...composes
);
let store = createStore(rootReducer, mergeState, enhancer);

//action.js
export const actiontor = createActions({
    add(payload){//If we need to do this in conjunction with other actions
        return async function (dispatch){
            dispatch(actiontor.loadingStatus(true));
            let res =  await request(payload);
            dispatch(actiontor.loadingStatus(false));
            return res
        }
    },
    loadingStatus:(payload) => payload
});
```