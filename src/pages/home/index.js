import Taro, { Component } from '@tarojs/taro'
import { View, Text, Picker, Checkbox } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { changePlayerRole } from '../../actions/game'
import { uniqBy } from '../../utils/array'
import PlayerItem from '../../components/PlayerItem'

import './index.scss'


@connect(({ game }) => ({
  game
}), {
  changePlayerRoleAction: changePlayerRole
})
class Index extends Component {
  config = {
    navigationBarTitleText: '首页',
  }

  state = {
    isChangeRole: false,
  }

  playerPickerRange = [];

  componentDidMount() {

  }

  handlePlayerClick = (seatNum,) =>{
    const { isChangeRole } = this.state;
    if (isChangeRole) {
      return;
    }
    // Taro.navigateTo({
    //   url: `/pages/detail/index?id=${seatNum}`
    // });

  }

  changeSetRoleState = () => {
    this.setState(state =>({isChangeRole: !state.isChangeRole}));
  }
  

  onPlayerRoleChange = (seatNum, e) => {
    const { changePlayerRoleAction } = this.props;
    const { detail: { value }} = e;
    const roleKey = this.playerPickerRange[value].key;
    changePlayerRoleAction({
      seatNum,
      roleKey
    })
    
  }

  getPlayerPickerRange = () => {
    const { game: { playersCfg } } = this.props;
    if (this.playerPickerRange.length === 0) {
      this.playerPickerRange = uniqBy(playersCfg.map(role => ({
        value: role.name,
        key: role.key
      })), 'value');
    }
    return this.playerPickerRange;
  }
  
  render () {
    const { game: { players, playersCfg } } = this.props;
    const { isChangeRole } = this.state;
    if (!playersCfg) {
      return null;
    }
    const playerPickerRange = this.getPlayerPickerRange();
    return (
      <View className='home-page'>
        <View>
          <Checkbox  checked={isChangeRole} onClick={this.changeSetRoleState}>改变角色</Checkbox>
        </View>
        <View className='content'>
          {players.map(player => (
            <Picker 
              mode='selector' 
              disabled={!isChangeRole}
              onClick={this.handlePlayerClick.bind(this, player.seatNum)}
              range={playerPickerRange}
              rangeKey='value'
              onChange={this.onPlayerRoleChange.bind(this, player.seatNum)} 
              key={player.seatNum}
            >
              <PlayerItem 
                player={player}
              />
            </Picker>
            
          ))}
        </View>
      </View>
    )
  }
}

export default Index
