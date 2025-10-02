<template>
    <div class="admin-all">
        <div class="admin-nav">

            <div class="admin-nav-item">搜索网址</div>
            <div class="admin-nav-item" @click="addSite">新增网址</div>
            <div class="admin-nav-item" @click="downloadJs">下载数据</div>


        </div>
        <div class="admin-main">
            <div class="admin-site" v-for="(site, index) in data">
                <div class="admin-site-option">
                    <!-- 打开修改页面时，将网址信息和索引值提交 -->
                    <div class="admin-site-option-type" @click="openEditSitePage(site, index)">name</div>
                    <div class="admin-site-option-value">{{ site.name }}</div>

                </div>
                <div class="admin-site-option">
                    <div class="admin-site-option-type">url</div>
                    <div class="admin-site-option-value">{{ site.url }}</div>
                </div>
                <div class="admin-site-option">
                    <div class="admin-site-option-type">icon</div>
                    <div class="admin-site-option-value">{{ site.icon }}</div>
                </div>
                <div class="admin-site-option">
                    <div class="admin-site-option-type">desc</div>
                    <div class="admin-site-option-value">{{ site.desc || 'none' }}</div>
                </div>
                <div class="admin-site-option">
                    <div class="admin-site-option-type">classOne</div>
                    <div class="admin-site-option-value">{{ site.classOne }}</div>
                </div>
                <div class="admin-site-option">
                    <div class="admin-site-option-type">classTwo</div>
                    <div class="admin-site-option-value">{{ site.classTwo || 'none' }}</div>
                </div>
                <div class="admin-site-option">
                    <div class="admin-site-option-type">pin</div>
                    <div class="admin-site-option-value">{{ site.pin || false }}</div>
                </div>
                <div class="admin-site-option">
                    <div class="admin-site-option-type">priority</div>
                    <div class="admin-site-option-value">{{ site.priority || 0 }}</div>
                </div>
                <div class="admin-site-option">
                    <div class="admin-site-option-type">star</div>
                    <div class="admin-site-option-value">{{ site.star || false }}</div>
                </div>
                <div class="admin-site-option">
                    <div class="admin-site-option-type">tags</div>
                    <div class="admin-site-option-value">{{ site.tags || [] }}</div>
                </div>

            </div>
        </div>

        <!-- 编辑界面 -->
        <div class="admin-edit" v-if="isOpenEditPage">
            <div class="admin-edit-site">
                <!-- <div class="admin-edit-site-option">
                    <div class="admin-edit-site-option-type">id</div>
                    <div class="admin-edit-site-option-value">{{ siteEdited.id || 'none' }}</div>

                </div> -->
                <div class="admin-edit-site-option">
                    <div class="admin-edit-site-option-type">name</div>

                    <input class="admin-edit-site-option-value" type="text" v-model="siteEdited.name"
                        placeholder="修改名称" />
                </div>
                <div class="admin-edit-site-option">
                    <div class="admin-edit-site-option-type">url</div>

                    <input class="admin-edit-site-option-value" type="text" v-model="siteEdited.url"
                        placeholder="修改url" />
                </div>
                <div class="admin-edit-site-option">
                    <div class="admin-edit-site-option-type">icon</div>

                    <input class="admin-edit-site-option-value" type="text" v-model="siteEdited.icon"
                        placeholder="修改icon" />
                </div>
                <div class="admin-edit-site-option">
                    <div class="admin-edit-site-option-type">desc</div>

                    <input class="admin-edit-site-option-value" type="text" v-model="siteEdited.desc"
                        placeholder="修改描述" />
                </div>
                <div class="admin-edit-site-option">
                    <div class="admin-edit-site-option-type">classOne</div>

                    <input class="admin-edit-site-option-value" type="text" v-model="siteEdited.classOne"
                        placeholder="修改大分类" />
                </div>
                <div class="admin-edit-site-option">
                    <div class="admin-edit-site-option-type">classTwo</div>

                    <input class="admin-edit-site-option-value" type="text" v-model="siteEdited.classTwo"
                        placeholder="修改小分类" />
                </div>
                <div class="admin-edit-site-option">
                    <div class="admin-edit-site-option-type">pin</div>
                    <input class="admin-edit-site-option-value" type="text" v-model="siteEdited.pin"
                        placeholder="是否置顶文章" />
                </div>
                <div class="admin-edit-site-option">
                    <div class="admin-edit-site-option-type">priority</div>

                    <input class="admin-edit-site-option-value" type="text" v-model="siteEdited.priority"
                        placeholder="网站的显示优先级" />
                </div>
                <div class="admin-edit-site-option">
                    <div class="admin-edit-site-option-type">star</div>

                    <input class="admin-edit-site-option-value" type="text" v-model="siteEdited.star"
                        placeholder="是否收藏网址" />
                </div>
                <div class="admin-edit-site-option">
                    <div class="admin-edit-site-option-type">tags</div>

                    <input class="admin-edit-site-option-value" type="text" v-model="siteEdited.tags"
                        placeholder="网站的标签" />
                </div>
                <button @click="editSite(siteEdited)">提交 </button>
                <button @click="isOpenEditPage = false">取消 </button>

            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { sites } from '@/data/sites.ts';
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import Index from '../home/index.vue';
import type { Site } from "@/types/site";
// 定义一个响应式数据来存储网站数据
const data = ref(sites);

