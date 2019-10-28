<template>
  <div class="wrapper tag-item">
    <div class="fl left-list">
      <div class="tc-data-list">
        <div class="tc-list">
          <ul class="detail-list">
            <li v-for="(item,index) in items" :key="index" class="qa-item">
              <div class="fl record">
                <div class="number">
                  <div class="border useful">
                    <p class="usenum">
                      <a class="zan" @click="thumbup(index)"><i :class="'fa fa-thumbs-up '+item.zan" aria-hidden="true" /></a>
                    </p>
                    <p class="zannum">
                      {{ item.thumbup }}
                    </p>
                  </div>
                  <div class="border answer">
                    <a href="#" class="star"><i class="fa fa-star-o" aria-hidden="true" /></a>
                  </div>
                </div>
              </div>
              <div class="info">
                <h4>{{ item.nickname }}</h4>
                <br>
                <p class="text">
                  <nuxt-link :to="'/spit/'+item._id" tag="a" v-html="item.content">
                    {{ item.content }}
                  </nuxt-link>
                </p>
                <div class="other">
                  <div class="fl date">
                    <span>{{ item.publishtime | formatDate }}</span>
                  </div>
                  <div class="fr remark">
                    <a href="#" data-toggle="modal" data-target="#shareModal" class="share"><i class="fa fa-share-alt" aria-hidden="true" /> 分享{{ item.share }}</a>
                    <nuxt-link :to="'/spit/'+item._id" tag="a" data-toggle="modal" data-target="#remarkModal" class="comment">
                      <i class="fa fa-commenting" aria-hidden="true" /> 回复{{ item.comment }}
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <div class="clearfix" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="fl right-tag">
      <div class="block-btn">
        <p>来个匿名吐槽，发泄一下你心中的怒火吧！</p>
        <a class="sui-btn btn-block btn-share" href="/spit/submit">发吐槽</a>
      </div>
    </div>
    <div class="clearfix" />
  </div>
</template>

<script>
import '~/assets/css/page-sj-spit-index.css'
import spitApi from '@/api/spit'
import { formatDate } from '@/utils/tools'
import { getUser } from '@/utils/auth'
export default {
  filters: {
    formatDate (time) {
      const date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd hh:mm')
    }
  },
  data () {
    return {
      flag: false
    }
  },
  asyncData () {
    return spitApi.search(1, 10, { state: '1' }).then((res) => {
      const tmp = res.data.data.rows.map((item) => {
        return { ...item, zan: '' }
      })
      return { items: tmp }
    }).catch((res) => {
      return { items: '' }
    })
  },
  mounted () {
    this.flag = getUser.token !== undefined
  },
  methods: {
    thumbup (index) {
      if (this.flag) {
        this.$message({
          message: '请先登录!',
          type: 'warning'
        })
        return
      }
      spitApi.thumbup(this.items[index]._id, getUser.id).then((res) => {
        if (!res.data.flag) {
          this.items[index].zan = ''
          this.items[index].thumbup--
        } else {
          this.items[index].zan = 'color'
          this.items[index].thumbup++
        }
      }).catch((res) => {})
    }
  }
}
</script>

<style>

</style>
