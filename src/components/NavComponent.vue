<template>
  <div class="flex items-center w-full h-[72px] fixed  justify-between px-4 lg:px-12 box-border border-b bg-white border-black-25 select-none  dark:bg-black-000 dark:border-black-100  flex-shrink-0 top-0 left-0 z-[100]">
    <div class="flex text-xl font-medium left max-w-[320px] max-h-[30px] flex-1 w-0">
      <a href="" class="router-link-active flex items-center flex-shrink-0">
        <img class="w-6 mr-1 h-[30px] dark:invert" src="@/assets/image/logo2.png" />
        <img class="h-[15px] mr-3 dark:invert" src="@/assets/image/logo.png" />
      </a>
      <div class="flex items-center mr-3 cursor-pointer w-min text-gray-900 dark:text-white">
        <div class="truncate max-w-[120px] md:max-w-[180px] lg:max-w-[220px] hidden lg:block">
          · {{$t('message.wdgzt')}}
        </div>
        <svg class="iconpark-icon text-xl cursor-pointer mt-[2px] ml-2 w-5 h-5">
          <use xlink:href="#menu">
          </use>
        </svg>
      </div>
    </div>
    <div class="header-right flex items-center">
      <div class="mr-9 hidden md:block">
        <a href="https://www.teacherin.cn/explore" class="ti-tab text-gray-900 hover:text-blue-400 transition-all hover:font-medium text-base">{{$t('message.explore')}}</a>
      </div>
      <div class="mr-9 hidden md:block">
        <a href="" class="ti-tab text-gray-900 hover:text-blue-400 transition-all hover:font-medium text-base">{{$t('message.community')}}</a>
      </div>
      <div class="el-dropdown-trigger text-gray-900 hover:text-blue-400 hover:font-medium text-base cursor-pointer mr-6 block md:hidden">
        <div class="transition-all">{{$t('message.explore')}}</div>
        <svg class="iconpark-icon text-lg ml-2 font-medium">
        </svg>
      </div>
      <div class="global-search relative flex items-center transition-all w-[160px] md:w-[300px] lg:w-[345px] h-auto mr-9 ml-2 order-first lg:order-none">
        <el-input v-model="input" type="text" id="globalSearch" :placeholder="$t('message.search')">
          <svg slot="prefix" class="w-6 h-6 text-xl mr-1 mt-2">
            <use xlink:href="#search"></use>
          </svg>
        </el-input>
      </div>
      <div class="flex items-center">
        <el-dropdown placement="bottom" class="text-gray-900 dark:text-white hover:text-blue-400 hover:font-medium cursor-pointer flex-y-center mr-6 ml-2">
          <svg class="iconpark-icon text-2xl w-6 h-6">
            <use id="local" xlink:href="#chinese-5onc4kk4"></use>
          </svg>
          <el-dropdown-menu slot="dropdown" class="border">
            <el-dropdown-item @click.native="lang_change(1)">
              <div class="flex items-center text-gray-800 hover:text-blue-400">
                <svg class="iconpark-icon text-2xl mr-2 w-6 h-6">
                  <use xlink:href="#chinese-5onc4kk4">
                  </use>
                </svg>
                <span>中文</span>
              </div>
            </el-dropdown-item>
            <el-dropdown-item @click.native="lang_change(2)">
              <div class="flex items-center text-gray-800 hover:text-blue-400">
                <svg class="iconpark-icon text-2xl mr-2 w-6 h-6">
                  <use xlink:href="#english-5onc4kka">
                  </use>
                </svg>
                <span>English</span>
              </div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-popover trigger="hover" title="通知信息">
          <el-badge slot="reference">
            <svg class="w-6 h-6 iconpark-icon text-gray-900 text-2xl inline-block cursor-pointer" data-v-54c37157="">
              <use xlink:href="#News">
              </use>
            </svg>
          </el-badge>
        </el-popover>
        <img class="w-[30px] h-[30px] rounded-[50%] cursor-pointer ml-6" src="@/assets/image/user.png" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NavComponent',
  data() {
    return {
      text: '',
      input: ''
    }
  },
  components: {
  },
  props: {
  },
  mounted() {
  },
  methods: {
    lang_change(value) {
      if (value === 1) {
        this.$i18n.locale = 'zh'
        const chinese = document.getElementById('local')
        chinese.href.baseVal = "#chinese-5onc4kk4"
      } else {
        this.$i18n.locale = 'en'
        const english = document.getElementById('local')
        english.href.baseVal = "#english-5onc4kka"
      }
    }
  }
}
</script>
<style scoped>
.global-search #globalSearch {
    background-color: #f3f6fa;
    max-width: 368px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
