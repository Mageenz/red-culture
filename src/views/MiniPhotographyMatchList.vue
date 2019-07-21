<template>
  <div class="common-container container">
    <el-row :gutter='15' class='searchbar'>
      <el-col :span='6'><el-input placeholder='请输入活动名称'></el-input></el-col>
      <el-col :span='6'><el-button type='primary'>搜索</el-button></el-col>
    </el-row>

    <el-table :data='list'>
      <el-table-column label='摄影作品' min-width='200'>
        <template slot-scope='{row}'>
          <div class="flex aic">
            <img :src="row.v0" alt="" class="photo" @click='visible = true' />
            <div class="info">
              <div class="name">作品名称</div>
              <div class="des">作品信息作品信息作品信息作品信息作品信息作品信息作品信息作品信息作品信息作品信息作品信息</div>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label='上传时间' prop='v2'></el-table-column>
      <el-table-column label='用户'>
        <template slot-scope='{row}'>
          <div class="flex aic">
            <img :src="row.v0" alt="" class="userface" />
            <span>{{row.v1}}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label='姓名' prop='v1'></el-table-column>
      <el-table-column label='联系电话' prop='v3'></el-table-column>
      <el-table-column label='所属单位' prop='v4'></el-table-column>
      <el-table-column label='点赞量'>
        <template slot-scope="{row}">
          <img src="../assets/zan.png" width='15' alt="">
          <span> 123</span>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination background layout="prev, pager, next" :total="1000" class='pagination'></el-pagination>

    <el-dialog :visible.sync='visible' title='作品名称' width='30%'>
      <img src="http://b-ssl.duitang.com/uploads/item/201805/13/20180513224039_tgfwu.png" alt="" width="100%">
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      list: [
        {
          v0: 'http://b-ssl.duitang.com/uploads/item/201805/13/20180513224039_tgfwu.png',
          v1: '王大锤',
          v2: '2018/12/12',
          v3: '13522112212',
          v4: '上海市XX区XXX街道XXXX单位',
          v5: 133,
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.photo {
  width: 100px;
  margin-right: 10px
}
.info {
  .name {
    font-size: 14px;
    color: #000;
    margin-bottom: 5px;
  }
}
.userface {
  width: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
