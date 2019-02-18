import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { setDefaultConfig } from '../../actions/game'
import { CONFIG_MODULE } from '../../constants/base'

import CusButton from '../../components/CusButton'


import './index.scss'


@connect(({}) => ({
}), {
  setDefaultConfigAction: setDefaultConfig
})
class Index extends Component {

  config = {
    navigationBarTitleText: '狼人杀助手',
  }

  onSelItem = (key, e) => {
    const { setDefaultConfigAction } = this.props;
    setDefaultConfigAction(key);
    Taro.switchTab({
      url: '/pages/home/index'
    })
  }
  
  render () {
    return (
      <View className='index-page'>
        <View className='content'>
          {CONFIG_MODULE.map(item => (
            <View 
              className='card'
              key={item.key} 
              id={item.key}
              onClick={this.onSelItem.bind(this, item.key)}
            >
              <Text className='title' >{`${item.count}人${item.name}`}</Text>
              <Text className='details'>{item.details}</Text>
            </View>
          ))}
        </View>
      </View>
    )
  }
}

export default Index
