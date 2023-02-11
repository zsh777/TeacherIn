<template>
  <div class="h-screen">
    <div class="w-full flex-1 h-full">
      <iframe class="w-full h-full" v-for="index in urls" :key="index.url" :src="index.url"></iframe>
    </div>
  </div>
</template>
<script>
// import { getContents } from '../api/api'
export default {
  name: 'PrebiewView',
  components: {
  },
  data() {
    return {
      urls: [
        // { url: 'https://static.eeo.cn/upload/trans/xls01/52/1d/1235914576/html5/index.html' },
        { url: 'https://static.eeo.cn/upload/trans/doc01/2b/37/1235849749/pdf/2F_a98a13c5-5aa3-4f93-81ca-418312c3ac56.docx.pdf' }
      ]
    }
  },
  mounted() {
    // getContents(null).then((res) => {
    //   console.log("res.data.data[0].url", res.data.data)
    //   const item = res.data.data
    //   const item1 = item.map((i) => {
    //     console.log(i.url)
    //     return i.url
    //   })
    //   this.urls = item1
    // })
  },
  methods: {

  }
}
</script>
<style scoped>

</style>