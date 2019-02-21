import { ROLE } from '../constants/game'

export default class Game {
    static creatGame = ({
        playersCount, //
        wolfCount,
        godRole,
        wolfRole,
    } = {
        godRole: [],
        wolfRole: []
    }) => {
        const players = [];
        const villagerCount = playersCount - godRole.length - wolfCount;
        const nomalWolfCount = wolfCount - wolfRole.length;
        // 填充普通村民
        new Array(villagerCount).fill(ROLE.VILLAGERS).forEach(role => {
            players.push(role);
        });
        // 填充普通狼人
        new Array(nomalWolfCount).fill(ROLE.WEREWOLVED).forEach(role => {
            players.push(role);
        });
        wolfRole.forEach(wolf => {
            players.push(wolf);
        })
        godRole.forEach(god => {
            players.push(god);
        })

        return players;
    }


}