import Camp from '../module/Camp'

export const ROLE_IDENTITY = {
    GOD: new Camp({
        name: '神',
        key: 'god',
        color: '#fff',
    }),
    WOLF: new Camp({
        name: '狼',
        key: 'wolf',
        color: '#fff',
    }),
    CIVILIAN: new Camp({
        name: '平民',
        key: 'civilian',
        color: '#fff',
    }),
}

export const PLAYER_STATUS = {
    EXECUTION: 'EXECUTION', // 投票处决
    GUN: 'GUN', //枪杀
    POISON: 'POISON', // 毒杀
    
}