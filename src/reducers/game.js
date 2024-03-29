import { GAME } from '../constants/actionsTypes'
import { CONFIG_MODULE } from '../constants/base';
import { ROLE } from '../constants/game';
import Player from '../module/Player';

const INITIAL_STATE = {
  playersCfg: null,
  players: null,
}

const changePlayerRole = (state, payload) => {
  const { players } = state;
  const { seatNum, roleKey } = payload;
  const playerIndex = players.findIndex(player => player.seatNum === seatNum);
  const playerModule = players[playerIndex];

  const newPlayerModule = new Player({ 
    seatNum: playerModule.seatNum,
    status: playerModule.status,
    role: ROLE[roleKey],
  });
  const newPlayers = [];
  players.forEach((player, index) => {
    if (index === playerIndex) {
      newPlayers.push(newPlayerModule)
    } else {
      newPlayers.push(player);
    }
  })
  return {
    ...state,
    players: newPlayers,
  };
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
      case GAME.CHANGE_PALYER_ROLE:
        return changePlayerRole(state, payload);
     default:
       return state
  }
}
