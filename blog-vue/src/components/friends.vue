<!-- 友情链接模块 -->
<template>
<div class="tFriendsBox">
    <h1>
        <div>友链申请格式</div>
        <h3>网站名称: 校园博客</h3>
        <h3>网站链接: http://example.com </h3>
        <h3>网站描述: 校园博客网站</h3>
        <h3>网站logo: http://example.img</h3>
    </h1>


    <div style="margin-top: 20px; margin-bottom: 25px;">  
        <el-button type="primary" @click="dialogVisible = true" style="width: 970px;">添加友链</el-button>  
            <el-dialog title="添加友链" :visible.sync="dialogVisible" :before-close="handleClose" width="50%">  
                <el-form :model="form" ref="form" label-width="120px">  
                    <el-form-item label="网站名称" >  
                    <el-input v-model="form.name"></el-input>  
                    </el-form-item>  
                    <el-form-item label="网站链接" >
                    <el-input v-model="form.address" type="url"></el-input>  
                    </el-form-item> 
                    <el-form-item label="网站描述" >  
                    <el-input v-model="form.description"></el-input>  
                    </el-form-item>  
                    <el-form-item label="网站logo" >  
                    <el-input v-model="form.logo" type="url"></el-input>  
                    </el-form-item> 
                </el-form>  
                <span slot="footer" class="dialog-footer">  
                    <el-button @click="dialogVisible = false">取 消</el-button>  
                    <el-button type="primary" @click="submitForm()">确 定</el-button>  
                </span>  
            </el-dialog>
    </div>

    <el-row>
        <el-col :span="12" class="tf-item" v-for="(item,index) in friendslink" :key="'f'+index">
            <a :href="item.address" target="_blank">
                <img :src="item.logo?item.logo:'static/img/default.jpg'"  :onerror="$store.state.errorImg">
                <h4>{{item.name}}</h4>
                <p>{{item.description}}</p>
            </a>
        </el-col>
    </el-row>

</div>
</template>

<script>
import {getAllLink, addLink } from '../api/link.js'
export default {
    data() { //选项 / 数据

        return {
            dialogVisible: false,  
            form: {  
                name: '',  
                address: '',
                description: '',
                logo: ''
            },
            friendslink:[]//友情链接
        }
    },
    methods: { //事件处理器
        getList(){
            getAllLink().then((response)=>{
                this.friendslink = response
            })
        },
        handleClose(done) {  
            this.$confirm('确认关闭?').then(_ => { 
                done();  
            }).catch(_ => {});  
        },  
        submitForm() {
            var valid = this.form.name !== '' &&  this.form.address !== '' && this.form.description !== '' && this.form.logo !== '';

            if (!valid) {
                this.$message.error('提交失败, 存在内容为空!');  
                return false
            }

            addLink(this.form).then(response => {  
                this.$message.success('友链已申请，等待管理员审核!');
                this.dialogVisible = false;  
            }).catch(error => {  
                this.$message.error('提交失败!');  
            });
        },
    },
    components: { //定义组件

    },
    created() { //生命周期函数
        this.getList()
    }
}
</script>

<style>

/* .el-input__inner {  
  width: 300px;  
}  */

.tFriendsBox{
    background: #fff;
    padding:15px;
    border-radius: 5px;
    margin-bottom: 40px;
}
.tFriendsBox h1{
    padding:15px 0;
    font-size: 25px;
    font-weight: bold;
}
.tFriendsBox .tf-item{
    transition: all 0.3s ease-out;
    border-radius: 5px;
    position: relative;
}
.tFriendsBox .tf-item:hover{
    background: rgba(230,244,250,.5);
}
.tFriendsBox .tf-item a{
    display: block;
    padding:0 10px 0 90px;
    height:90px;
}
.tFriendsBox .tf-item a img{
    width:60px;
    height:60px;
    border-radius: 50%;
    position: absolute;
    top:15px;
    left:15px;
    cursor: pointer;
    object-fit: cover;
}
.tFriendsBox .tf-item a h4{
    cursor: pointer;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 20px;
    padding-top:15px;
    font-weight: bold;
}
.tFriendsBox .tf-item a p{
    margin:10px 0;
    font-size: 12px;
    line-height: 24px;
    color:#999;
    cursor: pointer;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
