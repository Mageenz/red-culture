<template>
  <div class="common-container container">
    <el-row :gutter='15' class='searchbar'>
      <el-col :span='6'><el-input placeholder='请输入活动名称'></el-input></el-col>
      <el-col :span='6'><el-button type='primary'>搜索</el-button></el-col>
    </el-row>

    <el-table :data='list'>
      <el-table-column label='线路'>
        <template slot-scope='{row}'>
          <img src="" alt="" width="60" height="60">
          <router-link :to='{name: "activityDetail"}'>{{row.v1}}</router-link>
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
          <el-button type='text'>编辑</el-button>
          <el-button type='text'>删除</el-button>
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

