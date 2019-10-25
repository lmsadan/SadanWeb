<template>
  <ul v-infinite-scroll="load" class="infinite-list" style="overflow:auto">
    <li :key="i" class="infinite-list-item">
      {{ i }}
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    load () {
      alert(1)
    }
  }
}
</script>
