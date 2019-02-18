import { GAME } from "../constants/actionsTypes";

export const setDefaultConfig = (key) => {
    return {
      type: GAME.SET_DEFAULT_CONFIG,
      payload: key
    }
}