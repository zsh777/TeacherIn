<template>
  <div>
    <el-table :data="tableData">
      <el-table-column sortable :prop="tableLabel[0].prop" :label="tableLabel[0].label" :width="tableLabel[0].width">
        <template slot-scope="scope">
          <div class="flex cursor-pointer" v-if="scope.row.type !== 'dir'" @click="go">
            <svg v-if="scope.row.file_type=== 'ecos'" class="iconpark-icon text-xl w-6 h-6 flex-shrink-0">
              <use xlink:href="#Video"></use>
            </svg>
            <svg v-if="scope.row.file_type === 'eppt'" class="iconpark-icon text-xl w-6 h-6 flex-shrink-0">
              <use xlink:href="#eppt"></use>
            </svg>
            <span class="truncate">{{ scope.row.name }}</span>
          </div>
          <div class="flex cursor-pointer" v-if="scope.row.type === 'dir'" @click="go1">
            <svg class="iconpark-icon text-xl w-6 h-6 flex-shrink-0">
              <use xlink:href="#Floder"></use>
            </svg>
            <span class="truncate">{{ scope.row.name }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column sortable :prop="tableLabel[1].prop" :label="tableLabel[1].label" :width="tableLabel[1].width">
        <template slot-scope="scope">
          {{scope.row.size | filterType}}
        </template>
      </el-table-column>
      <el-table-column sortable :prop="tableLabel[2].prop" :label="tableLabel[2].label" :width="tableLabel[2].width">
        <template slot-scope="scope">
          <div>
            <span>{{scope.row.updated_time | formatUTC}}</span>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'TableComponent',
  components: {
  },
  props: {
    tableData: { // 父组件传递过来的表格数据
      type: Array,
      default: () => {
        return []
      }
    },
    tableLabel: { // 父组件传递过来的表头数据
      type: Array,
      default: () => {
        return []
      }
    },
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    go() {
      const routerUrl = this.$router.resolve({
        path: '/preview?' + 'url=' + this.tableData[0].url
        // path: "preview/17?url=%2Fpreview%2F%25E5%25A4%25A7%25E5%258D%2595%25E5%2585%2583%25E6%2595%25B4%25E4%25BD%2593%25E6%2595%2599%25E5%25AD%25A6%25E8%25AE%25BE%25E8%25AE%25A1%252F%25E4%25BA%25BA%25E6%2595%2599%25E5%2585%25AB%25E4%25B8%258B%25E5%25B9%25B3%25E8%25A1%258C%25E5%259B%259B%25E8%25BE%25B9%25E5%25BD%25A2%25E5%25A4%25A7%25E5%258D%2595%25E5%2585%2583%25E6%2595%2599%25E5%25AD%25A6%25E8%25AE%25BE%25E8%25AE%25A1.docx.ecos%3Fref%3Dmaster&type=1&uid=7&from=/courses/1655/view"
      })
      window.open(routerUrl.href)
    },
    go1() {
      this.$router.push('preview2/大单元整体教学设计')
    }
  }
}
</script>