import { GAME } from '../constants/actionsTypes'
import { CONFIG_MODULE } from '../constants/base';
import Player from '../module/Player';

const INITIAL_STATE = {
  playersCfg: null,
}

export default function game (state = INITIAL_STATE, action) {
  const { payload, type } = action;
  switch (type) {
    case GAME.SET_DEFAULT_CONFIG:
      const playersCfg = CONFIG_MODULE.find(module => module.key === payload).playersCfg
      const players = new Array(playersCfg.length).fill(1).map((item, seatNum) => {
        return new Player({
          seatNum,
        })
      })
      return {
        ...state,
        playersCfg,
        players,
      }
     default:
       return state
  }
}
