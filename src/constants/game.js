import Camp from '../module/Camp'
import Role from '../module/Role'

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
    VILLAGER: new Camp({
        name: '平民',
        key: 'villagers',
        color: '#fff',
    }),
    UNKNOWN: new Camp({
        name: '未知',
        key: 'unknown',
        color: '#fff',
    }),
}

export const ROLE = {
    SEER: new Role({
        name: '预言家',
        camp: ROLE_IDENTITY.GOD,
        key: 'SEER',
        icon: '',
        introduction: '每晚可以查一名村民是否为狼人。'
    }),
    WITCH: new Role({
        name: '女巫',
        camp: ROLE_IDENTITY.GOD,
        key: 'WITCH',
        icon: require('../icons/witch.svg'),
        introduction: '有两瓶药水, 一瓶可以救被杀的人，一瓶可以毒死任何人。同一个夜晚只能使用一瓶药'
    }),
    HUNTER: new Role({
        name: '猎人',
        camp: ROLE_IDENTITY.GOD,
        key: 'HUNTER',
        icon: '',
        introduction: '如果被狼人杀死或被投票放逐都可以开枪带走任何一人。'
    }),
    SAVIOR: new Role({
        name: '守卫',
        camp: ROLE_IDENTITY.GOD,
        key: 'SAVIOR',
        icon: '',
        introduction: '如果被狼人杀死或被投票放逐都可以开枪带走任何一人。'
    }),
    IDIOT: new Role({
        name: '白痴',
        camp: ROLE_IDENTITY.GOD,
        key: 'IDIOT',
        icon: '',
        introduction: '被放逐投票后可以翻开身份免除死亡，但不能再参与投票'
    }),
    PRETTY_WEREWOLVED: new Role({
        name: '狼美人',
        camp: ROLE_IDENTITY.WOLF,
        key: 'PRETTY_WEREWOLVED',
        icon: '',
        introduction: '每个晚上可以魅惑一名玩家，白天如果死亡，被魅惑玩家跟着殉情，不能连续同一名玩家'
    }),
    WEREWOLVED: new Role({
        name: '狼人',
        camp: ROLE_IDENTITY.WOLF,
        key: 'WEREWOLVED',
        icon: '',
        introduction: '每晚杀一个玩家'
    }),
    VILLAGERS: new Role({
        name: '普通村民',
        camp: ROLE_IDENTITY.VILLAGER,
        key: 'VILLAGERS',
        icon: '',
        introduction: '可以参与发言和投票，是投票的重要角色'
    }),
    UNKNOWN: new Role({
        name: '未知身份',
        camp: ROLE_IDENTITY.UNKNOWN,
        key: 'UNKNOWN',
        icon: '',
        introduction: '未知身份'
    }),
}

export const PLAYER_STATUS = {
    EXECUTION: {
        key: 'EXECUTION',
        name: '放逐',
        icon: ''
    }, 
    GUN: { 
        key: 'GUN',
        name: '枪杀',
        icon: '',
    }, 
    POISON: { 
        key: 'POISON',
        name: '毒杀',
        icon: '',
    }, 
    WOLF_KILL: { 
        key: 'WOLF_KILL',
        name: '放逐',
        icon: ''
    },
    ALIVE: { 
        key: 'ALIVE',
        name: '存活',
        icon: ''
    }
}
