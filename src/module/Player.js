class Player {
    constructor(params) {
        this.seatNum = params.seatNum; // 座位号
        this.isAlive = params.isAlive; // 是否活着 
        this.causeDeath = params.causeDeath // 死因
        this.role = params.role // 身份类 Role
    }
}

export default Player;