import Game from '../module/Game'
import { ROLE } from '../constants/game'

export const CONFIG_MODULE = [{
    key: 'ynlb',
    name: '预女猎白',
    count: 12,
    details: '预言家、女巫、猎人、白痴、四普狼',
    playersCfg: Game.creatGame({
        playersCount: 12, //
        wolfCount: 4,
        godRole: [ROLE.SEER, ROLE.WITCH, ROLE.HUNTER, ROLE.IDIOT],
        wolfRole: []
    })
}, {
    key: 'ynls',
    name: '预女猎守',
    count: 12,
    details: '预言家、女巫、猎人、守卫、四普狼',
    playersCfg: Game.creatGame({
        playersCount: 12, //
        wolfCount: 4,
        godRole: [ROLE.SEER, ROLE.WITCH, ROLE.HUNTER, ROLE.IDIOT],
        wolfRole: []
    })
}, {
    key: 'ynlslm',
    name: '预女猎守狼美',
    count: 12,
    details: '预言家、女巫、猎人、守卫、狼美人和三普狼',
    playersCfg: Game.creatGame({
        playersCount: 12, //
        wolfCount: 4,
        godRole: [ROLE.SEER, ROLE.WITCH, ROLE.HUNTER, ROLE.IDIOT],
        wolfRole: []
    })
}, {
    key: 'ynlbh',
    name: '预女猎白混',
    count: 13,
    details: '预言家、女巫、猎人、白痴、混子、四普狼',
    playersCfg: Game.creatGame({
        playersCount: 12, //
        wolfCount: 4,
        godRole: [ROLE.SEER, ROLE.WITCH, ROLE.HUNTER, ROLE.IDIOT],
        wolfRole: []
    })
}]

export const default1 = null;