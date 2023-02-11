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
                    <div class="flex justify-between items-center pt-3 pb-[18px] pr-4 dark:bg-black-000">
                      <div class="font-medium text-xl dark:text-gray-25">课程文件</div>
                    </div>
                    <div class="border-[#E3E4E5] border rounded-b border-t-transparent">
                      <router-view></router-view>
                      <!-- <Table :tableData="tableData" :tableLabel="tableLabel"></Table> -->
                    </div>
                  </div>
                  <div class="pb-[100px] mt-[42px]">
                    <Collapse :item="item">
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
  }
}
</script>
<style scoped>
</style>
