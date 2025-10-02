export interface Site {

    name: string;
    url: string | URL;
    desc?: string;
    icon?: string;
    classOne: '常用网址' | '云服务类' | '软件工具' | '社区资讯' | '编程技术' | '人工智能' | '资源网站' | '游戏相关' | '博客网站' | '公众服务';
    classTwo?: string;
    tags?: string[];
    priority?: number;
    pin?: boolean;
    star?: boolean;
    index?: number;
}
