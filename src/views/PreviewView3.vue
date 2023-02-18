<template>
  <div>
    <Table :tableData="tableData" :tableLabel="tableLabel">
    </Table>
  </div>
</template>
<script>
import Table from '../components/TableComponent.vue'
export default {
  name: 'HomeView',
  components: {
    Table
  },
  data() {
    return {
      tableData: [],
      tableLabel: [
        {
          label: '名称',
          prop: 'name',
          width: '600px'
        },
        {
          label: '大小',
          prop: 'size',
          width: '140px'
        },
        {
          label: '修改时间',
          prop: 'updated_time',
          width: '160px'
        }
      ]
    }
  },
  mounted() {
    this.tableData = this.$route.params.children
  },
  methods: {
  }
}
</script>
<style scoped>
</style>
