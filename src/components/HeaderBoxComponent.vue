<template>
  <div class="lg:pl-[16px]" style="background: linear-gradient(90deg, rgb(9, 38, 72) 0%, rgb(92, 116, 152) 100%);">
    <div class="h-16 box-border flex items-center text-white/60 pt-[6px] text-xs justify-center">
    </div>
    <div class="header-con lg:max-w-screen-xl lg:my-0 lg:mx-auto  md:grid block relative lg:pl-0 md:pl-[32px] lg:pr-[41px] md:pr-[41px] px-[32px] md:grid-cols-[1fr_490px] md:h-[222px] h-[282px] text-white">
      <div class="header-left lg:gap-14">
        <div class="flex-center mb-[11px]">
          <div class="flex items-end flex-1">
            <div class="font-medium text-3xl leading-3xl truncate custom-tooltip-58">{{name}}</div>
            <div class="flex flex-shrink-0 h-6 items-center ml-3 pl-[6px] pr-[2px] py-[2px] border border-white/50 rounded-[4px]">
              <svg class="iconpark-icon text-xs w-5 h-5">
                <use id="privateSvg" xlink:href=""></use>
              </svg>
              <span class="text-[12px] scale-[.83] whitespace-nowrap">{{privateState}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="header-right md:mt-[120px] mt-[32px] flex flex-wrap lg:items-center md:justify-end md:h-fit">
        <div class="flex">
          <div class="white-btn mr-3">
            <svg class="iconpark-icon btn-icon w-5 h-5">
              <use xlink:href="#Obtain-5kp36fb2"></use>
            </svg>
            <span class="mx-2">获取</span>
            <span>{{num_forks}}</span>
          </div>
          <div class="opacity-btn mr-3">
            <svg class="iconpark-icon btn-icon w-5 h-5">
              <use id="starts" xlink:href=""></use>
            </svg>
            <span class="mx-2">已收藏</span>
            <span>{{num_rec_stars}}</span>
          </div>
          <div class="opacity-btn">
            <svg class="iconpark-icon btn-icon w-5 h-5">
              <use xlink:href="#share"></use>
            </svg>
            <span class="mx-2">分享</span>
          </div>
          <div class="cursor-pointer">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { get1655, starred } from '../api/api'
export default {
  name: 'HeaderBoxComponent',
  components: {
  },
  data() {
    return {
      name: '',
      privateState: '',
      num_forks: '',
      num_rec_stars: '',
    }
  },
  methods: {
  },
  props: {
    headerBox: {
      type: String,
    },
  },
  mounted() {
    get1655(null).then((res) => {
      this.name = res.data.data.name
      this.num_forks = res.data.data.owner.num_forks
      this.num_rec_stars = res.data.data.owner.num_rec_stars
      if (res.data.data.private === 0) {
        this.privateState = "平台公开"
        const private0 = document.getElementById('privateSvg')
        private0.href.baseVal = "#platformvisible"
      } else if (res.data.data.private === 1) {
        this.privateState = "个人私密"
        const private1 = document.getElementById('privateSvg')
        private1.href.baseVal = "#password"
      }
    })
    starred(null).then((res) => {
      if (res.data.data === true) {
        const private0 = document.getElementById('starts')
        private0.href.baseVal = "#unfavorite"
      } else {
        const private0 = document.getElementById('starts')
        private0.href.baseVal = "#collect"
      }
    })
  }
}
</script>
<style scoped>
.white-btn {
    user-select: none;
    -ms-user-select: none;
    height: 40px;
    background: #ffffff;
    border-radius: 2px;
    color: #333;
    display: flex;
    align-items: center;
    padding: 0 16px;
    font-weight: 500;
}
.white-btn .btn-icon {
    color: #000f24;
    font-size: 18px;
}
.iconpark-icon {
    width: 20px;
    height: 20px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
.opacity-btn {
    height: 40px;
    border-radius: 2px;
    color: #333;
    display: flex;
    align-items: center;
    padding: 0 16px;
    font-weight: blod;
    border: 1px solid #ffffff;
    color: #fff;
    font-size: 14px;
}
</style>