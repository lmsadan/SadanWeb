<template>
  <div class="wrapper loginsign">
    <div class="item signup">
      <div class="form">
        <h3 class="loginsign-title">
          注册新账号
        </h3>
        <el-form ref="regForm" :model="regForm" status-icon :rules="rules" label-width="100px">
          <el-form-item label="用户名" prop="nickname">
            <el-input v-model="regForm.nickname" type="text" placeholder="真实姓名或常用昵称" />
          </el-form-item>
          <el-form-item label="手机号码" prop="mobile">
            <el-input v-model="regForm.mobile" type="text" placeholder="请输入手机号码" />
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <el-input v-model="regForm.code" class="codeInput" type="text" placeholder="请输入验证码" />
            <el-button v-if="show" type="primary" @click="sendsms()">
              获取验证码
            </el-button>
            <el-button v-if="!show" disabled type="primary">
              {{ count }} s
            </el-button>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="regForm.password" type="password" show-password autocomplete="off" />
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input v-model="regForm.checkPass" type="password" show-password autocomplete="off" />
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="isAgrss" label="同意协议并接受《服务条款》" name="type" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitRegForm('regForm')">
              注册
            </el-button>
            <el-button @click="resetRegForm('regForm')">
              重置
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="item">
      <div class="form">
        <h3 class="loginsign-title">
          用户登录
        </h3>
        <el-form :model="logForm" status-icon label-position="left" label-width="100px">
          <el-form-item label="手机号码" prop="mobile">
            <el-input key="mobile" v-model="logForm.mobile" type="text" placeholder="请输入手机号码" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input key="password" v-model="logForm.password" placeholder="请输入密码" type="password" show-password />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login()">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import '~/assets/css/page-sj-person-loginsign.css'
import userApi from '@/api/user'
import { setUser } from '@/utils/auth'

const TIME_COUNT = 60
export default {

  data () {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码长度最少6位'))
      } else {
        if (this.regForm.checkPass !== '') {
          this.$refs.regForm.validateField('checkPass')
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码长度最少6位'))
      } else if (value !== this.regForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    const validatePhone = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入联系方式'))
      } else {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
        if (reg.test(value)) {
          this.mobileStatus = true
          callback()
        } else {
          this.mobileStatus = false
          return callback(new Error('请输入正确的电话'))
        }
      }
    }
    const validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('长度最少2位'))
      } else {
        callback()
      }
    }
    const validateCode = (rule, value, callback) => {
      if (value.length !== 6) {
        callback(new Error('长度错误'))
      } else {
        callback()
      }
    }
    return {
      mobileStatus: false,
      show: true, // 初始启用按钮
      count: '', // 初始化次数
      timer: null,
      isAgrss: false,
      regForm: {
        password: '',
        checkPass: '',
        nickname: '',
        code: '',
        mobile: ''
      },
      logForm: {
        mobile: '',
        password: ''
      },
      rules: {
        password: [
          { validator: validatePass, trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        nickname: [
          { validator: validateName, trigger: 'blur' },
          { min: 2, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ],
        mobile: [
          { validator: validatePhone, trigger: 'blur' }
        ],
        code: [
          { validator: validateCode, trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    sendsms () {
      if (this.mobileStatus) {
        userApi.sendsms(this.regForm.mobile).then((res) => {
          this.$message({
            message: res.data.message,
            type: (res.data.flag ? 'success' : 'error')
          })
        })
      } else {
        this.$message({
          message: '手机号码不正确',
          type: ('error')
        })
      }
      if (!this.timer && this.mobileStatus) {
        this.count = TIME_COUNT
        this.show = false
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--
          } else {
            this.show = true
            clearInterval(this.timer) // 清除定时器
            this.timer = null
          }
        }, 1000)
      }
    },
    register () {
      if (this.isAgrss) {
        userApi.register(this.regForm, this.regForm.code).then((res) => {
          this.$message({
            message: res.data.message,
            type: (res.data.flag ? 'success' : 'error')
          })
        })
      } else {
        this.$message({
          message: '请同意并接受《服务条款》',
          type: 'error'
        })
      }
    },
    login () {
      userApi.login(this.logForm.mobile, this.logForm.password).then((res) => {
        if (res.data.flag) {
          setUser(res.data.data)
          location.href = '/'
        } else {
          this.$message({
            message: res.data.message,
            type: 'error'
          })
          this.mobile = ''
          this.password = ''
        }
      })
    },
    submitRegForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.register()
        } else {
          return false
        }
      })
    },
    resetRegForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style>
  .codeInput{
    width: 210px;
  }
</style>
