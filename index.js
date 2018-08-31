function createThunkMiddleware(extraArgument) {
  return function ({dispatch,getState}) {
    return function (next) {
      return function (action) {
        if (typeof action.payload === 'function') {
          let nextPayload = action.payload(dispatch, getState, extraArgument);
          if(nextPayload)
            return next({
              payload:nextPayload,
              type:action.type
            })
          else
            return
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;