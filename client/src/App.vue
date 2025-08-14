<script setup lang="ts">
import { ref } from 'vue';
import { sites as data } from '@/data/sites.ts'
import { nConfig } from '@/data/main.ts';
// 定义大类选项数组
const classOneArr = ref<string[]>([])
// 获取大类选项数组的数据
const getClassOneArr = () => {
  // 使用map方法提取classOne属性
  let res: string[] = data.map(item => item.classOne);
  // 使用Set去重
  res = Array.from(new Set(res));
  // 将结果赋值给classOneArr
  classOneArr.value = res;
}
getClassOneArr();
// 当前选中的大类
const nowClassOne = ref<string>('');
// 默认为第一个大类
nowClassOne.value = classOneArr.value[0] || '';
// 定义小类数组（在当前大类下的）
const classTwoArr = ref<string[]>([]);
// 当前选中的小类
const nowClassTwo = ref<string>('');
// 获取小类选项数组 
const getClassTwoArr = () => {
  // 使用filter方法筛选出当前大类对应的小类
  let res = data.filter(item => item.classOne === nowClassOne.value).map(item => item.classTwo);
  // 过滤掉 undefined
  let sres: string[] = res.filter((v): v is string => !!v);
  // 使用Set去重
  sres = Array.from(new Set(sres));
  // 将结果赋值给classTwoArr
  classTwoArr.value = sres;
  // 更新当前选中的小类为第一个小类
  nowClassTwo.value = classTwoArr.value[0] || '';
}
getClassTwoArr();



// 定义展示的网站数组
const showedSites = ref<any[]>([]);
// 获取展示的网站数组
const getShowedSites = () => {

  console.log(nowClassOne.value, nowClassTwo.value);


  let res = data.filter(item => item.classOne === nowClassOne.value);
  let ress = res.filter(item => item.classTwo === nowClassTwo.value);
  showedSites.value = ress;
  console.log(showedSites.value);

}
getShowedSites();


const getIconUrl = (icon: string) => {
  // 如果icon是一个完整的URL，则直接返回
  if (/^(http|https):\/\//.test(icon)) {
    return icon;
  }
  // 否则拼接上nConfig.iconServer
  return `${nConfig.iconServer}${icon}.png`;
}
</script>

<template>
  <div class="xSites-all">

    <div class="top">
      <!-- <div class="top-search">search</div> -->
      <!-- 大类选项 -->
      <div class="top-classOneMenu">
        <div class="top-classOneMenu-item" v-for="it in classOneArr"
          @click="nowClassOne = it; getClassTwoArr(); getShowedSites()">{{ it }}</div>
      </div>

    </div>
    <div class="main">
      <div class="classTwoMenu">
        <div class="classTwoMenu-item" v-for="it in classTwoArr" @click="nowClassTwo = it; getShowedSites()">{{ it }}
        </div>
      </div>
      <div class="content">

        <div class="siteCard" v-for="it in showedSites">

          <div class="site-info">
            <img alt="" class="site-icon" :src="getIconUrl(it.icon)" />

            <a :href="it.url" target="_blank" rel="noopener noreferrer" class="site-title"> {{
              it.name }}</a>
          </div>
          <div class="site-intro">{{ it.desc }}</div>

        </div>
      </div>
    </div>
  </div>


</template>

<style lang="scss" scoped>
@use "./styles/var.scss" as *;

.xSites-all {
  width: 100%;
  height: 100vh;
  // background-color: aliceblue;

  // background-color: #972121;

  .top {
    width: 100%;
    height: 120px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .top-classOneMenu {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 20px;
      max-width: 90%;
      height: 60px;
      background-color: #ffffff;
      // box-shadow: 2px 2px 4px $shadow_2_1,
      //   -2px -2px 4px $shadow_2_2;
      border-radius: 10px;
      margin: 0 auto;

      border: #7eade0 dashed 2px;


      .top-classOneMenu-item {
        margin: 0 15px;
        padding: 5px 10px;
        font-size: 14px;
        font-family: '优设标题黑', sans-serif;
        cursor: pointer;
        border-radius: 4px;
        box-shadow: 1px 1px 2px $shadow_1_1,
          -1px -1px 2px $shadow_1_2;

        transition: background-color 0.3s, color 0.3s;

        &:hover {
          background-color: #007bff;
          color: #ffffff;
        }
      }
    }
  }

  .main {
    width: 90%;
    // 减去顶部的高度
    height: calc(95vh - 160px);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 24px;
    color: #333333;
    // background-color: #ffffff;


    .classTwoMenu {
      width: 100%;
      height: 40px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      border-radius: 8px;

      .classTwoMenu-item {
        min-width: 60px;
        height: 80%;
        margin: 0 10px;
        padding: 0 10px;
        background-color: white;


        font-size: 13px;
        font-family: '优设标题黑', sans-serif;
        color: #3e3a3a;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-bottom: #ba6b40 solid 4px;
        // border-left: #ba6b40 solid 2px;


        // box-shadow: 1px 1px 2px $shadow_1_1,
        //   -1px -1px 2px $shadow_1_2;


        &:hover {
          // background-color: #e0e0e0;
          opacity: 0.7;
          color: #2d7ba2;
        }
      }
    }

    .content {
      width: 100%;
      // 减去上面的高度
      // height: calc(100% - 40px);
      min-height: 50%;
      margin-top: 10px;
      // background-color: #fafafa;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 20px;
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      flex-wrap: wrap;

      background-color: white;



      .siteCard {
        margin: 15px;
        width: 225px;
        height: 100px;
        border: 2px white dotted;

        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 10px 20px;

        box-shadow: 2px 2px 10px #dedede,
          -2px -2px 10px #f8f8f8;

        .site-info {
          display: flex;
          flex-direction: row;

          .site-icon {

            width: 40px;
            height: 40px;
            background-color: white;
            border-radius: 5px;
            padding: 2px;
            box-shadow: 2px 2px 3px #dedede,
              -2px -2px 3px #f7f3f3;
          }

          .site-title {
            margin-left: 20px;
            height: 40px;
            line-height: 40px;
            font-size: 15px;
            font-weight: 600;
            font-family: 'zqk英文';

          }

        }

        .site-intro {
          margin-top: 5px;
          height: 30px;
          color: rgb(148, 143, 143);
          font-size: 12px;
          line-height: 15px;
          display: flex;
          align-items: center;
        }
      }

      .siteCard:hover {

        border: 2px rgb(109, 188, 219) dotted;
        background-color: white;

        transition: all 0.6s linear;

        box-shadow: none;

        background-image: none;



        .site-info {

          transition: all 0.6s linear;

          .site-icon {
            width: 40px;
            height: 40px;
            background-color: white;
            border-radius: 5px;
            padding: 2px;
            transition: all 0.6s linear;

          }

          .site-title {
            color: rgb(136, 166, 226);

            transition: all 0.6s linear;


          }

        }

        .site-intro {
          color: rgb(86, 172, 230);

          transition: all 0.6s linear;


        }
      }
    }

  }
}
</style>
