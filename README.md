# 介绍

browser-device-js 是一个轻量级获取浏览器和手机信息的库
# 优点

1. 能够获取众多ios的机型，包括iphoneX
    
2. 支持amd 

3. 区分 Edge IE11  IE11以下 Opera Firefox 微信内置浏览器 QQ浏览器 UC浏览器 Safari

> `Android` 手机太多,没有基础数据，所以类型统一为Android 后面的版本数据会补上

# 如何获取

通过以下方式都可以下载：

执行`npm i browser-device-js`

# 如何使用

## 浏览器引入:

```html

    直接引入
    <script src="browser-device-js/lib/device.js"></script>


```
## 模块引入:

```js

    import Device from "browser-device-js"
    var d = new Device()
    d.getDevice() //获取所有信息
    /**
    {
        browserVer: "",//浏览器版本
        browserName: "",//浏览器名称 Edge IE11  IE Opera Firefox WeiXin QQ UC Safari
        phoneSystemType: "",//手机系统类型 android / ios
        phoneSystemVer: "",//手机系统版本  android 4.1 / ios 6
        phoneName: "",//iPhone 8 /iPhone X    Android  
    }

    **/
    d.getAndroidV()//获取android版本

    d.getIOSV()// 获取ios版本

    d.getPhoneSystemType()//获取 系统类型 ios /android  /Windows Phone

    d.isPC()//是否PC

    d.isMobile()//是否手机

    d.getBrowser()//获取浏览器名称 Edge IE11  IE Opera Firefox WeiXin QQ UC Safari
```


# 参考链接

    https://github.com/joyqi/mobile-device-js
