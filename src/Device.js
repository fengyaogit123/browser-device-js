import DeviceIos from './DeviceIos'
export default class Device {
    constructor(userAgent) {
        if (userAgent) {
            return this.ua = userAgent.toLowerCase();
        }

        if (window) {
            return this.ua = window.navigator.userAgent.toLowerCase()
        }

        throw new Error('userAgent is not defined！')
    }

    getDevice() {
        let device = {
            browserVer: "",//浏览器版本
            browserName: "",//浏览器名称 QQ 火狐 谷歌 360 苹果 搜狗 IE
            phoneSystemType: "",//手机系统类型 android ios
            phoneSystemVer: "",//手机系统版本  android 4.1 ios6
            phoneName: "",//小米 魅族
        };

        device.browserName = this.getBrowser()

        if (this.isMobile()) {
            let phone = this.getPhoneSystemType()
            if (phone == 'IOS') {
                device.phoneSystemVer = this.getIOSV()
                device.phoneName = new DeviceIos().getPhoneType();
            }

            if (phone == 'Android') {
                device.phoneSystemVer = this.getAndroidV()
                device.phoneName = "Android"
            }

            device.phoneSystemType = phone
            //手机类型 比如小米 魅族 可以通过GPU判断 后期增加
            //android版本  4.1 4.2  ios几

            return device;
        }

        return device;
    }

    //获取安卓版本
    getAndroidV() {
        let ua = this.ua;
        let version = '';

        if (ua.indexOf("android") > 0) {
            let v_info = ua.match(/android [\d._]+/gi);
            version = (v_info + "").replace(/[^0-9|_.]/ig, "").replace(/_/ig, ".");
        }

        return version;
    }

    //获取ios系统版本版本
    getIOSV() {
        let ua = this.ua;
        let version = '';

        if (ua.indexOf("like mac os x") > 0) {
            let reg = /os [\d._]+/gi;
            let v_info = ua.match(reg);
            version = (v_info + "").replace(/[^0-9|_.]/ig, "").replace(/_/ig, ".");
        }

        return version;
    }

    //返回手机系统
    getPhoneSystemType() {
        let u = this.ua;
        let isAndroid = u.indexOf('android') > -1 || u.indexOf('adr') > -1; //android终端
        let isiOS = !!u.match(/\(i[^;]+;( u;)? cpu.+mac os x/); //ios终端
        let isWinPhone = u.indexOf('Windows Phone'.toLowerCase()) > -1
        if (isAndroid) return 'Android'
        if (isiOS) return 'IOS'
        if(isWinPhone) return 'Windows Phone'
        return ''
    }

    //是否是PC
    isPC() {
        return !!!this.ua.match(/(iPhone|iPod|android|ios|iPad|windows phone|tablet)/i)
    }

    //是否是手机
    isMobile() {
        return !this.isPC();
    }

    //获取浏览器类型 
    getBrowser() {
        const ua = this.ua;
        const is = (str) => {
            return ua.indexOf(str.toLowerCase()) > -1
        }
        const ie11 = () => {
            return ("ActiveXObject" in window)
        }
        if (is("Opera")) return "Opera"
        if (is("compatible") && is("MSIE")) return "IE"
        if (is("NET4.0C") && is("rv") && is("Windows")) return "IE"
        if (ie11()) return "IE11"
        if (is("Edge") && is("NT")) return "Edge"
        if (is("Firefox")) return "Firefox"
        if (is("micromessenger")) return "WeiXin"
        if (is("UCBrowser")) return "UCBrowser"
        if (is("QQBrowser")) return "QQBrowser"
        if (is("Safari") && !is("Chrome")) return "Safari"
        if (is("Safari") && is("Chrome")) return "Chrome"
        return ''
    }
}

