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
      <el-table-column label='最近签到地点' prop='v4'></el-table-column>
      <el-table-column label='签到时间' prop='v5'></el-table-column>
      <el-table-column label='操作'>
        <template>
          <!-- <el-button type='text'>编辑</el-button> -->
          <!-- <el-button type='text'>删除</el-button> -->
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
          v4: '三山会馆',
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
