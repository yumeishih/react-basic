import { applyMiddleware ,combineReducers, createStore } from 'redux';

/* ---Reducers--- */
const userReducer = (state={},action)=>{
  switch(action.type){
    case 'CHANGE_NAME':{
      state = {...state,name: action.payload}
      break
    }
    case 'CHANGE_AGE':{
      state = {...state,age: action.payload}
      break
    }
  }
  return state;
};
const tweetsReducer = (state=[],action)=>{
  return state;
};

const counterReducer = (state=0,action) =>{
  switch(action.type){
    case 'INC':{
      state = state + 1
      break
    }
    case 'DEC':{
      state = state - 1
      break
    }
    case 'Error':{

      throw new Error("Oops!");
      break
    }
  }
  return state;
}

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer,
  counter: counterReducer
})
/* ---Reducers--- */


/* ---Middleware--- */
const logger = (store) => (next) =>(action) =>{
  console.log("action fired",action)
  next(action)
}
const error = (store) => (next) =>(action) =>{
  try {
    next(action)
  } catch(e){
    console.log("AHHHHHHH!", e)
  }
}
const middleware = applyMiddleware(logger,error);
/* ---Middleware--- */


/* ---Store--- */
const store = createStore(reducers,middleware);
/* ---Store--- */


/* ---Testing--- */
store.subscribe(()=>{
  console.log("store change", store.getState())
})

store.dispatch({type: 'INC'})
store.dispatch({type: 'INC'})
store.dispatch({type: 'INC'})
store.dispatch({type: 'DEC'})
store.dispatch({type: 'DEC'})
store.dispatch({type: 'DEC'})
store.dispatch({type: 'Error'})



