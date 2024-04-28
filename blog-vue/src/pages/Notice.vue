<template>
<div>
	<sg-nav></sg-nav>
	<div class="container">
		<el-row :gutter="30">
			<el-col :sm="24" :md="16" style="transition:all .5s ease-out;margin-bottom:30px;">
			
				 <!-- 通告栏 -->  
				 <div class="notification-bar">  
					<div>联系作者：qq1835988220</div>
				</div> 

			</el-col>
			<el-col :sm="24" :md="8">
				<sg-rightlist></sg-rightlist>
			</el-col>
		</el-row>
	</div>
</div>
</template>

<script>
import header from '../components/header.vue'
import rightlist from '../components/rightlist.vue'
import reward from '../components/reward.vue'
export default {
	name: 'Reward',
	data() { //选项 / 数据
		return {
		}
	},
	methods: { //事件处理器
  
	},

	components: { //定义组件
		'sg-nav': header,
		'sg-reward': reward,
		'sg-rightlist': rightlist,
	},

	created() { //生命周期函数

	}
}
</script>

<style>
.notification-bar {  
  margin-top: 20px;
  padding: 10px;  
  background-color: #f0f0f0;  
  margin-bottom: 10px; /* 根据需要调整 */  
  display: flex;  
  justify-content: space-between;  
  align-items: center;  

  /* 添加边框样式 */  
  border: 1px solid #ccc; /* 1像素宽，实线，灰色 */  
  border-radius: 4px; /* 可以添加圆角，根据需要调整 */  
}  
   
</style>
