import { GAME } from '../constants/actionsTypes'
import { CONFIG_MODULE } from '../constants/base';

const INITIAL_STATE = {
  players: null,
}

export default function game (state = INITIAL_STATE, action) {
  const { payload, type } = action;
  switch (type) {
    case GAME.SET_DEFAULT_CONFIG:
      console.log(payload,CONFIG_MODULE)
      const players = CONFIG_MODULE.find(module => module.key === payload)[payload]
      return {
        ...state,
        players,
      }
     default:
       return state
  }
}
