<template>
  <div class="common-container">
    <div class="container flex">
      <!-- 日期相册 -->
      <div class="albums">
        <div class="title flex aic">
          <span class="flex-1">日期</span>
          <el-button type='text' @click='visible = true'>添加日期相册</el-button>
        </div>
        <div class="album-list">
          <template v-for='(item, index) in albums'>
            <div class="album flex aic" @click="handleChooseAlbum(item, index)" :key='index' :class='{"active": currentAlbum === index}'>
              <span>{{item.date}}</span>
              <span>({{item.count}}张)</span>
            </div>
          </template>
        </div>
      </div>

      <!-- 图片列表 -->
      <div class="flex-1 photos">
        <div class="title flex aic">
          <span class="flex-1">{{albums[currentAlbum].date}} ({{albums[currentAlbum].count}}张)</span>
          <el-upload action='/xxx/xxx'>
            <el-button type='danger' plain round>上传图片</el-button>
          </el-upload>
        </div>
        <div class="photo-list">
          <div class="photo" v-for='item in 10'>
            <div class="content">
              <img src="http://b-ssl.duitang.com/uploads/item/201805/13/20180513224039_tgfwu.png" alt="">
              <div class="info">
                <div class="flex aic">
                  <span class="flex-1">微信昵称</span>
                  <el-button type='text'>删除</el-button>
                </div>
                <div class="date">2012/12/12</div>
              </div>
            </div>
          </div>
        </div>
        <el-pagination background layout="prev, pager, next" :total="1000" class='pagination'></el-pagination>
      </div>
    </div>

    <el-dialog :visible.sync='visible' title='添加相册' width='30%'>
      <el-form>
        <el-form-item label='相册名称：'>
          <el-input placeholder='请输入相册名称' style='width: 300px'></el-input>
        </el-form-item>
      </el-form>
      <div slot='footer'>
        <el-button type='danger' round>创建</el-button>
        <el-button @click="visible = false" round>取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      albums: [
        {date: '2017/12/12', count: 122},
        {date: '2017/12/13', count: 123},
        {date: '2017/12/14', count: 124},
      ],
      list: [
        {
          v1: '上海是中国工人阶级的摇篮，也是中国工人运动的发祥地，在_____运动的高潮中，上海总工会宣告成立。',
          v2: 'A',
          v3: 'A.“五卅”反帝爱国运动 B. 五四运动 C. 护国运动',
        }
      ],
      currentAlbum: 0
    }
  },
  methods: {
    handleChooseAlbum(item, index) {
      this.currentAlbum = index
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  border: 1px #f3f3f3 solid;
  background-color: #fff;
  border-radius: 5px;
}
.albums {
  width: 200px;
  border-right: 1px #f3f3f3 solid;
  .title {
    height: 50px;
    padding: 0 15px;
    border-bottom: 1px #f3f3f3 solid;
    margin-bottom: 15px;
    span {
      font-size: 14px;
    }
  }
  .album {
    height: 45px;
    cursor: pointer;
    font-size: 14px;
    padding: 0 15px;
    span:first-child {
      margin-right: 5px;
    }
    span:nth-child(2) {
      color: #ccc;
    }
  }
  .album.active {
    background-color: #f3f3f3;
  }
  .album:hover {
    background-color: #f3f3f3;
  }
}
.photos {
  padding-bottom: 15px;
  .title {
    line-height: 50px;
    padding: 0 15px;
    border-bottom: 1px #f3f3f3 solid;
    margin-bottom: 15px;
    font-size: 14px;
  }
  .photo-list {
    overflow: hidden;
    padding: 0 7.5px;
  }
  .photo {
    float: left;
    width: 20%;
    padding: 0 7.5px;
    margin-bottom: 15px;
  }
  .content {
    border: 1px #f3f3f3 solid;
    border-radius: 5px;

    img {
      display: block;
      width: 100%;
      border-bottom: 1px #f3f3f3 solid;
    }

    .info {
      padding: 0 10px 10px 10px;
    }
    .date {
      color: #ccc;
    }
  }
}
</style>
