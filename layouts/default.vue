<template>
  <div>
    <header>
      <div class="wrapper">
        <div class="sui-navbar">
          <div class="navbar-inner">
            <ul class="sui-nav">
              <router-link tag="li" to="/">
                <a class="sui-brand">撒旦社区</a>
              </router-link>
              <router-link tag="li" to="/" active-class="active" exact>
                <a>头条</a>
              </router-link>
              <router-link tag="li" to="/qa" active-class="active">
                <a>问答</a>
              </router-link>
              <router-link tag="li" to="/gathering" active-class="active">
                <a>活动</a>
              </router-link>
              <router-link tag="li" to="/friends" active-class="active">
                <a>交友</a>
              </router-link>
              <router-link tag="li" to="/spit" active-class="active">
                <a>吐槽</a>
              </router-link>
              <router-link tag="li" to="/recruit" active-class="active">
                <a>招聘</a>
              </router-link>
            </ul>
            <form class="sui-form sui-form pull-left">
              <input type="text" placeholder="输入关键词...">
            </form>
            <div v-if="user.token !== undefined" class="sui-nav pull-right info">
              <li><a class="notice">{{ user.nickname }}</a></li>
              <li><a class="notice" @click="logout()">退出登录</a></li>
              <li><a target="_blank" class="notice">通知</a></li>
              <li class="hover">
                <span class="fa fa-plus " />
                <ul class="hoverinfo">
                  <li><i class="fa fa-share-alt" aria-hidden="true" /> <a href="~/assetsheadline-submit.html">去分享</a></li>
                  <li><i class="fa fa-question-circle" aria-hidden="true" /> <a href="~/assetsqa-submit.html" target="_blank">提问题</a></li>
                  <li><i class="fa fa-comments" aria-hidden="true" /><a href="~/assetsspit-submit.html" target="_blank">去吐槽</a></li>
                  <li><i class="fa fa-heartbeat" aria-hidden="true" /> <a href="~/assetsmakeFriends-submit.html" target="_blank">发约会</a></li>
                </ul>
              </li>
              <li><a href="/home"><img class="indexImg" :src="user.image" :alt="user.nickname"></a></li>
            </div>
            <div v-else class="sui-nav pull-right info">
              <nuxt-link tag="li" to="login">
                <a>注册</a>
              </nuxt-link>
              <nuxt-link tag="li" to="login">
                <a class="sui-btn btn-login">登录</a>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </header>
    <nuxt />
    <footer>
      <div class="footer">
        <div class="wrapper">
          <div class="footer-bottom">
            <div class="link">
              <dl>
                <dt>网站相关</dt>
                <dd><a>关于我们</a></dd>
                <dd><a>服务条款</a></dd>
                <dd><a>帮助中心</a></dd>
              </dl>
              <dl>
                <dt>常用链接</dt>
              </dl>
              <dl>
                <dt>联系我们</dt>
                <dd><a>联系我们</a></dd>
                <dd><a>加入我们</a></dd>
                <dd><a>建议反馈</a></dd>
              </dl>
              <dl>
                <dt>关注我们</dt>
                <dd><a>微博</a></dd>
              </dl>

              <div class="xuke">
                <h3>学习交流</h3>
              </div>
            </div>

            <p class="Copyright">
              Copyright © 2019 撒旦社区 当前版本 1.0.0
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import '~/assets/plugins/normalize-css/normalize.css'
import '~/assets/plugins/yui/cssgrids-min.css'
import '~/assets/plugins/sui/sui.min.css'
import '~/assets/plugins/sui/sui-append.min.css'
import '~/assets/plugins/font-awesome/css/font-awesome.min.css'
import '~/assets/css/widget-base.css'
import '~/assets/css/widget-head-foot.css'
import { getUser, removeUser } from '@/utils/auth'
export default {
  data () {
    return {
      user: {}
    }
  },
  mounted () {
    this.user = getUser()
  },
  methods: {
    logout () {
      removeUser()
      location.href = '/'
    }
  }
}
</script>
<style>
  .indexImg{
    height: 45px;
    width: 45px;
  }
</style>
