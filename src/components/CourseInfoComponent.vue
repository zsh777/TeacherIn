<template>
  <div class="course-info-wrap pt-3">
    <div class="mb-10">
      <h3 class="text-gray-900 text-base mb-5 font-medium dark:text-gray-400">课程所属</h3>
      <div>
        <div class="flex items-center mb-7">
          <div class="inline cursor-pointer">
            <div class="user-wrap img-wrap">
              <el-image :src="item.owner.avatar_url"></el-image>
            </div>
          </div>
          <div class="name-wrap relative">
            <div class="text-xl font-medium mb-3 text-[#333] truncate">
              <span v-html="item.owner.username"></span>
            </div>
            <div class="justify-left flex" aria-hidden="true">
              <el-button @click="favor" :style="{backgroundColor:bg_color, color: ft_color,}">
                <span>{{content}}</span>
              </el-button>
            </div>
          </div>
        </div>
        <ul class="grid grid-cols-4 text-center max-w-[400px]">
          <li class="border-r border-black-25 dark:border-gray-850">
            <div class="text-black-600 font-medium text-xl mb-[2px] dark:text-gray-25">
              <span v-html="item.owner.num_repo"></span>
            </div>
            <div class="text-gray-400 text-sm">公开课程</div>
          </li>
          <li class="border-r border-black-25 dark:border-gray-850">
            <div class="text-black-600 font-medium text-xl mb-[2px] dark:text-gray-25">
              <span v-html="item.owner.num_rec_stars"></span>
            </div>
            <div class="text-gray-400 text-sm">被收藏</div>
          </li>
          <li class="border-r border-black-25 dark:border-gray-850">
            <div class="text-black-600 font-medium text-xl mb-[2px] dark:text-gray-25">
              <span v-html="item.owner.num_forks"></span>
            </div>
            <div class="text-gray-400 text-sm">被获取</div>
          </li>
          <li class="border-r border-black-25 dark:border-gray-850">
            <div class="text-black-600 font-medium text-xl mb-[2px] dark:text-gray-25">
              <span v-html="item.owner.num_builds"></span>
            </div>
            <div class="text-gray-400 text-sm">课程共建</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="mb-10">
      <h3 class="text-gray-900 text-base mb-5 font-medium dark:text-gray-400">详细信息</h3>
      <div class="info-wrap">
        <div class="bg-white rounded-full border-[1px] border-black-25 dark:bg-black-000 dark:border-gray-600 w-[44px] h-[44px] mr-4">
          <svg class="iconpark-icon w-10 h-10 block text-lg text-black-200 dark:text-gray-200">
            <use xlink:href="#Coursesource1"></use>
          </svg>
        </div>
        <div style="width: calc((100% - 40px) - 16px);">
          <h3 class="info-title dark:!text-gray-25">课程来源</h3>
          <div class="form-title">
            <span class="text-gray-300">{{item.parent.owner.username}}/{{item.parent.name}}</span>
          </div>
        </div>
      </div>
      <div class="info-wrap">
        <div class="bg-white rounded-full border-[1px] border-black-25 dark:bg-black-000 dark:border-gray-600 w-[44px] h-[44px] mr-4">
          <svg class="iconpark-icon w-10 h-10 block text-lg text-black-200 dark:text-gray-200">
            <use xlink:href="#Recentupdates1"></use>
          </svg>
        </div>
        <div style="width: calc((100% - 40px) - 16px);">
          <h3 class="info-title dark:!text-gray-25">最近更新</h3>
          <div class="form-title">
            <span class="text-gray-300">{{item.updated_at | formatUTC}}</span>
          </div>
        </div>
      </div>
      <div class="info-wrap">
        <div class="bg-white rounded-full border-black-25 dark:bg-black-000 dark:border-gray-600 w-[44px] h-[44px] mr-4 border-[2px]">
          <svg class="iconpark-icon w-10 h-10 block text-lg text-black-200 dark:text-gray-200">
            <use xlink:href="#Coursesize1"></use>
          </svg>
        </div>
        <div style="width: calc((100% - 40px) - 16px);">
          <h3 class="info-title dark:!text-gray-25">课程大小</h3>
          <div class="form-title">
            <span class="text-gray-300">{{item.size | filterType}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CourseComponent',
  components: {
  },
  filters: {
    filterType: function (val) {
      if (val === 0) return "";
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB", "TB", "Pb"]
      const i = Math.floor(Math.log(val) / Math.log(k))
      return ((val / Math.pow(k, i).toPrecision(3)).toFixed(1) + "" + sizes[i])
    }
  },
  data() {
    return {
      content: "关注",
      liked: false,
      bg_color: "#00132f",
      ft_color: "#fff",
    }
  },
  props: {
    item: {
      owner: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
  },
  methods: {
    favor() {
      this.liked = !this.liked;
      if (this.liked) {
        this.content = "已关注";
        this.bg_color = "#e6e8eb"
        this.ft_color = ""
        this.$message({
          message: '关注成功',
          type: 'success'
        });
      } else {
        this.content = "关注";
        this.bg_color = "#00132f"
        this.ft_color = "#fff"
        this.$message('已取消关注');
      }
    }
  }
}
</script>
<style>
.img-wrap{
  width: 72px;
  height: 72px;
  border-radius: 4px;
  margin-right: 20px;
}
.el-image {
  border-radius: 50%;
}
.name-wrap {
  flex: 1;
  width: 0;
}
.info-wrap {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
}
.info-title {
    color: #25282b;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 2px;
}
</style>
