import {
  MINUS,
  PLUS,
  GET_NAME,
  ADD_OFFINLE,
  ADD_NAME_NO,
  addName,
} from '../actions/rootAction';
const initialState = {
  counter: 0,
  nameList: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case PLUS:
      return {
        ...state,
        counter: (state.counter += 1),
      };
    case MINUS:
      return {
        ...state,
        counter: (state.counter -= 1),
      };
    case GET_NAME:
      return {
        ...state,
        nameList: action.nameList,
      };
    case ADD_OFFINLE:
      return {
        ...state,
        nameList: state.nameList.push({id: Math.round(), name: action.name}),
      };
    // return state;
    case ADD_NAME_NO:
      console.log('no');
  }
  return state;
};
// action.meta.offline
