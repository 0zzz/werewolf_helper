import { ADD, MINUS } from '../constants/counter'
import { ROLE_IDENTITY } from '../constants/game'

console.log(ROLE_IDENTITY);
const INITIAL_STATE = {
  num: 0
}

export default function game (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 2
      }
     case MINUS:
       return {
         ...state,
         num: state.num - 1
       }
     default:
       return state
  }
}
