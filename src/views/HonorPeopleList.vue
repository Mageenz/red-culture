<template>
  <div class="common-container container">
    <el-row :gutter='15' class='searchbar'>
      <el-col :span='6'><el-input placeholder='请输入活动名称'></el-input></el-col>
      <el-col :span='6'><el-button type='primary'>搜索</el-button></el-col>
    </el-row>

    <el-table :data='list'>
      <el-table-column label='用户'>
        <template slot-scope='{row}'>
          <div class="flex aic">
            <img :src="row.v0" alt="" class="userface" />
            <span>{{row.v1}}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label='地区' prop='v2'></el-table-column>
      <el-table-column label='性别' prop='v3'></el-table-column>
      <el-table-column label='达人认证'>
        <template slot-scope='{row}'>
          <img src="http://b-ssl.duitang.com/uploads/item/201805/13/20180513224039_tgfwu.png" alt="" width="100">
        </template>
      </el-table-column>
      <el-table-column label='达人认证时间' prop='v5'></el-table-column>
      <el-table-column label='操作'>
        <template>
          <!-- <el-button type='text'>编辑</el-button> -->
          <el-button type='text'>兑换徽章</el-button>
          <div>2017/12/12</div>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination background layout="prev, pager, next" :total="1000" class='pagination'></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          v0: 'http://b-ssl.duitang.com/uploads/item/201805/13/20180513224039_tgfwu.png',
          v1: '小马',
          v2: '上海',
          v3: '男',
          v4: '红色文化 学富五车',
          v5: '2019-6-12 12:12:12',
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.userface {
  width: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
