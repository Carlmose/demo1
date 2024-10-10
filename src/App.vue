<template>
  <section>
    <header>
      <h2>留言页面</h2>
    </header>
    <form @submit.prevent="submitComment" aria-labelledby="留言表单">

      <div v-if="!isAnonymous">
        <label for="name">姓名：</label>
        <input type="text" id="name" v-model="name" placeholder="您的姓名" aria-required="true" />

        <label for="email">邮箱：</label>
        <input type="email" id="email" v-model="email" placeholder="name@email.com" aria-required="true" />

        <label>性别：</label>
        <div>
          <label>
            <input type="radio" value="男" v-model="gender" /> 男
          </label>
          <label>
            <input type="radio" value="女" v-model="gender" /> 女
          </label>
          <label>
            <input type="radio" value="其他" v-model="gender" /> 其他
          </label>
        </div>
      </div>

      <div>
        <label>是否匿名评论：</label>
        <label>
          <input type="radio" :value="true" v-model="isAnonymous" @change="toggleAnonymous" /> 是
        </label>
        <label>
          <input type="radio" :value="false" v-model="isAnonymous" @change="toggleAnonymous" /> 否
        </label>
      </div>

      <div v-if="!isAnonymous" class="comment-info">
        <p>留言人信息：{{ name }} | {{ email }} | {{ gender }}</p>
      </div>

      <label for="comment">留言内容：</label>
      <textarea id="comment" v-model="comment" required aria-required="true"></textarea>

      <button type="submit">提交</button>
    </form>
  </section>
</template>


<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      gender: '',
      isAnonymous: false,
      comment: '',
    };
  },
  methods: {
    toggleAnonymous() {
      if (this.isAnonymous) {
        this.name = '';
        this.email = '';
        this.gender = '';
      }
    },
    submitComment() {
      const commentData = {
        name: this.isAnonymous ? '匿名' : this.name,
        email: this.isAnonymous ? '匿名' : this.email,
        gender: this.isAnonymous ? '匿名' : this.gender,
        comment: this.comment,
      };
      console.log(commentData);
      alert('留言提交成功！');
      this.resetForm();
    },
    resetForm() {
      this.name = '';
      this.email = '';
      this.gender = '';
      this.isAnonymous = false;
      this.comment = '';
    }
  }
};
</script>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
  background-color: #f2f4f8;
  /* 使用浅色背景 */
  margin: 0;
  padding: 20px;
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  /* 增加标题底部间距 */
}

form {
  display: grid;
  /* 使用网格布局 */
  grid-template-columns: 1fr;
  /* 一列布局 */
  gap: 15px;
  /* 元素之间的间距 */
  background: #fff;
  border-radius: 10px;
  /* 更加圆润的边角 */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 25px;
  /* 增加内边距 */
  max-width: 500px;
  margin: auto;
}

label {
  font-size: 16px;
  color: #555;
  /* 更柔和的文字颜色 */
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 12px;
  /* 增加内边距 */
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  transition: border-color 0.3s;
  /* 添加过渡效果 */
}

input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
  border-color: #007bff;
  /* 焦点状态下的边框颜色 */
  outline: none;
  /* 去掉默认焦点外观 */
}

input[type="radio"] {
  margin-right: 5px;
}

textarea {
  height: 120px;
  /* 增加文本区域高度 */
  resize: vertical;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 20px;
  /* 增加按钮内边距 */
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  /* 添加过渡效果 */
}

button:hover {
  background-color: #0056b3;
  /* 悬停状态下的背景颜色 */
}

.comment-info {
  margin: 10px 0;
  padding: 10px;
  background-color: #e7f1ff;
  border: 1px solid #007bff;
  border-radius: 5px;
  /* 边角圆润 */
}
</style>
