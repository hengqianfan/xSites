interface Site {
    name: string;
    url: string | URL;
    desc?: string;
    icon?: string;
    classOne: string;
    classTwo?: string;
    tags?: string[];
    priority?: number;
    pin?: boolean;
    star?: boolean;

}

// 扁平化处理后的网址导航数据
export const sites: Site[] = [
    {
        name: "Navidrome",
        url: "http://127.0.0.1:4533/",
        icon: "navidrome",
        desc: "电脑本地搭建的音乐网站",
        classOne: "常用网址",
        classTwo: "最近常用",

    },
    {
        name: "bilibili",
        url: "https://www.bilibili.com/",
        icon: "bilibili3",
        desc: "国内著名的长视频社区",
        classOne: "常用网址",
        classTwo: "最近常用"
    },
    {
        name: "Github",
        url: "https://github.com/",
        icon: "github",
        desc: "知名的代码托管平台",
        classOne: "常用网址",
        classTwo: "最近常用"
    },
    {
        name: "Gmail",
        url: "https://mail.google.com/",
        icon: "gmail",
        desc: "谷歌邮箱",
        classOne: "常用网址",
        classTwo: "最近常用"
    },
    {
        name: "QQ邮箱",
        url: "https://mail.qq.com/",
        icon: "qqmail",
        desc: "啾啾邮箱",
        classOne: "常用网址",
        classTwo: "最近常用"
    },
    {
        name: "PP直连",
        url: "https://www.ppzhilian.com/",
        icon: "ppzl",
        desc: "可跨端传送数据、剪切板",
        classOne: "常用网址",
        classTwo: "最近常用"
    },
    {
        name: "WPS",
        url: "https://www.kdocs.cn/latest",
        icon: "wps",
        desc: "在线文档编辑",
        classOne: "常用网址",
        classTwo: "最近常用"
    },
    {
        name: "unicloud",
        url: "https://unicloud.dcloud.net.cn/",
        icon: "unicloud",
        desc: "uniapp的云后台",
        classOne: "常用网址",
        classTwo: "最近常用"
    },
    {
        name: "微信公众号",
        url: "https://mp.weixin.qq.com/",
        icon: "wechat",
        desc: "老牌自媒体平台",
        classOne: "常用网址",
        classTwo: "自媒体"
    },
    {
        name: "小红书",
        url: "https://www.xiaohongshu.com/explore",
        icon: "xiaohongshu",
        desc: "老牌自媒体平台",
        classOne: "常用网址",
        classTwo: "自媒体"
    },
    {
        name: "小黑盒",
        url: "https://www.xiaoheihe.cn",
        icon: "xiaoheihe",
        desc: "玩家社区",
        classOne: "常用网址",
        classTwo: "自媒体"
    },
    {
        name: "什么值得买",
        url: "https://www.smzdm.com/",
        icon: "smzdm",
        desc: "老牌比价平台",
        classOne: "常用网址",
        classTwo: "自媒体"
    },
    {
        name: "123网盘",
        url: "https://www.123pan.com",
        icon: "123pan",
        desc: "版本答案，可以做直链",
        classOne: "云服务类",
        classTwo: "云盘存储"
    },
    {
        name: "蓝奏云盘",
        url: "https://pc.woozooo.com/mydisk.php",
        icon: "lzy",
        desc: "不限容量，限大小",
        classOne: "云服务类",
        classTwo: "云盘存储"
    },
    {
        name: "阿里云盘",
        url: "https://www.aliyundrive.com/drive/file/backup",
        icon: "aliyunpan",
        desc: "已经限速的不限速网盘",
        classOne: "云服务类",
        classTwo: "云盘存储"
    },
    {
        name: "迅雷网盘",
        url: "https://pan.xunlei.com/",
        icon: "xunlei",
        desc: "老牌网盘",
        classOne: "云服务类",
        classTwo: "云盘存储"
    },
    {
        name: "百度网盘",
        url: "https://pan.baidu.com/disk/main#/index?classOne=all",
        icon: "baidupan",
        desc: "越来越贵，越来越臃肿",
        classOne: "云服务类",
        classTwo: "云盘存储"
    },
    {
        name: "夸克网盘",
        url: "https://pan.quark.cn/list#/list/all",
        icon: "quark",
        desc: "用得较少，不太了解",
        classOne: "云服务类",
        classTwo: "云盘存储"
    },
    {
        name: "移动网盘",
        url: "https://yun.139.com/",
        icon: "chinamobile",
        desc: "还可以，移动卡免流",
        classOne: "云服务类",
        classTwo: "云盘存储"
    },
    {
        name: "PikPak",
        url: "https://mypikpak.com/drive/all",
        icon: "pikpak",
        desc: "动作主题影院",
        classOne: "云服务类",
        classTwo: "云盘存储"
    },
    {
        name: "Alist",
        url: "http://127.0.0.1:5244/",
        icon: "alist",
        desc: "alist的浏览器本地端口地址",
        classOne: "云服务类",
        classTwo: "云盘存储"
    },
    {
        name: "Alist",
        url: "https://alist.nn.ci/zh/",
        icon: "alist",
        desc: "alist的官网与文档说明",
        classOne: "云服务类",
        classTwo: "云盘存储"
    },
    {
        name: "Alist",
        url: "https://github.com/alist-org/docs",
        icon: "alist",
        desc: "Alist的 Github 仓库地址",
        classOne: "云服务类",
        classTwo: "云盘存储"
    },
    {
        name: "华为云",
        url: "https://www.huaweicloud.com/",
        icon: "huaweiyun",
        desc: "遥遥领先",
        classOne: "云服务类",
        classTwo: "服务器"
    },
    {
        name: "阿里云",
        url: "https://home.console.aliyun.com/home/dashboard/ProductAndService",
        icon: "aliyun",
        desc: "99元一年",
        classOne: "云服务类",
        classTwo: "服务器"
    },
    {
        name: "腾讯云",
        url: "https://console.cloud.tencent.com/",
        icon: "tencent",
        desc: "企鹅的域名还是蛮便宜的",
        classOne: "云服务类",
        classTwo: "服务器"
    },
    {
        name: "cloudflare",
        url: "https://dash.cloudflare.com/",
        icon: "cloudflare",
        desc: "国际知名的服务器商家",
        classOne: "云服务类",
        classTwo: "服务器"
    },
    {
        name: "火山引擎",
        url: "https://www.volcengine.com/",
        icon: "volcengine",
        desc: "字节跳动旗下服务器产商",
        classOne: "云服务类",
        classTwo: "服务器"
    },
    {
        name: "七牛云",
        url: "https://qmall.qiniu.com/",
        icon: "qiniu",
        desc: "云服务器商家",
        classOne: "云服务类",
        classTwo: "服务器"
    },
    {
        name: "vercel",
        url: "https://vercel.com/",
        icon: "vercel",
        desc: "可以同步 Github Page 的平台",
        classOne: "云服务类",
        classTwo: "服务器"
    },
    {
        name: "缤纷云",
        url: "https://www.bitiful.com/",
        icon: "bitiful",
        desc: "对象存储服务",
        classOne: "云服务类",
        classTwo: "服务器"
    },
    {
        name: "1panel",
        url: "https://1panel.cn/",
        icon: "1panel",
        desc: "服务器面板",
        classOne: "云服务类",
        classTwo: "运维工具"
    },
    {
        name: "v2",
        url: "https://github.com/2dust/v2rayN",
        icon: "v2",
        desc: "Github加速器",
        classOne: "云服务类",
        classTwo: "下载与网络"
    },
    {
        name: "geek",
        url: "https://geekuninstaller.com/download",
        icon: "tool",
        desc: "卸载工具",
        classOne: "工具软件",
        classTwo: "普通工具软件"
    },
    {
        name: "winrar",
        url: "https://www.win-rar.com/",
        icon: "winrar",
        desc: "解压软件",
        classOne: "工具软件",
        classTwo: "普通工具软件"
    },
    {
        name: "VMware",
        url: "https://www.vmware.com/products/workstation-pro/workstation-pro-evaluation.html",
        icon: "vmware",
        desc: "虚拟机",
        classOne: "工具软件",
        classTwo: "普通工具软件"
    },
    {
        name: "WPS",
        url: "https://www.wps.cn/",
        icon: "wps",
        desc: "国产办公软件",
        classOne: "工具软件",
        classTwo: "普通工具软件"
    },
    {
        name: "snipaste",
        url: "https://zh.snipaste.com/",
        icon: "snipaste",
        desc: "好用的截图神器",
        classOne: "工具软件",
        classTwo: "普通工具软件"
    },
    {
        name: "sharex",
        url: "https://getsharex.com/",
        icon: "sharex",
        desc: "开源的截图软件",
        classOne: "工具软件",
        classTwo: "普通工具软件"
    },
    {
        name: "umi-ocr",
        url: "https://github.com/hiroi-sora/Umi-OCR/releases",
        icon: "github",
        desc: "截图、OCR工具",
        classOne: "工具软件",
        classTwo: "普通工具软件"
    },
    {
        name: "pixpin",
        url: "https://pixpinapp.com/",
        icon: "pixpin",
        desc: "截图、OCR工具（未开源）",
        classOne: "工具软件",
        classTwo: "普通工具软件"
    },
    {
        name: "motrix",
        url: "https://motrix.app/",
        icon: "motrix",
        desc: "下载器",
        classOne: "工具软件",
        classTwo: "普通工具软件"
    },
    {
        name: "PicGo",
        url: "https://github.com/Molunerfinn/PicGo/releases/",
        icon: "picgo",
        desc: "图床工具",
        classOne: "工具软件",
        classTwo: "普通工具软件"
    },
    {
        name: "obsidian",
        url: "https://obsidian.md/",
        icon: "obsidian",
        desc: "Markdown编辑器",
        classOne: "工具软件",
        classTwo: "普通工具软件"
    },
    {
        name: "notion",
        url: "https://www.notion.so/",
        icon: "notion",
        desc: "热门的笔记软件",
        classOne: "工具软件",
        classTwo: "普通工具软件"
    },
    {
        name: "语雀",
        url: "https://www.yuque.com/",
        icon: "yuque",
        desc: "出名的知识库搭建平台",
        classOne: "工具软件",
        classTwo: "普通工具软件"
    },
    {
        name: "Desktop",
        url: "https://desktop.github.com/",
        icon: "desktop",
        desc: "Git可视化，Github出品",

        classOne: "工具软件",
        classTwo: "编程工具软件"
    },
    {
        name: "hbuilderx",
        url: "https://www.dcloud.io/hbuilderx.html",
        icon: "hbuilderx",
        desc: "uniapp捆绑编辑器",
        classOne: "工具软件",
        classTwo: "编程工具软件"
    },
    {
        name: "VS code",
        url: "https://code.visualstudio.com/",
        icon: "vscode",
        desc: "前端必备编辑器",
        classOne: "工具软件",
        classTwo: "编程工具软件"
    },
    {
        name: "heidisql",
        url: "https://www.heidisql.com/",
        icon: "heidisql",
        desc: "好用的数据库管理工具",
        classOne: "工具软件",
        classTwo: "编程工具软件"
    },
    {
        name: "navicat",
        url: "https://navicat.com.cn/download/navicat-premium",
        icon: "navicat",
        desc: "知名的数据库管理工具",
        classOne: "工具软件",
        classTwo: "编程工具软件"
    },
    {
        name: "xshell",
        url: "https://www.xshell.com/zh/free-for-home-school/",
        icon: "xshell",
        desc: "名气很大的SHH客户机",
        classOne: "工具软件",
        classTwo: "编程工具软件"
    },
    {
        name: "MobaXterm",
        url: "https://mobaxterm.mobatek.net/",
        icon: "mobaxterm",
        desc: "ssh客户机",
        classOne: "工具软件",
        classTwo: "编程工具软件"
    },
    {
        name: "gkd",
        url: "https://github.com/gkd-kit/gkd",
        icon: "tool",
        desc: "跳过手机广告",
        classOne: "工具软件",
        classTwo: "手机软件"
    },
    {
        name: "gkd-订阅",
        url: "https://github.com/AIsouler/GKD_subscription",
        icon: "tool",
        desc: "gkd的订阅规则",
        classOne: "工具软件",
        classTwo: "手机软件"
    },
    {
        name: "刘明野的工具箱",
        url: "https://tool.liumingye.cn/music/#/",
        icon: "tool",
        desc: "个人工具网站",
        classOne: "工具网站",
        classTwo: "聚合工具"
    },
    {
        name: "格式转换",
        url: "https://www.aconvert.com/cn/image/png-to-svg/",
        icon: "convert",
        desc: "PNG-SVG",
        classOne: "工具网站",
        classTwo: "格式转换"
    },
    {
        name: "格式转换",
        url: "https://convertio.co/zh/",
        icon: "convert2",
        desc: "字体格式转换",
        classOne: "工具网站",
        classTwo: "格式转换"
    },
    {
        name: "shields",
        url: "https://shields.io/",
        icon: "shields",
        desc: "徽章制作网站",
        classOne: "工具网站",
        classTwo: "生成器"
    },
    {
        name: "simpleicons",
        url: "https://simpleicons.org/",
        icon: "img",
        desc: "配合shields制作图标徽章",
        classOne: "工具网站",
        classTwo: "生成器"
    },
    {
        name: "香蕉云编",
        url: "https://www.yunedit.com/",
        icon: "xjyb",
        desc: "制作证书",
        classOne: "工具网站",
        classTwo: "生成器"
    },
    {
        name: "表格生成器",
        url: "https://www.tablesgenerator.com/",
        icon: "tablesgenerator",
        desc: "快速生成表格",
        classOne: "工具网站",
        classTwo: "生成器"
    },
    {
        name: "人物生成器",
        url: "https://www.fakepersongenerator.com/",
        icon: "person",
        desc: "快速生成虚拟的海外身份数据",
        classOne: "工具网站",
        classTwo: "生成器"
    },
    {
        name: "CSS工具网",
        url: "https://css.bqrdh.com/safety-color",
        icon: "tool",
        desc: "解决CSS的各种需求",
        classOne: "工具网站",
        classTwo: "生成器"
    },
    {
        name: "图司机",
        url: "https://www.tusij.com/color/palette",
        icon: "tool",
        desc: "配色工具",
        classOne: "工具网站",
        classTwo: "生成器"
    },
    {
        name: "零代码工具箱",
        url: "https://www.lingdaima.com/",
        icon: "tool",
        desc: "拟态风CSS快速生成",
        classOne: "工具网站",
        classTwo: "生成器"
    },
    {
        name: "Bilibili",
        url: "https://www.bilibili.com/",
        icon: "bilibili",
        desc: "长视频社区",
        classOne: "社区资讯",
        classTwo: "社交论坛"
    },
    {
        name: "知乎",
        url: "https://www.zhihu.com/",
        icon: "zhihu",
        desc: "网络版故事会",
        classOne: "社区资讯",
        classTwo: "社交论坛"
    },
    {
        name: "百度贴吧",
        url: "https://tieba.baidu.com/index.html",
        icon: "tieba",
        desc: "瘦死的骆驼",
        classOne: "社区资讯",
        classTwo: "社交论坛"
    },
    {
        name: "twitter",
        url: "https://twitter.com/home",
        icon: "twitter",
        desc: "国际版微博",
        classOne: "社区资讯",
        classTwo: "社交论坛"
    },
    {
        name: "telegram",
        url: "https://web.telegram.org/k/",
        icon: "telegram",
        desc: "国际版QQ群",
        classOne: "社区资讯",
        classTwo: "社交论坛"
    },
    {
        name: "Github",
        url: "https://github.com/",
        icon: "github",
        desc: "知名的代码托管平台",
        classOne: "社区资讯",
        classTwo: "专业论坛"
    },
    {
        name: "Gitee",
        url: "https://gitee.com/",
        icon: "gitee",
        desc: "国内版Gitee",
        classOne: "社区资讯",
        classTwo: "专业论坛"
    },
    {
        name: "CSDN",
        url: "https://www.csdn.net/",
        icon: "csdn",
        desc: "程序员版知乎",
        classOne: "社区资讯",
        classTwo: "专业论坛"
    },
    {
        name: "小黑盒",
        url: "https://www.xiaoheihe.cn",
        icon: "xiaoheihe",
        desc: "玩家社区",
        classOne: "社区资讯",
        classTwo: "游戏社区"
    },
    {
        name: "游民星空",
        url: "https://www.gamersky.com/",
        icon: "gamersky",
        desc: "资源网站转型的玩家社区",
        classOne: "社区资讯",
        classTwo: "游戏社区"
    },
    {
        name: "Node.js",
        url: "https://nodejs.org/en",
        icon: "nodejs",
        desc: "JS大功臣",
        classOne: "编程技术",
        classTwo: "JS生态"
    },
    {
        name: "npm",
        url: "https://www.npmjs.com/",
        icon: "npm",
        desc: "包管理器",
        classOne: "编程技术",
        classTwo: "JS生态"
    },
    {
        name: "axios",
        url: "https://axios-http.com/docs/desc",
        icon: "axios",
        desc: "网络请求",
        classOne: "编程技术",
        classTwo: "JS生态"
    },
    {
        name: "express中文网",
        url: "https://www.expressjs.com.cn/",
        icon: "express",
        desc: "web应用开发框架",
        classOne: "编程技术",
        classTwo: "JS生态"
    },
    {
        name: "ejs",
        url: "https://ejs.co/",
        icon: "ejs",
        desc: "JS的模板引擎",
        classOne: "编程技术",
        classTwo: "JS生态"
    },
    {
        name: "Vue",
        url: "https://cn.vuejs.org/",
        icon: "vue",
        desc: "知名的前端框架",
        classOne: "编程技术",
        classTwo: "JS生态"
    },
    {
        name: "pinia",
        url: "https://pinia.vuejs.org/zh/",
        icon: "pinia",
        desc: "状态管理工具",
        classOne: "编程技术",
        classTwo: "JS生态"
    },
    {
        name: "element-plus",
        url: "https://element-plus.org/zh-CN/",
        icon: "elementplus",
        desc: "UI组件库",
        classOne: "编程技术",
        classTwo: "JS生态"
    },
    {
        name: "electron",
        url: "https://www.electronjs.org/zh/docs/latest/",
        icon: "electron",
        desc: "桌面应用程序js开发",
        classOne: "编程技术",
        classTwo: "JS生态"
    },
    {
        name: "Expo",
        url: "https://expo.dev/",
        icon: "expo",
        desc: "react制作app",
        classOne: "编程技术",
        classTwo: "JS生态"
    },
    {
        name: "uniapp",
        url: "https://uniapp.dcloud.net.cn/quickstart.html#",
        icon: "uniapp",
        desc: "bug不断，捆绑生态",
        classOne: "编程技术",
        classTwo: "JS生态"
    },
    {
        name: "unicloud",
        url: "https://unicloud.dcloud.net.cn/",
        icon: "unicloud",
        desc: "uni的配套服务器",
        classOne: "编程技术",
        classTwo: "JS生态"
    },
    {
        name: "cursor",
        url: "https://cursor.com/cn/home",
        icon: "cursor",
        desc: "AI代码编辑器",
        classOne: "编程技术",
        classTwo: "其他"
    },
    {
        name: "vxe-table",
        url: "https://vxetable.cn/",
        icon: "vxe",
        desc: "vue表格",
        classOne: "编程技术",
        classTwo: "其他"
    },
    {
        name: "Markdown",
        url: "https://markdown.com.cn/basic-syntax/",
        icon: "markdown",
        desc: "简单却实用的标记语言",
        classOne: "编程技术",
        classTwo: "其他"
    },
    {
        name: "JS文档",
        url: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript",
        icon: "javascript",
        desc: "提供 JS 的api查询",
        classOne: "编程技术",
        classTwo: "其他"
    },
    {
        name: "docker",
        url: "https://www.docker.com/",
        icon: "docker",
        desc: "命令行版的虚拟机",
        classOne: "编程技术",
        classTwo: "其他"
    },
    {
        name: "GPT",
        url: "https://chatgpt.com/",
        icon: "gpt",
        desc: "划时代的AI大模型",
        classOne: "人工智能",
        classTwo: "语言大模型"
    },
    {
        name: "Gemini",
        url: "https://gemini.google.com/",
        icon: "gemini",
        desc: "谷歌旗下的大模型",
        classOne: "人工智能",
        classTwo: "语言大模型"
    },
    {
        name: "claude",
        url: "https://claude.ai/",
        icon: "claude",
        desc: "由Anthropic开发的AI模型",
        classOne: "人工智能",
        classTwo: "语言大模型"
    },
    {
        name: "Grok",
        url: "https://x.ai/grok",
        icon: "grok",
        desc: "马斯克旗下的AI模型",
        classOne: "人工智能",
        classTwo: "语言大模型"
    },
    {
        name: "通义",
        url: "https://tongyi.aliyun.com/",
        icon: "tongyi",
        desc: "阿里巴巴旗下的语言大模型",
        classOne: "人工智能",
        classTwo: "语言大模型"
    },
    {
        name: "智普清言",
        url: "https://chatglm.cn/",
        icon: "chatglm",
        desc: "清华团队的语言大模型",
        classOne: "人工智能",
        classTwo: "语言大模型"
    },
    {
        name: "豆包",
        url: "https://www.doubao.com/chat/",
        icon: "doubao",
        desc: "字动跳节旗下的语言大模型",
        classOne: "人工智能",
        classTwo: "语言大模型"
    },
    {
        name: "文心一言",
        url: "https://yiyan.baidu.com/",
        icon: "yiyan",
        desc: "百度旗下的语言大模型",
        classOne: "人工智能",
        classTwo: "语言大模型"
    },
    {
        name: "星火AI",
        url: "https://xinghuo.xfyun.cn/",
        icon: "xinghuo",
        desc: "讯飞旗下的语言大模型",
        classOne: "人工智能",
        classTwo: "语言大模型"
    },
    {
        name: "腾讯混元",
        url: "https://hunyuan.tencent.com/",
        icon: "hunyuan",
        desc: "腾讯旗下，蛮无语的，强迫下APP",
        classOne: "人工智能",
        classTwo: "语言大模型"
    },
    {
        name: "腾讯元宝",
        url: "https://yuanbao.tencent.com/chat",
        icon: "yuanbao",
        desc: "腾讯旗下，基于混元的AI大模型",
        classOne: "人工智能",
        classTwo: "语言大模型"
    },
    {
        name: "deepseek",
        url: "https://www.deepseek.com/",
        icon: "deepseek",
        desc: "宣传方面，有些用力过猛",
        classOne: "人工智能",
        classTwo: "语言大模型"
    },
    {
        name: "kimi",
        url: "https://kimi.moonshot.cn/",
        icon: "kimi",
        desc: "deepseek把它顶下去了",
        classOne: "人工智能",
        classTwo: "语言大模型"
    },
    {
        name: "可灵AI",
        url: "https://klingai.kuaishou.com/",
        icon: "klingai",
        desc: "快手旗下的AI绘图与AI视频网站",
        classOne: "人工智能",
        classTwo: "AI绘画与视频"
    },
    {
        name: "SORA",
        url: "https://sora.com/",
        icon: "openai",
        desc: "openAI旗下的AI视频网站",
        classOne: "人工智能",
        classTwo: "AI绘画与视频"
    },
    {
        name: "playground",
        url: "https://playground.com/create",
        icon: "ai",
        desc: "一个AI绘图网站",
        classOne: "人工智能",
        classTwo: "AI绘画与视频"
    },
    {
        name: "NoCode",
        url: "https://nocode.cn/",
        icon: "ai",
        desc: "美团旗下的零代码开发平台",
        classOne: "人工智能",
        classTwo: "AI相关网站"
    },
    {
        name: "AI研究站",
        url: "https://www.aiyjs.com/",
        icon: "ai",
        desc: "集合AI项目的网站",
        classOne: "人工智能",
        classTwo: "AI相关网站"
    },
    {
        name: "AI导航网",
        url: "https://idaohang.cn/",
        icon: "ai",
        desc: "集合AI项目的网站",
        classOne: "人工智能",
        classTwo: "AI相关网站"
    },
    {
        name: "iconfont",
        url: "https://www.iconfont.cn/",
        icon: "iconfont",
        desc: "阿里旗下的图标库",
        classOne: "资源网站",
        classTwo: "图标图片"
    },
    {
        name: "Emoji表情",
        url: "https://www.emojiall.com/zh-hans",
        icon: "emoji",
        desc: "emoji表情库",
        classOne: "资源网站",
        classTwo: "图标图片"
    },
    {
        name: "shields",
        url: "https://www.shields.io/badges",
        icon: "shields",
        desc: "图片徽章制作",
        classOne: "资源网站",
        classTwo: "图标图片"
    },
    {
        name: "worldLogo",
        url: "https://worldvectorlogo.com",
        icon: "worldlogo",
        desc: "世界知名的公司与产品标志",
        classOne: "资源网站",
        classTwo: "图标图片"
    },
    {
        name: "表情直链",
        url: "https://emotion.xiaokang.me/#/",
        icon: "publiclogo",
        desc: "公益提供表情包直链的网站",
        classOne: "资源网站",
        classTwo: "图标图片"
    },
    {
        name: "Pexels",
        url: "https://www.pexels.com",
        icon: "pexels",
        desc: "免费的图片资源网站",
        classOne: "资源网站",
        classTwo: "图标图片"
    },
    {
        name: "wallhaven",
        url: "https://wallhaven.cc/",
        icon: "img",
        desc: "免费的图片资源网站",
        classOne: "资源网站",
        classTwo: "图标图片"
    },
    {
        name: "元气壁纸",
        url: "https://bizhi.cheetahfun.com/dn/c2d/",
        icon: "yuanqi",
        desc: "壁纸网站",
        classOne: "资源网站",
        classTwo: "图标图片"
    },
    {
        name: "搜图神器",
        url: "https://www.soutushenqi.com/home",
        icon: "stsq",
        desc: "高清壁纸网站",
        classOne: "资源网站",
        classTwo: "图标图片"
    },
    {
        name: "逗比拯救世界",
        url: "https://www.dbbqb.com/",
        icon: "img",
        desc: "表情包网站",
        classOne: "资源网站",
        classTwo: "图标图片"
    },
    {
        name: "种子音乐",
        url: "https://zz123.com/",
        icon: "music",
        desc: "音乐资源",
        classOne: "资源网站",
        classTwo: "音乐音频"
    },
    {
        name: "myfreemp3",
        url: "https://tool.liumingye.cn/music/#/",
        icon: "music",
        desc: "在线音乐播放（已停运）",
        classOne: "资源网站",
        classTwo: "音乐音频"
    },
    {
        name: "熊猫无损",
        url: "https://www.xmwav.com/",
        icon: "music",
        desc: "NB！无损音乐下载",
        classOne: "资源网站",
        classTwo: "音乐音频"
    },
    {
        name: "Bilibili",
        url: "https://www.bilibili.com/",
        icon: "bilibili",
        desc: "水分越来越大的视频平台",
        classOne: "资源网站",
        classTwo: "视频资源"
    },
    {
        name: "腾讯视频",
        url: "https://v.qq.com/",
        icon: "txsp",
        desc: "腾讯帝国",
        classOne: "资源网站",
        classTwo: "视频资源"
    },
    {
        name: "Netflix",
        url: "https://www.netflix.com/",
        icon: "netflix",
        desc: "知名的视频平台",
        classOne: "资源网站",
        classTwo: "视频资源"
    },
    {
        name: "youtube",
        url: "https://www.youtube.com/",
        icon: "youtube",
        desc: "世界上最大的视频分享平台",
        classOne: "资源网站",
        classTwo: "视频资源"
    },
    {
        name: "人人视频",
        url: "https://m.rrmj.plus/pc",
        icon: "renren",
        desc: "看外国的电视剧还是挺方便的",
        classOne: "资源网站",
        classTwo: "视频资源"
    },
    {
        name: "猫狸盘搜",
        url: "https://www.alipansou.com/",
        icon: "maoli",
        desc: "阿里云盘资源",
        classOne: "资源网站",
        classTwo: "视频资源"
    },
    {
        name: "盘他",
        url: "https://www.91panta.cn/",
        icon: "video",
        desc: "中国移动云盘资源",
        classOne: "资源网站",
        classTwo: "视频资源"
    },
    {
        name: "影视森林",
        url: "https://www.549.tv/",
        icon: "video",
        desc: "导航站，收集了影视资源站点",
        classOne: "资源网站",
        classTwo: "视频资源"
    },
    {
        name: "低端影视",
        url: "https://ddys.pro/",
        icon: "video",
        desc: "网友自建的影视站点，资源丰富",
        classOne: "资源网站",
        classTwo: "视频资源"
    },
    {
        name: "小白网",
        url: "https://m.xb84w.net/",
        icon: "xiaobai",
        desc: "已失效",
        classOne: "资源网站",
        classTwo: "视频资源"
    },
    {
        name: "可可影视",
        url: "https://www.keke13.com/",
        icon: "keke",
        desc: "在线视频资源平台",
        classOne: "资源网站",
        classTwo: "视频资源"
    },
    {
        name: "动漫啦",
        url: "https://www.dongman.la/",
        icon: "dongman",
        desc: "漫画资源",
        classOne: "资源网站",
        classTwo: "漫画与动漫"
    },
    {
        name: "西瓜卡通",
        url: "https://www.xgcartoon.com/",
        icon: "dongman",
        desc: "动漫资源网站",
        classOne: "资源网站",
        classTwo: "漫画与动漫"
    },
    {
        name: "AGE",
        url: "https://www.agedm.org/",
        icon: "dongman",
        desc: "动漫资源网站",
        classOne: "资源网站",
        classTwo: "漫画与动漫"
    },
    {
        name: "AGE-仓库",
        url: "https://github.com/agefanscom/website",
        icon: "dongman",
        desc: "AGE 地址更新",
        classOne: "资源网站",
        classTwo: "漫画与动漫"
    },
    {
        name: "嗷呜动漫",
        url: "https://www.moedm.net/",
        icon: "video",
        desc: "(已关闭)动漫资源网站",
        classOne: "资源网站",
        classTwo: "漫画与动漫"
    },
    {
        name: "起点小说",
        url: "https://www.qidian.com/",
        icon: "qidian",
        desc: "小说界的龙头老大，大佬云集",
        classOne: "资源网站",
        classTwo: "小说"
    },
    {
        name: "番茄小说",
        url: "https://fanqienovel.com/",
        icon: "fanqienovel",
        desc: "免费小说，但是要看广告，能接受",
        classOne: "资源网站",
        classTwo: "小说"
    },
    {
        name: "天籁小说",
        url: "https://tianlai100.com",
        icon: "book",
        desc: "本平台提供的新小说资源均是搜集自各个网络平台.",
        classOne: "资源网站",
        classTwo: "小说"
    },
    {
        name: "Z-Library",
        url: "https://z-lib.io/",
        icon: "z-lib",
        desc: "电子书图书馆",
        classOne: "资源网站",
        classTwo: "电子书"
    },
    {
        name: "KMS",
        url: "https://kms.cx/",
        icon: "kms",
        desc: "激活系统",
        classOne: "资源网站",
        classTwo: "电脑相关"
    },
    {
        name: "MSDN",
        url: "https://msdn.itellyou.cn/",
        icon: "microsoft",
        desc: "系统镜像站点",
        classOne: "资源网站",
        classTwo: "电脑相关"
    },
    {
        name: "油叉",
        url: "https://greasyfork.org/zh-CN",
        icon: "greasyfork",
        desc: "油猴脚本库",
        classOne: "资源网站",
        classTwo: "电脑相关"
    },
    {
        name: "吾爱破解",
        url: "https://www.52pojie.cn/",
        icon: "52pojie",
        desc: "提供各种学习版软件",
        classOne: "资源网站",
        classTwo: "电脑相关"
    },
    {
        name: "软件管家",
        url: "https://mp.weixin.qq.com/s/JmJdGcTduqmzxSdC-wokwA",
        icon: "wechat",
        desc: "提供各种学习版软件",
        classOne: "资源网站",
        classTwo: "电脑相关"
    },
    {
        name: "qwerty-learner",
        url: "https://gitee.com/KaiyiWing/qwerty-learner",
        icon: "qwertylearner",
        desc: "coder背单词的软件",
        classOne: "资源网站",
        classTwo: "其他"
    },
    {
        name: "steam",
        url: "https://store.steampowered.com/",
        icon: "steam",
        desc: "玩物丧志、快乐至上",
        classOne: "游戏相关",
        classTwo: "游戏平台"
    },
    {
        name: "epic",
        url: "https://store.epicgames.com/en-US/",
        icon: "epic",
        desc: "知名游戏白嫖平台",
        classOne: "游戏相关",
        classTwo: "游戏平台"
    },
    {
        name: "humblebundle",
        url: "https://zh.humblebundle.com/",
        icon: "humblebundle",
        desc: "慈善游戏月包平台",
        classOne: "游戏相关",
        classTwo: "游戏平台"
    },
    {
        name: "育碧",
        url: "https://zh-cn.ubisoft.com/",
        icon: "ubisoft",
        desc: "骨折3A大户",
        classOne: "游戏相关",
        classTwo: "游戏平台"
    },
    {
        name: "nexusmods",
        url: "https://www.nexusmods.com/",
        icon: "nexusmods",
        desc: "n网，MOD资源平台",
        classOne: "游戏相关",
        classTwo: "游戏辅助"
    },
    {
        name: "curseforge",
        url: "https://www.curseforge.com/",
        icon: "curseforge",
        desc: "模组平台",
        classOne: "游戏相关",
        classTwo: "游戏辅助"
    },
    {
        name: "wemod",
        url: "https://www.wemod.com/zh",
        icon: "wemod",
        desc: "比较好用的游戏修改器",
        classOne: "游戏相关",
        classTwo: "游戏辅助"
    },
    {
        name: "风灵月影",
        url: "https://flingtrainer.com/",
        icon: "flyy",
        desc: "国内知名的游戏修改器",
        classOne: "游戏相关",
        classTwo: "游戏辅助"
    },
    {
        name: "hmcl",
        url: "https://github.com/HMCL-dev/HMCL/releases",
        icon: "hmcl",
        desc: "开源的MC启动器",
        classOne: "游戏相关",
        classTwo: "游戏辅助"
    },
    {
        name: "PCL2",
        url: "https://afdian.com/a/LTCat",
        icon: "pcl2",
        desc: "我的世界启动器",
        classOne: "游戏相关",
        classTwo: "游戏辅助"
    },
    {
        name: "Game520",
        url: "https://www.gamer520.com",
        icon: "game",
        desc: "官网",
        classOne: "游戏相关",
        classTwo: "游戏资源"
    },
    {
        name: "Game520",
        url: "https://sway.cloud.microsoft/1zyVegf0n3cHdR8o",
        icon: "game",
        desc: "防失联文档",
        classOne: "游戏相关",
        classTwo: "游戏资源"
    },
    {
        name: "MC百科",
        url: "https://www.mcmod.cn/",
        icon: "mcmod",
        desc: "MC的攻略网站",
        classOne: "游戏相关",
        classTwo: "游戏攻略与资讯"
    },
    {
        name: "小黑盒",
        url: "https://www.xiaoheihe.cn/community/user/post_list",
        icon: "xiaoheihe",
        desc: "玩家社区",
        classOne: "游戏相关",
        classTwo: "游戏攻略与资讯"
    },
    {
        name: "游民星空",
        url: "https://www.gamersky.com/",
        icon: "gamersky",
        desc: "资源网站转型的玩家社区",
        classOne: "游戏相关",
        classTwo: "游戏攻略与资讯"
    },
    {
        name: "挂刀行情网",
        url: "https://www.iflow.work/steam/",
        icon: "web",
        desc: "steam 倒余额",
        classOne: "游戏相关",
        classTwo: "游戏攻略与资讯"
    },
    {
        name: "挂刀计算器",
        url: "https://www.csgola.com/calc/",
        icon: "web",
        desc: "折扣比例计算",
        classOne: "游戏相关",
        classTwo: "游戏攻略与资讯"
    },
    {
        name: "steam++",
        url: "https://steampp.net/",
        icon: "steampp",
        desc: "游戏加速器",
        classOne: "游戏相关",
        classTwo: "加速器"
    },
    {
        name: "steam++",
        url: "https://github.com/BeyondDimension/SteamTools/releases",
        icon: "steampp",
        desc: "Github 地址",
        classOne: "游戏相关",
        classTwo: "加速器"
    },
    {
        name: "虚幻引擎",
        url: "https://www.unrealengine.com",
        icon: "unrealengine",
        desc: "C++语言开发游戏",
        classOne: "游戏相关",
        classTwo: "游戏开发"
    },
    {
        name: "Cocos Creator",
        url: "https://www.cocos.com/creator",
        icon: "cocoscreator",
        desc: "ts语言开发游戏",
        classOne: "游戏相关",
        classTwo: "游戏开发"
    },
    {
        name: "30工具网",
        url: "30aitool.com",
        icon: "tool",
        desc: "工具合集",
        classOne: "博客网站",
        classTwo: "综合性博客"
    },
    {
        name: "零度博客",
        url: "https://www.freedidi.com/",
        icon: "ldjs",
        desc: "很多有用的内容",
        classOne: "博客网站",
        classTwo: "综合性博客"
    },
    {
        name: "资源核",
        url: "https://www.onezyh.cn/",
        icon: "blog",
        desc: "一般",
        classOne: "博客网站",
        classTwo: "综合性博客"
    },
    {
        name: "ShellRaining",
        url: "https://shellraining.github.io/",
        icon: "blog",
        desc: "shellRaining的博客",
        classOne: "博客网站",
        classTwo: "综合性博客"
    },
    {
        name: "系统极客",
        url: "https://www.sysgeek.cn/windows/",
        icon: "xtjk",
        desc: "关于电脑的网站",
        classOne: "博客网站",
        classTwo: "综合性博客"
    },
    {
        name: "长乐未央",
        url: "https://clwy.cn/",
        icon: "blog",
        desc: "买网课的，但是课程还行",
        classOne: "博客网站",
        classTwo: "综合性博客"
    },
    {
        name: "鑫空间",
        url: "https://www.zhangxinxu.com/",
        icon: "personal",
        desc: "张鑫宇的博客，具有许多学习价值，存在干货。",
        classOne: "博客网站",
        classTwo: "个人技术博客"
    },
    {
        name: "阮一峰",
        url: "https://www.ruanyifeng.com/blog/",
        icon: "personal",
        desc: "挺出名的前端大佬",
        classOne: "博客网站",
        classTwo: "个人技术博客"
    },
    {
        name: "茂茂物语",
        url: "https://github.com/maomao1996/mm-notes",
        icon: "vitepress",
        desc: "vitepress前端博客",
        classOne: "博客网站",
        classTwo: "个人技术博客"
    },
    {
        name: "WL博客",
        url: "https://whlit.github.io/",
        icon: "vitepress",
        desc: "vitepress博客",
        classOne: "博客网站",
        classTwo: "个人技术博客"
    },
    {
        name: "子卿博客",
        url: "https://zichin.com/blog/",
        icon: "vitepress",
        desc: "vitepress博客",
        classOne: "博客网站",
        classTwo: "个人技术博客"
    },
    {
        name: "粥里有勺糖",
        url: "https://sugarat.top/",
        icon: "vitepress",
        desc: "目前发现的，功能比较花哨的vitepress博客",
        classOne: "博客网站",
        classTwo: "个人技术博客"
    },
    {
        name: "韩小韩博客",
        url: "https://www.vvhan.com/",
        icon: "astro",
        desc: "挺好看的astro博客，博主提供了许多知识与API",
        classOne: "博客网站",
        classTwo: "个人技术博客"
    },
    {
        name: "curve博客",
        url: "https://github.com/imsyy/vitepress-theme-curve",
        icon: "vitepress",
        desc: "基于vitepress开发的主题",
        classOne: "博客网站",
        classTwo: "个人技术博客"
    },
    {
        name: "广州图书馆",
        url: "https://www.gzlib.org.cn/",
        icon: "gzlib",
        desc: "周末小孩太多",
        classOne: "公众服务",
        classTwo: "服务"
    },
    {
        name: "法律法规数据库",
        url: "https://flk.npc.gov.cn/",
        icon: "book",
        desc: "收录了以往与现行的法律法规，是权威性的官方网站。",
        classOne: "公众服务",
        classTwo: "服务"
    },
    {
        name: "中国农业银行",
        url: "https://www.abchina.com/cn/",
        icon: "abchina",
        desc: "学校绑定银行卡",
        classOne: "公众服务",
        classTwo: "服务"
    },
    {
        name: "国家开发银行",
        url: "https://sls.cdb.com.cn/",
        icon: "cdb",
        desc: "国家的人文关怀",
        classOne: "公众服务",
        classTwo: "服务"
    }
]