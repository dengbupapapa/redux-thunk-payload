## redux-thunk-payload

#### install
```
npm install redux-thunk-payload -S
```

#### use

```
//createStore.js
import thunkMiddleware from '@middleware/reduxThunkPayload';
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
    reduce:(payload) => request(-payload),
    add(payload){//如果我们需要结合其它action做操作
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