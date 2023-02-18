<template>
  <div>
    <div class="flex justify-between items-center pt-3 pb-[18px] pr-4 dark:bg-black-000">
      <div class="font-medium text-xl dark:text-gray-25">课程文件</div>
      <div class="flex-1 w-0 self-end">
        <div>
          <el-breadcrumb separator-class="el-icon-arrow-right" class="text-sm pl-3 text-gray-400 flex-y-center">
            <el-breadcrumb-item class="hover:text-blue-400" :to="{ path: '/preview2' }">全部文件</el-breadcrumb-item>
            <el-breadcrumb-item>111</el-breadcrumb-item>
            <!-- <el-breadcrumb-item>{{kename}}</el-breadcrumb-item> -->
          </el-breadcrumb>
        </div>
      </div>
    </div>
    <div class="border-[#E3E4E5] border rounded-b border-t-transparent">
      <el-table :data="tableData">
        <el-table-column sortable :prop="tableLabel[0].name" :label="tableLabel[0].label" :width="tableLabel[0].width">
          <template slot-scope="scope">
            <!-- <div class="flex cursor-pointer" v-for="index in tableData" :key="index.url" @click="go(index.url)"> -->
            <div class="flex cursor-pointer" @click="go(scope.row)" v-show="scope.row.type !== 'dir'">
              <svg v-if="scope.row.file_type=== 'ecos'" class="iconpark-icon text-xl w-6 h-6 flex-shrink-0">
                <use xlink:href="#Video"></use>
              </svg>
              <svg v-if="scope.row.file_type === 'eppt'" class="iconpark-icon text-xl w-6 h-6 flex-shrink-0">
                <use xlink:href="#eppt"></use>
              </svg>
              <span class="truncate">{{ scope.row.name }}</span>
            </div>
            <div class="flex cursor-pointer" v-show="scope.row.type === 'dir'" @click="go1(scope.row)">
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
  </div>
</template>
<script>
import { getContents1 } from '../api/api'
export default {
  name: 'TableComponent',
  components: {
  },
  props: {
    tableData: {
      type: Array,
      default: () => {
        return []
      }
    },
    tableLabel: {
      type: Array,
      default: () => {
        return []
      }
    },
  },
  data() {
    return {
      tableData1: [],
      kename: ''
    }
  },
  mounted() {
    getContents1(null).then((res) => {
      this.tableData1 = res.data.data
    })
  },
  methods: {
    go(url) {
      if (url.url === '') {
        this.$message('该文件暂时不允许查看')
      } else {
        const routerUrl = this.$router.resolve({
          name: 'preview',
          params: { url: url.url },
        })
        window.open(routerUrl.href)
      }
    },
    go1(children) {
      this.$router.push({
        name: 'preview3',
        params: {
          name: children.name,
          children: children.children
        },
      }
      )
    }
  }
}
</script>
<style>
</style>