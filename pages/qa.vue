<template>
  <div>
    <div class="tab-nav ">
      <div class="wrapper">
        <ul class="fl sui-nav nav-tabs navbar-dark">
          <nuxt-link to="/qa/label/0" tag="li" active-class="active" exact>
            <a>首页</a>
          </nuxt-link>
          <nuxt-link v-for="(item,index) in labelList" :key="index" :to="'/qa/label/'+item.id" tag="li" active-class="active">
            <a>{{ item.labelname }}</a>
          </nuxt-link>
        </ul>
        <span class="fr more"><a href="~/assets/qa-allTag.html" target="_blank">更多</a></span>
        <div class="clearfix" />
      </div>
    </div>
    <nuxt-child />
  </div>
</template>

<script>
import '~/assets/css/page-sj-qa-logined.css'
import labelApi from '@/api/label'
export default {
  asyncData () {
    return labelApi.topList().then((res) => {
      return { labelList: res.data.data }
    }).catch((res) => {
      return { labelList: '' }
    })
  }
}
</script>

<style>

</style>
