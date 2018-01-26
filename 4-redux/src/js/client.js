import { combineReducers, createStore } from 'redux';

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
const tweetsReducer = (state=[],actions)=>{
  return state;
};

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
})

const store = createStore(reducers);

store.subscribe(()=>{
    console.log("store change", store.getState())
})

store.dispatch({type: "CHANGE_NAME", payload: "kiki"  })
store.dispatch({type: "CHANGE_AGE", payload: 3 })
store.dispatch({type: "CHANGE_AGE", payload: 5 })

