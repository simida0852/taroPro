import Taro, { Component } from "@tarojs/taro"
import { View, Text } from "@tarojs/components"
import "./index.css"
import { AtButton } from "taro-ui"
export default class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  handleClick =() =>{
    console.log('click me')
  }
  render() {
    return (
      <View className="index">
        <AtButton type='primary' onClick={this.handleClick} loading>按钮文案</AtButton>
      </View>
    )
  }
}
 