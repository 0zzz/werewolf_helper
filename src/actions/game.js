import { GAME } from "../constants/actionsTypes";

export const setDefaultConfig = (key) => {
    return {
      type: GAME.SET_DEFAULT_CONFIG,
      payload: key
    }
}

export const changePlayerRole = ({ seatNum, roleKey }) => ({
  type: GAME.CHANGE_PALYER_ROLE,
  payload: { seatNum, roleKey }
})