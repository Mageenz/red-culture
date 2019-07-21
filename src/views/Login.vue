<template>
  <div class="container">
    <img src="../assets/title.png" alt="" class="img-title">
    <div class="login-form">
      <img src="../assets/des.png" alt="" class="img-des">
      <div class="form">
        <div class="des">寻访活动管理后台</div>
        <input class="form-control" type="text" placeholder="请输入用户名" autocomplete="off">
        <input class="form-control" type="password" placeholder="请输入密码" autocomplete="off">
        <button class="btn-submit" @click='handleSubmit'>登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleSubmit() {
      this.$router.push({name: 'activityList'})
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  background-image: url('../assets/bg.png');
  background-size: cover;
  background-position: center;
  padding-top: 1px;
}
.img-title {
  width: 700px;
  display: block;
  margin: 100px auto;
}
.img-des {
  width: 570px;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
}
.login-form {
  width: 420px;
  margin: 0 auto;
  position: relative;
  background-color: #fff;
  text-align: center;
  padding-top: 150px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding-bottom: 60px;

  .des {
    font-size: 30px;
    margin-bottom: 40px;
  }
  .form {
    width: 240px;
    margin: 0 auto;
  }
  .form-control {
    display: block;
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px #ccc solid;
    font-size: 14px;
    height: 40px;
    background-color: transparent;
    padding-left: 15px;
  }

  .btn-submit {
    margin-top: 40px;
    display: block;
    width: 100%;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
    border: 0;
    background-color: #ea0c0c;
    color: #fff;
    border-radius: 20px;
    outline: none;
  }
}
</style>

