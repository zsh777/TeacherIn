<template>
  <div class="flex flex-col min-h-screen w-full relative">
    <Nav></Nav>
    <div id="scrollWrapperContainer" class="ti-con pt-[72px] w-full box-border flex-1 overflow-auto dark:bg-black-000 relative">
      <div class="min-h-[calc(100vh - 669px)]">
        <div class="ti-con">
          <div class="header-box">
            <HeaderBox></HeaderBox>
          </div>
          <div class="mx-auto my-0 w-full px-16 box-border bg-white dark:bg-black-000">
            <div class="wrapper mx-auto my-0 md:grid md:grid-cols-[19fr_9fr] lg:gap-14 md:gap-8 pt-3">
              <div class="relative md:mr-0 w-full overflow-hidden whitespace-pre-wrap">
                <div class="w-full">
                  <div class="round">
                    <router-view></router-view>
                  </div>
                  <div class="pb-[100px] mt-[42px]">
                    <Collapse :item="item" @resSearch="res">
                    </Collapse>
                  </div>
                </div>
              </div>
              <div>
                <CourseInfo :item="item2"></CourseInfo>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { get1655, getContents123 } from '../api/api'
import Nav from '../components/NavComponent.vue'
import HeaderBox from '../components/HeaderBoxComponent.vue'
import CourseInfo from '../components/CourseInfoComponent.vue'
import Collapse from '../components/CollapseComponent.vue'
export default {
  name: 'HomeView',
  components: {
    Nav,
    HeaderBox,
    CourseInfo,
    Collapse,
  },
  data() {
    return {
      myId: "1655",
      item: [],
      item2: {},
    }
  },
  mounted() {
    get1655(null).then((res) => {
      this.item2 = res.data.data
    })
    getContents123(null).then((res) => {
      this.item = res.data.units
    })
  },
  methods: {
    res(data, data1) {
      if (data1 !== '') {
        this.item = data
      } else if (data1 === '') {
        getContents123(null).then((res) => {
          this.item = res.data.units
        })
      }
      // this.item = res
    }
  }
}
</script>
<style scoped>
</style>
