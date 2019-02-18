import { GAME } from '../constants/actionsTypes'
import { CONFIG_MODULE } from '../constants/base';

const INITIAL_STATE = {
  players: null,
}

export default function game (state = INITIAL_STATE, action) {
  const { payload, type } = action;
  switch (type) {
    case GAME.SET_DEFAULT_CONFIG:
      const players = CONFIG_MODULE[payload].players
      return {
        ...state,
        players,
      }
     default:
       return state
  }
}