// 定义一个方法来生成并下载 sites.ts 文件
const downloadJs = () => {
    // 弹窗确认
    const isConfirm = window.confirm("确定要生成并下载 sites.ts 文件吗？");
    if (!isConfirm) return; // 用户取消时直接退出
    // 格式化数据为字符串
    let res = JSON.stringify(data.value, null, 2);
    // 去掉双引号
    res = res.replace(/"([^"]+)":/g, '$1:');

    const blob = new Blob([`import type { Site } from "@/types/site";
export const sites: Site[] = ${res}`], { type: 'application/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sites.ts';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// 定义一个响应式数据来存储当前编辑的网站
const siteEdited = ref<Site>({
    name: '',
    url: '',
    classOne: '常用网址',

});
// 定义一个响应式数据来控制编辑页面的显示
const isOpenEditPage = ref(false);

const openEditSitePage = (site: Site, index: number) => {
    // 将选中的网站数据赋值给 siteEdited
    siteEdited.value = { ...site };
    // 保存索引值
    siteEdited.value.index = index;
    // 打开编辑页面
    isOpenEditPage.value = true;

}


const editSite = (site: any) => {
    // 获取索引值
    let index = site.index;
    if (index === data.value.length) {
        // 如果是新增网站，则添加一个新的网站
        delete site.index;
        data.value.push({ ...site, });
        // 关闭编辑页面
        isOpenEditPage.value = false;
        // 重新生成并下载 sites.ts 文件
        downloadJs()
        return;
    } else {
        // 如果是编辑网站，则更新现有的网站
        // 删除索引值
        // 也可以保留索引，不过关于项目中TS类型的定义就需要修改 
        // 上面也不用获取索引值，直接用
        // 还有 downloadJs() 的输出语句也要修改
        delete site.index;
        // 根据索引，更新网站数据
        data.value[index] = { ...site };


        // 关闭编辑页面
        isOpenEditPage.value = false;
        // 重新生成并下载 sites.ts 文件
        downloadJs()
    }



}


const addSite = () => {
    openEditSitePage({ name: '新增网址', url: 'www', classOne: '常用网址' }, data.value.length);

}

</script>

<style lang="scss" scoped>
@use '../../styles/var.scss' as *;

.admin-all {
    width: 100%;
    height: 100vh;
    // background-color: wheat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .admin-nav {
        width: 70%;
        height: 60px;
        // background-color: #f0f0f0;
        display: flex;
        align-items: center;
        justify-content: center;
        border: #7eade0 dashed 2px;
        border-radius: 10px;




        .admin-nav-item {
            margin: 0 20px;
            padding: 10px 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 1px 1px 2px $shadow_1_1,
                -1px -1px 2px $shadow_1_2;
            cursor: pointer;
            margin: 0 15px;
            padding: 5px 10px;
            font-size: 14px;
            font-family: '优设标题黑', sans-serif;
            cursor: pointer;
            border-radius: 4px;
            box-shadow: 1px 1px 2px $shadow_1_1,
                -1px -1px 2px $shadow_1_2;
            transition: background-color 0.3s, color 0.3s;
            transition: all 0.3s ease;
            transition: background-color 0.3s, box-shadow 0.3s;

            &:hover {
                background-color: #e0e0e0;

            }
        }


    }

    .admin-main {
        margin-top: 50px;
        background-color: #ffffff;
        height: 80%;
        width: 80%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        overflow-y: scroll;
        // align-items: center;

        .admin-site {
            width: 360px;
            margin: 20px;
            background-color: black;

            .admin-site-option {
                padding: 5px;
                font-size: 12px;
                display: flex;
                align-items: center;

                &-type {
                    font-weight: bold;
                    padding-left: 5px;
                    width: 80px;
                    background-color: #f0f0f0;
                    height: 20px;
                    line-height: 20px;
                }

                &-value {
                    margin-left: 10px;
                    height: 20px;
                    line-height: 20px;
                    color: white;

                }
            }



        }

    }

    .admin-edit {
        position: fixed;
        right: auto;
        top: auto;
        width: 400px;
        background-color: #f5f5f5;
        // border: #291818 solid 1px;
        box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
        padding: 20px;
        box-sizing: border-box;
        overflow-y: auto;

        .admin-edit-site {
            display: flex;
            flex-direction: column;

            .admin-edit-site-option {
                padding: 5px;
                font-size: 12px;
                display: flex;
                align-items: center;

                &-type {
                    font-weight: bold;
                    padding-left: 5px;
                    width: 80px;
                    background-color: #f0f0f0;
                    height: 20px;
                    line-height: 20px;
                }

                &-value {
                    margin-left: 10px;
                    height: 20px;
                    line-height: 20px;
                    color: black;

                }
            }
        }
    }
}
</style>