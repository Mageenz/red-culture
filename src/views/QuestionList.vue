<template>
  <div class="common-container container">
    <el-row :gutter='15' class='searchbar'>
      <el-col :span='6'><el-input placeholder='请输入活动名称'></el-input></el-col>
      <el-col :span='6'><el-button type='primary'>搜索</el-button></el-col>
    </el-row>

    <el-table :data='list'>
      <el-table-column type='index'></el-table-column>
      <el-table-column label='题目' min-width='150'>
        <template slot-scope='{row}'>
          <span>{{row.v1}}</span>
        </template>
      </el-table-column>
      <el-table-column label='正确答案' prop='v2' width='100'></el-table-column>
      <el-table-column label='选择项' prop='v3'></el-table-column>
      <el-table-column label='操作' width='120'>
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
          v1: '上海是中国工人阶级的摇篮，也是中国工人运动的发祥地，在_____运动的高潮中，上海总工会宣告成立。',
          v2: 'A',
          v3: 'A.“五卅”反帝爱国运动 B. 五四运动 C. 护国运动',
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
