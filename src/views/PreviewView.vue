<template>
  <div class="h-screen">
    <div class="w-full flex-1 h-full">
      <iframe class="w-full h-full" :src="url"></iframe>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PrebiewView',
  components: {
  },
  data() {
    return {
      url: ''
    }
  },
  mounted() {
    this.url = this.$route.params.url
  },
  methods: {
  }
}
</script>
<style scoped>

</style>