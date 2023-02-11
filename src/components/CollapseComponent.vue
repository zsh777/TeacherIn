<template>
  <div>
    <div class="flex justify-between mb-[18px] items-center overflow-hidden pr-[6px]">
      <span class="flex items-center overflow-hidden flex-1 mr-[12px]">
        <span class="text-[20px] dark:text-gray-25 flex-initial font-medium">课程设计</span>
      </span>
      <span class="flex items-center">
        <div class="mr-2">
          <div class="flex items-center justify-end relative w-[180px] h-[28px] rounded-[2px] cursor-pointer group overflow-hidde">
            <!-- <el-tooltip placement="top" effect="light" content="搜索">
              <svg id="search1" class="cursor-pointer w-6 h-6 text-black-300 dark:!text-white hover:text-blue-400 changeAni" title="搜索">
                <use xlink:href="#search"></use>
              </svg>
            </el-tooltip> -->
            <el-input v-model="input" type="text" class="!h-[20px] !w-[180px] items-center" placeholder="单元/活动名称">
              <svg slot="prefix" class="w-[20px] h-[20px] mt-[10px] items-center">
                <use xlink:href="#search"></use>
              </svg>
            </el-input>
          </div>
        </div>
        <span>
          <el-tooltip placement="top" effect="light">
            <div slot="content">{{view}}</div>
            <svg @click="content" class="cursor-pointer w-6 h-6 dark:text-gray-25">
              <use id="content" xlink:href="#Property1xiangqing"></use>
            </svg>
          </el-tooltip>
        </span>
        <span>
          <el-tooltip placement="top" effect="light">
            <div slot="content">{{isStudentView}}</div>
            <svg @click="isStudent" class="cursor-pointer w-6 h-6 dark:text-gray-25">
              <use id="isStudent" xlink:href="#Studentperspective"></use>
            </svg>
          </el-tooltip>
        </span>
      </span>
    </div>
    <div class="collapseComponent">
      <el-collapse v-model="activeNames">
        <el-collapse-item class="indexStyle" v-for="index in item" :key="index.unitName" :name="index.unitName" :title="index.unitName" :content="index.content">
          <span class="whitespace-pre-wrap text-base font-thin break-words">{{index.content}}</span>
          <el-collapse v-model="activeNames2">
            <el-collapse-item v-for="index2 in index.activities" :name="index2.activityName" :key="index2.activityName" :title="index2.activityName" style="display:block">
              <template slot="title">
                <div class="flex flex-row items-center" v-show="isTeacher">
                  <svg class="iconpark-icon w-6 h-6 block text-lg text-black-200 dark:text-gray-200">
                    <use xlink:href="#ziliao"></use>
                  </svg>
                  <span>{{index2.activityName}}</span>
                  <div v-if="index2.actPublishFlag === 1" class="flex flex-row items-center">
                    <svg class="iconpark-icon !w-[20px] !h-[20px] mr-[4px]">
                      <use xlink:href="#invisible"></use>
                    </svg>
                    <span class="text-gray-500 text-xs">对学生隐藏</span>
                  </div>
                </div>
              </template>
              <!-- <template slot="title">
                <div id="study" style="display:none">
                  <p class="text-center">暂无学习活动</p>
                </div>
              </template> -->
              <div class="pl-[80px]" v-show="isTeacher">
                <div>
                  <span v-if="index2.duration !== 0" class="text-xs text-gray-700">时长: {{index2.duration}}分钟 | 教学模式: 在线课堂</span>
                </div>
                <div class="rounded w-16 text-xs bg-gray-50" v-if="index2.fullScore === 100">满分{{index2.fullScore}}分</div>
                <div class="text-gray-500 text-base">{{index2.desc}}</div>
                <ul class="w-full flex flex-wrap mt-[4px] gap-4">
                  <li class="cursor-pointer flex flex-row items-center h-[56px] rounded-[4px] border border-[#DBDEDF] bg-white pl-[14px] pr-[12px] py-[8px] relative overflow-hidden w-[218px]" v-for="index3 in index2.docs" :key="index3.path" @click="go">
                    <svg v-if="index3.path.substring(index3.path.lastIndexOf('.') + 1)==='docx'" class=" iconpark-icon mr-1 w-[20px] h-[20px]">
                      <use xlink:href="#Word"></use>
                    </svg>
                    <svg v-if="index3.path.substring(index3.path.lastIndexOf('.') + 1)==='xlsx'" class=" iconpark-icon mr-1 w-[20px] h-[20px]">
                      <use xlink:href="#Excel"></use>
                    </svg>
                    <svg v-if="index3.path.substring(index3.path.lastIndexOf('.') + 1)==='pdf'" class=" iconpark-icon mr-1 w-[20px] h-[20px]">
                      <use xlink:href="#PDF"></use>
                    </svg>
                    <svg v-if="index3.path.substring(index3.path.lastIndexOf('.') + 1)==='pptx'" class=" iconpark-icon mr-1 w-[20px] h-[20px]">
                      <use xlink:href="#PPT"></use>
                    </svg>
                    <div class="flex flex-col mr-[10px] items-start">
                      <el-tooltip placement="top" effect="light">
                        <div slot="content">
                          <span class="break-all">{{(index3.path.substring(index3.path.lastIndexOf("/")+1))}}</span>
                        </div>
                        <p slot="reference" class="w-[140px] mb-0 text-sm leading-[20px]">
                        <div class="w-[140px] flex truncate">
                          <span class="truncate">{{index3.path.substring(index3.path.lastIndexOf("/")+1)}}</span>
                          <span>.{{index3.path.split('.')[1]}}</span>
                        </div>
                        </p>
                      </el-tooltip>
                      <span class="leading-[20px] text-gray-400 dark:text-gray-500">{{index3.fileSize |filterType }}</span>
                    </div>
                  </li>
                  <li class="cursor-pointer flex flex-row items-center h-[56px] rounded-[4px] border border-[#DBDEDF] bg-white pl-[14px] pr-[12px] py-[8px] relative overflow-hidden w-[218px]" v-for="index3 in index2.image" :key="index3.path" @click="go">
                    <svg v-if="index3.path.substring(index3.path.lastIndexOf('.') + 1) ==='png'" class=" iconpark-icon mr-1 w-[20px] h-[20px]">
                      <use xlink:href="#Picture"></use>
                    </svg>
                    <div class="flex flex-col mr-[10px] items-start">
                      <el-tooltip placement="top" effect="light">
                        <div slot="content">
                          <span class="break-all">{{index3.path.substring(index3.path.lastIndexOf("/")+1)}}</span>
                        </div>
                        <p slot="reference" class="w-[140px] mb-0 text-sm leading-[20px]">
                        <div class="w-[140px] flex truncate">
                          <span class="truncate">{{index3.path.split('.')[0]}}</span>
                          <span>.{{index3.path.split('.')[1]}}</span>
                        </div>
                        </p>
                      </el-tooltip>
                      <span class="leading-[20px] text-gray-400 dark:text-gray-500">{{index3.fileSize |filterType }}</span>
                    </div>
                  </li>
                  <li class="cursor-pointer flex flex-row items-center h-[56px] rounded-[4px] border border-[#DBDEDF] bg-white pl-[14px] pr-[12px] py-[8px] relative overflow-hidden w-[218px]" v-for="index3 in index2.video" :key="index3.path" @click="go">
                    <svg v-if="index3.path.substring(index3.path.lastIndexOf('.') + 1) ==='mp4'" class=" iconpark-icon mr-1 w-[20px] h-[20px]">
                      <use xlink:href="#Video"></use>
                    </svg>
                    <div class="flex flex-col mr-[10px] items-start">
                      <el-tooltip placement="top" effect="light">
                        <div slot="content">
                          <span class="break-all">{{index3.path}}</span>
                        </div>
                        <p slot="reference" class="w-[140px] mb-0 text-sm leading-[20px]">
                        <div class="w-[140px] flex truncate">
                          <span class="truncate">{{index3.path.split('.')[0]}}</span>
                          <span>.{{index3.path.split('.')[1]}}</span>
                        </div>
                        </p>
                      </el-tooltip>
                      <span class="leading-[20px] text-gray-400 dark:text-gray-500">{{index3.fileSize |filterType }}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CollapseComponent',
  components: {
  },
  data() {
    return {
      input: '',
      view: '详情视图',
      isStudentView: '学生视图',
      activeNames2: [],
      isTeacher: 'true'
    }
  },
  mounted() {
    console.log(this.input)
  },
  computed: {
    activeNames: {
      get() {
        return this.item.map((i) => {
          return i.unitName;
        })
      },
      set() {
        // console.log("555", 44)
      }
    },
    // activeNames2: {
    //   get() {
    //     const arr = this.item.map((i) => {
    //       return i.activities.map((i) => {
    //         return i.activityName
    //       })
    //     })
    //     return arr.flat(Infinity)
    //   },
    //   set() {
    //     console.log("activeNames2")
    //   }
    // }
  },
  methods: {
    go() {
      // window.open('https://www.baidu.com', 'baidu')
      // this.$router.push('/preview/17?url=%2Fpreview%2F%25E5%25A4%25A7%25E5%258D%2595%25E5%2585%2583%25E6%2595%25B4%25E4%25BD%2593%25E6%2595%2599%25E5%25AD%25A6%25E8%25AE%25BE%25E8%25AE%25A1%252F%25E4%25BA%25BA%25E6%2595%2599%25E5%2585%25AB%25E4%25B8%258B%25E5%25B9%25B3%25E8%25A1%258C%25E5%259B%259B%25E8%25BE%25B9%25E5%25BD%25A2%25E5%25A4%25A7%25E5%258D%2595%25E5%2585%2583%25E6%2595%2599%25E5%25AD%25A6%25E8%25AE%25BE%25E8%25AE%25A1.docx.ecos%3Fref%3Dmaster&type=1&uid=7&from=/courses/1655/view')
      const routerUrl = this.$router.resolve({
        path: "preview/17?url=%2Fpreview%2F%25E5%25A4%25A7%25E5%258D%2595%25E5%2585%2583%25E6%2595%25B4%25E4%25BD%2593%25E6%2595%2599%25E5%25AD%25A6%25E8%25AE%25BE%25E8%25AE%25A1%252F%25E4%25BA%25BA%25E6%2595%2599%25E5%2585%25AB%25E4%25B8%258B%25E5%25B9%25B3%25E8%25A1%258C%25E5%259B%259B%25E8%25BE%25B9%25E5%25BD%25A2%25E5%25A4%25A7%25E5%258D%2595%25E5%2585%2583%25E6%2595%2599%25E5%25AD%25A6%25E8%25AE%25BE%25E8%25AE%25A1.docx.ecos%3Fref%3Dmaster&type=1&uid=7&from=/courses/1655/view"
      })
      window.open(routerUrl.href, '_black')
    },
    content() {
      if (document.getElementById('content').href.baseVal === "#Property1xiangqing") {
        const content = document.getElementById('content')
        content.href.baseVal = "#Property1mulu"
        this.view = "目录视图"
        const arr = this.item.map((i) => {
          return i.activities.map((q) => {
            return q.activityName
          })
        })
        const arr2 = arr.flat(Infinity)
        this.activeNames2 = arr2
      } else {
        const content = document.getElementById('content')
        content.href.baseVal = "#Property1xiangqing"
        this.view = "详情视图"
        this.activeNames2 = []
      }
    },
    isStudent() {
      if (document.getElementById('isStudent').href.baseVal === "#Studentperspective") {
        const isStudent = document.getElementById('isStudent')
        isStudent.href.baseVal = "#teacher"
        this.isStudentView = "教师视图"
        this.isTeacher = true
      } else {
        const isStudent = document.getElementById('isStudent')
        isStudent.href.baseVal = "#Studentperspective"
        this.isStudentView = "学生视图"
        this.isTeacher = false
        // document.getElementById('isTeacher').style.display = "none"
        // document.getElementById('study').style.display = "block"
      }
    },
  },
  props: {
    item: {
      type: Array,
      default: () => {
        return []
      }
    },
  },
}
</script>
<style scope>
.indexStyle .el-collapse-item__header {
    font-size: 18px;
}
.iconpark-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>
