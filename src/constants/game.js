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
    EXECUTION: {
        key: 'EXECUTION',
        name: '放逐',
        icon: ''
    }, // 投票处决
    GUN: {
        key: 'GUN',
        name: '枪杀',
        icon: '',
    }, //枪杀
    POISON: {
        key: 'POISON',
        name: '毒杀',
        icon: '',
    }, // 毒杀
}
