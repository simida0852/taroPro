import Taro, { Component } from "@tarojs/taro"
import Index from "./pages/index"
import "./app.css"

class App extends Component {
  config = {
    pages: ["pages/index/index", "pages/imgs/index"],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    },
    tabBar: {
      color: "#626567",
      selectedColor: "#2A8CE5",
      backgroundColor: "#FBFBFB",
      borderStyle: "white",
      list: [
        {
          pagePath: "pages/index/index",
          text: "首页",
          iconPath: './pages/icons/home.png',
          selectedIconPath: './pages/icons/home-fill.png'
        },
        {
          pagePath: "pages/imgs/index",
          text: "图片列表",
          iconPath:'./pages/icons/image.png',
          selectedIconPath:'./pages/icons/image-fill.png'
        }
      ]
    }
  }

  componentDidMount() {
    if (process.env.TARO_ENV === "weapp") {
      require("taro-ui/dist/weapp/css/index.css")
    } else if (process.env.TARO_ENV === "h5") {
      require("taro-ui/dist/h5/css/index.css")
    }
  }

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}

  render() {
    return <Index />
  }
}

Taro.render(<App />, document.getElementById("app"))
