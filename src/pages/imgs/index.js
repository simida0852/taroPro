import Taro, { Component } from "@tarojs/taro"
import { Text } from "@tarojs/components"

class ImgsShow extends Component {
    config = {
        navigationBarTitleText: "图片列表"
    }
    state = {
        imgs: []
    }
    componentDidMount() {
        Taro.request({
            url: "https://pixabay.com/api/?key=9139324-865fa80b99bda419a71c73b70"
        }).then(res =>
            this.setState({
                imgs: res.data.hits
            })
        )
    }
    render() {
        return (
                <View>
                    {this.state.imgs &&
                        this.state.imgs.map(v => (
                            <Image
                                key={v.id}
                                style="width: 100%;height: 200px;background: #fff;"
                                src={v.webformatURL}
                                lazyLoad
                            />
                        ))}
                </View>
        )
    }
}

export default ImgsShow
