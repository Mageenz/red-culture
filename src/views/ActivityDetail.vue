<template>
  <div class="container">
    <div class="block head flex">
      <img src="" alt="" class="face">
      <div class="flex-1">
        <div class="title">三工力量 ·工人阶级在时代发展中的巨大贡献</div>
        <div class="des">本次“红色文化寻访”线路，以三山会馆为起点，回溯上海工人阶级三次武装起义的历史；在大世界感受上海百年历史变迁与人文内涵；在外滩历史纪念馆缅怀革命先烈，献礼人民英雄纪念塔。</div>
        <div class="flex">
          <div class="flex-1">
            <div class="flex num">
              <span class="label">寻访点：</span>
              <router-link :to='{name: "visitPlaceList"}'>12</router-link>
            </div>
            <div class="flex num">
              <span class="label">问答题目：</span>
              <router-link :to='{name: "questionList"}'>12</router-link>
            </div>
            <div class="flex num">
              <span class="label">活动集锦：</span>
              <router-link :to='{name: "activityPhotoList"}'>12</router-link>
            </div>
            <div class="flex num">
              <span class="label">活动评论：</span>
              <router-link :to='{name: "activityDiscussList"}'>12</router-link>
            </div>
          </div>
          <div class="flex-1">
            <div class="flex num">
              <span class="label">打卡签到人数：</span>
              <router-link :to='{name: "checkPeopleList"}'>12</router-link>
            </div>
            <div class="flex num">
              <span class="label">智慧闯关答题人数：</span>
              <router-link :to='{name: "wisdomPeopleList"}'>12</router-link>
            </div>
            <div class="flex num">
              <span class="label">印记寻找人数：</span>
              <router-link :to='{name: "remarkPeopleList"}'>12</router-link>
            </div>
            <div class="flex num">
              <span class="label">达人认证人数：</span>
              <router-link :to='{name: "honorPeopleList"}'>12</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="block other flex">
      <div class="flex-1 flex aic">
        <img src="../assets/icon1.svg" alt="" class="icon">
        <router-link :to='{name: "visitPlaceList"}' tag='div'>
          <div class="label">寻访点</div>
          <div class="num">共计：<a>4</a> 个</div>
        </router-link>
      </div>
      <div class="flex-1 flex aic">
        <img src="../assets/icon2.png" alt="" class="icon">
        <router-link :to='{name: "visitPlaceList"}' tag='div'>
          <div class="label">问答题目</div>
          <div class="num">共计：<a>4</a> 题</div>
        </router-link>
      </div>
      <div class="flex-1 flex aic">
        <img src="../assets/icon3.png" alt="" class="icon">
        <router-link to='13' tag='div'>
          <div class="label">活动锦集</div>
          <div class="num">共计：<a>4</a> 张</div>
        </router-link>
      </div>
    </div>

    <div class="block table">
      <div class="title">活动评论(324)</div>
      <el-table :data='list'>
        <el-table-column label='线路'>
          <template slot-scope='{row}'>
            <img src="" alt="" width="60" height="60">
            <router-link :to='{name: "aaa"}'>{{row.v1}}</router-link>
          </template>
        </el-table-column>
        <el-table-column label='寻访点' prop='v2'></el-table-column>
        <el-table-column label='问答题目' prop='v3'></el-table-column>
        <el-table-column label='活动集锦' prop='v4'></el-table-column>
        <el-table-column label='活动评论' prop='v5'></el-table-column>
        <el-table-column label='打卡签到人数' prop='v6'></el-table-column>
        <el-table-column label='智慧闯关答题人数' prop='v7'></el-table-column>
        <el-table-column label='寻找印记人数' prop='v8'></el-table-column>
        <el-table-column label='获取勋章人数' prop='v9'></el-table-column>
        <el-table-column label='操作'>
          <template>
            <el-button type='text'>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="1000" class='pagination'></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          v1: '线路',
          v2: '12',
          v3: '14',
          v4: '15',
          v5: '16',
          v6: '17',
          v7: '18',
          v8: '18',
          v9: '18',
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  background-color: #f3f3f3;
}
.block {
  background-color: #fff;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 5px;
}
.head {
  .face {
    width: 300px;
    height: 300px;
    background-color: #f3f3f3;
    margin-right: 30px;
  }
  .title {
    font-size: 18px;
    color: #000;
    margin-bottom: 15px;
  }
  .des {
    border-bottom: 1px #f3f3f3 solid;
    padding-bottom: 30px;
    margin-bottom: 30px;
  }
  .label {
    width: 120px;
    text-align: left;
    margin-right: 10px;
  }
  .num {
    margin-bottom: 15px;
  }
}
.other {
  background-color: #f3f3f3;
  padding: 0;
  .aic {
    background-color: #fff;
    padding: 15px;
    margin-right: 15px;
    border-radius: 5px;
  }
  .aic:last-child {
    margin-right: 0;
  }
  .label {
    font-size: 14px;
    margin-bottom: 5px;
  }
  .icon {
    width: 60px;
    margin-right: 15px;
  }
}
.table {
  .title {
    font-size: 14px;
    margin-bottom: 15px;
  }
}
</style>


