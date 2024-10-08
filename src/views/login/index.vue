<template>
    <div class="login-content">
        <div class="content">
            <div class="form sign-in">
                <h2>Login</h2>
                <label>
                    <span>Username</span>
                    <input type="text" @keyup.enter="doLogin" v-model="loginForm.username" ref="usernameEl"/>
                </label>
                <label>
                    <span>Password</span>
                    <input type="password" @keyup.enter="doLogin" v-model="loginForm.password"/>
                </label>
                <p class="forgot-pass">
                    <a href="javascript:" @click="goForget">
                      Forgot your password?
                    </a>
                </p>
                <el-button type="warning" class="submit" :loading="loading" @click="doLogin" round>Log in</el-button>
            </div>
            <div class="sub-cont">
                <div class="img">
                    <div class="img__text m--up">
                        <h2>Not registered yet?</h2>
                        <p>Sign up now</p>
                    </div>
                    <div class="img__btn" @click="goRegister">
                        <span class="m--up">Register</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {onMounted, reactive, ref} from 'vue'
import {useRouter} from 'vue-router'
import panUtil from '@/utils/common'
import {ElMessage} from 'element-plus'
import userService from '@/api/user'
import {setToken} from '@/utils/cookie'
import {useFileStore} from '@/stores/file'
import {useUserStore} from '@/stores/user'

const router = useRouter()

const loading = ref(false)

const loginForm = reactive({
    username: '',
    password: ''
})

const fileStore = useFileStore()
const userStore = useUserStore()

const {setParentId, setDefaultParentId, setDefaultParentFilename} = fileStore
const {setUsername} = userStore

const usernameEl = ref(null)
onMounted(() => {
    usernameEl.value.focus()
})

const doLogin = () => {
    if (checkLoginForm()) {
        loading.value = true
        userService.login(loginForm, res => {
            setToken(res.data)
            userService.info(res => {
                setParentId(res.data.rootFileId)
                setDefaultParentId(res.data.rootFileId)
                setDefaultParentFilename(res.data.rootFilename)
                setUsername(res.data.username)
                router.push({name: 'Index'})
            }, res => {
                ElMessage.error(res.message)
            })
        }, res => {
            ElMessage.error(res.message)
            loading.value = false
        })
    }
}

const goForget = () => {
    router.push({name: 'Forget'})
}

const checkLoginForm = () => {
    if (!panUtil.checkUsername(loginForm.username)) {
        ElMessage.error('Please enter a 6-16 digit username containing only numbers and letters')
        return false
    }
    if (!panUtil.checkPassword(loginForm.password)) {
        ElMessage.error('Please enter a password of 8-16 digits')
        return false
    }
    return true
}

const goRegister = () => {
    router.push({name: 'Register'})
}
</script>

<style scoped>

*, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

input {
    border: none;
    outline: none;
    background: none;
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
}

.content {
    overflow: hidden;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 900px;
    height: 550px;
    margin: -300px 0 0 -450px;
    background: #fff;
}

.form {
    position: relative;
    width: 640px;
    height: 100%;
    padding: 50px 30px 0;
}

.sub-cont {
    overflow: hidden;
    position: absolute;
    left: 640px;
    top: 0;
    width: 900px;
    height: 100%;
    padding-left: 260px;
    background: #fff;
}

button {
    display: block;
    margin: 0 auto;
    width: 260px;
    height: 36px;
    border-radius: 30px;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
}

.img {
    overflow: hidden;
    z-index: 2;
    position: absolute;
    left: 0;
    top: 0;
    width: 260px;
    height: 100%;
    padding-top: 360px;
}

.img:before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 900px;
    height: 100%;
    background-image: url(@/assets/imgs/bg.jpg);
    background-size: cover;
}

.img:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
}

.img__text {
    z-index: 2;
    position: absolute;
    left: 0;
    top: 50px;
    width: 100%;
    padding: 0 20px;
    text-align: center;
    color: #fff;
}

.img__text h2 {
    margin-bottom: 10px;
    font-weight: normal;
}

.img__text p {
    font-size: 14px;
    line-height: 1.5;
}

.img__btn {
    overflow: hidden;
    z-index: 2;
    position: relative;
    width: 100px;
    height: 36px;
    margin: 0 auto;
    background: transparent;
    color: #fff;
    text-transform: uppercase;
    font-size: 15px;
    cursor: pointer;
}

.img__btn:after {
    content: '';
    z-index: 2;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #fff;
    border-radius: 30px;
}

.img__btn span {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

h2 {
    width: 100%;
    font-size: 26px;
    text-align: center;
    font-weight: normal;
}

label {
    display: block;
    width: 260px;
    margin: 25px auto 0;
    text-align: center;
}

label span {
    font-size: 12px;
    color: #909399;
    text-transform: uppercase;
}

input {
    display: block;
    width: 100%;
    margin-top: 5px;
    padding-bottom: 5px;
    font-size: 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    text-align: center;
}

.submit {
    margin-top: 40px !important;
}

.forgot-pass {
    margin-top: 15px;
    text-align: center;
    font-size: 12px;
    color: #cfcfcf;
}

.forgot-pass a {
    color: #cfcfcf;
}
</style>