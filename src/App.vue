<template>
  <section>
    <header>
      <h2>发布岗位</h2>
    </header>
    <form @submit.prevent="submitJobPost" aria-labelledby="发布岗位表单">
      <div v-if="!isAnonymous">
        <label for="companyName">企业名称：</label>
        <input type="text" id="companyName" v-model="companyName" placeholder="请输入企业名称" aria-required="true" />
        <span v-if="errors.companyName" class="error">{{ errors.companyName }}</span>

        <label for="email">邮箱：</label>
        <input type="email" id="email" v-model="email" placeholder="name@email.com" aria-required="true" />
        <span v-if="errors.email" class="error">{{ errors.email }}</span>

        <label>规模：</label>
        <div>
          <label>
            <input type="radio" value="上市企业" v-model="companyScale" /> 上市企业
          </label>
          <label>
            <input type="radio" value="非上市企业" v-model="companyScale" /> 非上市企业
          </label>
        </div>
        <span v-if="errors.companyScale" class="error">{{ errors.companyScale }}</span>
      </div>

      <div>
        <label>是否匿名发布：</label>
        <label>
          <input type="radio" :value="true" v-model="isAnonymous" @change="toggleAnonymous" /> 是
        </label>
        <label>
          <input type="radio" :value="false" v-model="isAnonymous" @change="toggleAnonymous" /> 否
        </label>
      </div>

      <div v-if="!isAnonymous" class="comment-info">
        <p>企业信息：{{ displayCompanyInfo }}</p>
      </div>

      <label for="jobInfo">岗位信息：</label>
      <textarea id="jobInfo" v-model="jobInfo" required aria-required="true"></textarea>
      <span v-if="errors.jobInfo" class="error">{{ errors.jobInfo }}</span>

      <button type="submit">提交</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      companyName: '',
      email: '',
      companyScale: '',
      isAnonymous: false,
      jobInfo: '',
      errors: {}
    };
  },
  computed: {
    displayCompanyInfo() {
      const info = [];
      if (this.companyName) info.push(this.companyName);
      if (this.email) info.push(this.email);
      if (this.companyScale) info.push(this.companyScale);

      return info.length > 1 ? info.join('|') : info.join('');
    }
  },
  methods: {
    validateForm() {
      this.errors = {};
      let isValid = true;

      if (!this.companyName) {
        this.errors.companyName = '企业名称不能为空';
        isValid = false;
      }
      if (!this.email) {
        this.errors.email = '邮箱不能为空';
      } else if (!/\S+@\S+\.\S+/.test(this.email)) {
        this.errors.email = '请输入有效的邮箱地址';
        isValid = false;
      }
      if (!this.companyScale) {
        this.errors.companyScale = '请选取企业规模';
        isValid = false;
      }
      if (!this.jobInfo) {
        this.errors.jobInfo = '岗位信息不能为空';
        isValid = false;
      }

      return isValid;
    },
    submitJobPost() {
      if (this.validateForm()) {
        // 提交岗位信息逻辑
        console.log("岗位信息已提交", {
          companyName: this.companyName,
          email: this.email,
          companyScale: this.companyScale,
          isAnonymous: this.isAnonymous,
          jobInfo: this.jobInfo
        });
      }
    },
    toggleAnonymous() {
      // 切换匿名发布逻辑
    }
  }
};
</script>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
  background-color: #f2f4f8;
  margin: 0;
  padding: 20px;
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

form {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 25px;
  max-width: 500px;
  margin: auto;
}

label {
  font-size: 16px;
  color: #555;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 12px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  transition: border-color 0.3s;
}

input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
  border-color: #007bff;
  outline: none;
}

input[type="radio"] {
  margin-right: 5px;
}

textarea {
  height: 120px;
  resize: vertical;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.comment-info {
  margin: 10px 0;
  padding: 10px;
  background-color: #e7f1ff;
  border: 1px solid #007bff;
  border-radius: 5px;
}

.error {
  display: block;
  color: #d9534f;
  /* 错误颜色 */
  font-size: 14px;
  margin-top: 5px;
  background-color: #f2dede;
  /* 背景颜色 */
  border: 1px solid #ebccd1;
  /* 边框颜色 */
  border-radius: 4px;
  /* 圆角 */
  padding: 10px;
  /* 内边距 */
  animation: fade-in 0.3s ease;
  /* 动画效果 */
}

/* 动画效果 */
@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

/* 添加错误提示图标 */
.error::before {
  content: "⚠️";
  /* 感叹号图标 */
  margin-right: 5px;
}
</style>
