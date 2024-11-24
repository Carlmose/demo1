<template>

    <div class="form-container">
        <el-form :model="form" :rules="rules" ref="formRef">
            <!-- 用户名输入框 -->
            <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
            </el-form-item>

            <!-- 提交按钮 -->
            <el-form-item>
                <el-button type="primary" @click="submitForm">提交</el-button>
            </el-form-item>
        </el-form>

        <!-- 显示动态问候语 -->
        <h1>Hello, {{ form.username }}!</h1>
    </div>
</template>

<script>
// 引入 Element UI 组件
import { Form, FormItem, Input, Button } from 'element-ui';

export default {
    name: 'FormExample',
    components: {
        'el-form': Form,
        'el-form-item': FormItem,
        'el-input': Input,
        'el-button': Button
    },
    data() {
        return {
            // 存储表单数据
            form: {
                username: ''  // 用户名字段
            },
            // 表单验证规则
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        // 提交表单
        submitForm() {
            this.$refs.formRef.validate(valid => {
                if (valid) {
                    alert('提交成功!');
                } else {
                    console.log('表单验证失败');
                    return false;
                }
            });
        }
    }
};
</script>

<style scoped>
/* 表单样式 */
.form-container {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
}
</style>