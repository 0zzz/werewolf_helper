import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import classnames from 'classnames'
import { ROLE_IDENTITY } from '../../constants/game'

import './PlayerItem.scss'

class PlayerItem extends Component {

    static defaultProps = {
        player: null,
    }

    render () {
        if (!this.props.player) {
            return null;
        }
        const { player: { role, seatNum } } = this.props;
        const { camp } = role;

        const cls = classnames('player-item', {
            god: camp.key === ROLE_IDENTITY.GOD.key,
            wolf: camp.key === ROLE_IDENTITY.WOLF.key,
        });
        return (
            <View className={cls} style={{backgroundImage: `url(${role.icon})`}}>
                {this.props.children}
                <View className='bottom-bar'>
                    <Text className='role-name'>{role.name}</Text>
                    <Text className='num'>{seatNum + 1}</Text>
                </View>
            </View>
        )
    }
}

export default PlayerItem