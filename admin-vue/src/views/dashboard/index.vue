<template>
  <div class="dashboard-container">
    <div class="dashboard-text">欢迎登录-湖北工业大学工程技术学院-校园博客管理系统</div>
    <div class="content"></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 20px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
    text-align: center;
    font-family:'楷体';
    color: darkcyan;
  }
}

.content {
  margin-top: 50px;
  margin-left: 150px;
  // background-color: #c23e3e; /* 设置背景颜色为浅灰色 */  
  background-image: url("../../../img/school_log.png");
  // url("http://storage.rwchen.top/school_log.png");
  background-size: cover; /* 覆盖整个容器 */  
  background-position: center; /* 图片居中显示 */  
  width: 1500px;  
  height: 640px;
}
</style>
