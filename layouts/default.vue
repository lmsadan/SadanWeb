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
            <div v-if="1" class="sui-nav pull-right info">
              <li><a target="_blank" class="notice" @click="noticeClick">通知</a></li>
              <li class="hover">
                <span class="fa fa-plus " />
                <ul class="hoverinfo">
                  <li><i class="fa fa-share-alt" aria-hidden="true" /> <a href="~/assetsheadline-submit.html">去分享</a></li>
                  <li><i class="fa fa-question-circle" aria-hidden="true" /> <a href="~/assetsqa-submit.html" target="_blank">提问题</a></li>
                  <li><i class="fa fa-comments" aria-hidden="true" /><a href="~/assetsspit-submit.html" target="_blank">去吐槽</a></li>
                  <li><i class="fa fa-heartbeat" aria-hidden="true" /> <a href="~/assetsmakeFriends-submit.html" target="_blank">发约会</a></li>
                </ul>
              </li>
              <li><a href="~/assetsperson-homepage.html" target="_blank" class="homego"><img width="18%" src="https://img03.sogoucdn.com/app/a/100520093/dbc006c92ca7e754-8079a6fac653bad5-1f51ab8e53b21b7911e9aeca0d6505cb.jpg" alt="用户头像"></a></li>
            </div>
            <div v-else class="sui-nav pull-right info">
              <li><a href="~/assetsperson-loginsign.html" target="_blank">注册</a></li>
              <li><a href="~/assetsperson-loginsign.html" target="_blank" class="sui-btn btn-login">登录</a></li>
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
                <dd>关于我们</dd>
                <dd>服务条款</dd>
                <dd>帮助中心</dd>
              </dl>
              <dl>
                <dt>常用链接</dt>
              </dl>
              <dl>
                <dt>联系我们</dt>
                <dd>联系我们</dd>
                <dd>加入我们</dd>
                <dd>建议反馈</dd>
              </dl>
              <dl>
                <dt>关注我们</dt>
                <dd>微博</dd>
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
export default {

}
</script>
<style>
</style>
