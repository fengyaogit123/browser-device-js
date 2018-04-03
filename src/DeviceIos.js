//获取IOS的机型
export default class DeviceIos {
    constructor() {
        this.devices = {
            "Apple A7 GPU": {
                1136: ["iPhone 5", "iPhone 5s"],
                2048: ["iPad Air", "iPad Mini 2", "iPad Mini 3"]
            },

            "Apple A8 GPU": {
                1136: ["iPod touch (6th generation)"],
                1334: ["iPhone 6"],
                2001: ["iPhone 6 Plus"],
                2048: ["iPad Air 2", "iPad Mini 4"]
            },

            "Apple A9 GPU": {
                1136: ["iPhone SE"],
                1334: ["iPhone 6s"],
                2001: ["iPhone 6s Plus"],
                2224: ["iPad Pro (9.7-inch)"],
                2732: ["iPad Pro (12.9-inch)"]
            },

            "Apple A10 GPU": {
                1334: ["iPhone 7"],
                2001: ["iPhone 7 Plus"]
            },

            "Apple A11 GPU": {
                1334: ["iPhone 8"],
                2208: ["iPhone 8 Plus"],
                2436: ["iPhone X"],
            }
        }
    }
    getGlRenderer() {
        try {
            let canvas = document.createElement('canvas');
            let gl = canvas.getContext('experimental-webgl');
            let info = gl.getExtension('WEBGL_debug_renderer_info');
            let glRenderer = gl.getParameter(info.UNMASKED_RENDERER_WEBGL);
            return glRenderer
        } catch (e) {
            return ''
        }
    }
    getHeight() {
        return Math.max(screen.width, screen.height) * (window.devicePixelRatio || 1);
    }
    getPhoneType(GPU) {
        let height = this.getHeight()
        GPU = GPU || this.getGlRenderer()
        let device = this.devices[GPU]
        if (!device) return ''
        return device[height][0] ? device[height][0] : ''
    }
}
