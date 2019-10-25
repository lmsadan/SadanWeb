<template>
  <div class="wrapper activities">
    <div class="activity-card-list">
      <div class="top-title">
        <h4 class="latest">
          最新活动
        </h4>
        <div class="clearfix" />
      </div>
      <div class="activity-list">
        <ul class="activity">
          <li v-for="(item,index) in items" :key="index" class="activity-item">
            <div class="activity-inner">
              <a href="http://" />
              <div class="img">
                <a :href="'/gathering/item/'+item.id" target="_blank"><img class="sizeImg" :src="item.image" alt=""></a>
              </div>
              <div class="text">
                <p class="title">
                  {{ item.name }}
                </p>
                <div class="fl goin">
                  <p>时间：{{ item.starttime | formatDate }}</p>
                  <p>城市：{{ item.city }}</p>
                </div>
                <div class="fr btn">
                  <span class="sui-btn btn-bao">立即报名</span>
                </div>
                <div class="clearfix" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import '~/assets/css/page-sj-activity-index.css'
import gatheringApi from '@/api/gathering'
import { formatDate } from '@/utils/tools'
export default {
  filters: {
    formatDate (time) {
      const date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd hh:mm')
    }
  },
  asyncData () {
    return gatheringApi.search(1, 12, { state: '1' }).then((res) => {
      return { items: res.data.data.rows }
    }).catch((res) => {})
  },
  methods: {

  }
}
</script>

<style>
  .sizeImg{
    height: 160px;
    width: 100%;
  }
</style>
