import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
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
        console.log(this.props);
        return (
            <View className='player-item'>
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