import { PLAYER_STATUS} from '../constants/game';

class Player {
    constructor(params) {
        this.seatNum = params.seatNum; // 座位号
        this.status = params.status;  // 状态 
        this.role = params.role // 身份类 Role
    }
}

export default Player;