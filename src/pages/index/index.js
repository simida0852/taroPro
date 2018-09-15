import Taro, { Component } from "@tarojs/taro"
import { View, Swiper, SwiperItem } from "@tarojs/components"
import { AtNoticebar, AtGrid, } from "taro-ui"
import "./index.css"
import A from "./imgs/a.jpg"
import B from "./imgs/b.jpg"
import C from "./imgs/c.jpg"

export default class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  }
  state = {
    imgs: []
  }
  componentWillMount() { }

  componentDidMount() {
    Taro.request({
      url: 'https://pixabay.com/api/?key=9139324-865fa80b99bda419a71c73b70',
    })
      .then(res =>
        this.setState({
          imgs:res.data.hits
        })
      )
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  handleClick = (item, index) => {
    console.log("click me")
    console.log("click item", item.value)
    console.log("click index", index)
  }

  render() {
    return (
      <View className="index">
        <Swiper
          className="test-h"
          indicatorColor="#999"
          indicatorActiveColor="#333"
          circular
          indicatorDots
          autoplay
        >
          <SwiperItem>
            <View className="demo-text-1">
              <Image src={A} style="width:100%;" />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className="demo-text-2">
              <Image src={B} style="width:100%;" />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className="demo-text-3">
              <Image src={C} style="width:100%;" />
            </View>
          </SwiperItem>
        </Swiper>
        <AtNoticebar icon="volume-plus" marquee>
          这里显示一些通知文字。。。
        </AtNoticebar>
        <View>
          <AtGrid
            onClick={this.handleClick}
            mode="rect"
            data={[
              {
                image:
                  "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png",
                value: "领取中心"
              },
              {
                image:
                  "https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png",
                value: "找折扣"
              },
              {
                image:
                  "https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png",
                value: "领会员"
              },
              {
                image:
                  "https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png",
                value: "新品首发"
              },
              {
                image:
                  "https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png",
                value: "领京豆"
              },
              {
                image:
                  "https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png",
                value: "手机馆"
              }
            ]}
          />
        </View>
        {/* <View className='infoList'>
          <View className="LeftImg">left</View>
          <View className="RightInfoItem">right</View>
        </View> */}
        <View>
          {
            this.state.imgs && this.state.imgs.map((v)=>
              <Image key={v.id}
                style='width: 100%;height: 200px;background: #fff;'
                src={v.webformatURL}
                lazyLoad
              />
            )
          }
        </View>
      </View>
    )
  }
}
