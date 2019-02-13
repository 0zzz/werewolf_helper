import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'
import { CONFIG_MODULE } from '../../constants/base'

import CusButton from '../../components/CusButton'


import './index.scss'


@connect(({ counter }) => ({
  counter
}), {
  addAction: add
})
class Index extends Component {

  config = {
    navigationBarTitleText: '狼人杀助手',
  }

  onSelItem = e => {
    if (!e.target.id) {
      return
    }
    Taro.navigateTo({
      url: '/pages/home/index'
    })
  }
  
  render () {
    return (
      <View className='index-page'>
        <View className='content'  onClick={this.onSelItem.bind(this)}>
          {CONFIG_MODULE.map(item => (
            <View 
              className='card'
              key={item.key} 
              id={item.key}
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
