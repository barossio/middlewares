export default function({dispatch}){
  return next => action => {
    if(!action.payload || !action.payload.then){
      return next(action);
    }
    //console.log(all);
    action.payload
      .then(function (response) {
        //create a new action with old action
        const newAction = {...action , payload : response.data};
        console.log(newAction);
        dispatch(newAction);
      });
  };
}
