import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './CusButton.scss'

class CustomButton extends Component {

    static defaultProps = {
        onClick: () => {},
    }

    render () {
        const { onClick } = this.props;
        return (
            <View onClick={onClick}>
                {this.props.children}
            </View>
        )
    }
}

export default CustomButton