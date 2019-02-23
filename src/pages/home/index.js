import Taro, { Component } from '@tarojs/taro'
import { View, Text, Picker } from '@tarojs/components'
import { connect } from '@tarojs/redux'


import './index.scss'


@connect(({ game }) => ({
  game
}), {
  // setDefaultConfigAction: setDefaultConfig
})
class Index extends Component {
  config = {
    navigationBarTitleText: '首页',
  }

  state = {
    isChangeRole: false,
  }

  componentDidMount() {
    console.log(this.props.game)
  }

  handlePlayerClick = (seatNum,) =>{
    const { isChangeRole } = this.state;
    if (isChangeRole) {
      return;
    }
    

  }
  
  render () {
    const { game: { players } } = this.props;
    const { isChangeRole } = this.state;
    return (
      <View className='home-page'>
        <View className='content'>
          {players.map(player => (
            <Picker 
              mode='selector' 
              disabled={!isChangeRole}
              onClick={this.handlePlayerClick.bind(this, player.seatNum)}
              range={this.state.selector} 
              // onChange={this.onChange} 
              key={player.seatNum}>
            <View 
              className='player-card'
            >
              {player.role.name}
              当前选择：{this.state.selectorChecked}
              <View className='seat-num'>
                <Text>{player.seatNum + 1}</Text>
              </View>
            </View>
          </Picker>
            
          ))}
        </View>
      </View>
    )
  }
}

export default Index
