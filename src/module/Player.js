import { PLAYER_STATUS, ROLE } from '../constants/game';

class Player {
    constructor({ seatNum, status, role } = {}) {
        this.seatNum = seatNum; // 座位号
        this.status = status || PLAYER_STATUS.ALIVE;  // 状态 
        this.role = role || ROLE.UNKNOWN; // 身份类 Role
    }

    changeRole = roleKey => {
        const newIns = new Player(this);
        newIns.role = ROLE[roleKey];
        return newIns;
    }
}

export default Player;