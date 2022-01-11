<template>
  <div class="user">
    <div class="search">
      <xz-form v-bind="searchFormConfig" v-model="formData">
        <template #footer>
          <div class="search-btn">
            <el-button icon="el-icon-refresh">重置</el-button>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
          </div>
        </template>
      </xz-form>
      <div class="table">
        <xz-table
          :listData="userList"
          v-bind="tableConfig"
          @selectionChange="selectionChange"
        >
          <template #enable="scope">
            <el-button
              size="mini"
              :type="scope.row.enable ? 'success' : 'danger'"
            >
              {{ scope.row.enable ? '启用' : '禁用' }}
            </el-button>
          </template>
          <template #createAt="scope">
            <span>{{ $filter.formatTime(scope.row.createAt) }}</span>
          </template>
          <template #updateAt="scope">
            <span>{{ $filter.formatTime(scope.row.updateAt) }}</span>
          </template>
          <template #handler>
            <div class="handle-btns">
              <el-button size="mini" type="text" icon="el-icon-edit"
                >编辑</el-button
              >
              <el-button size="mini" type="text" icon="el-icon-delete"
                >删除</el-button
              >
            </div>
          </template>
          <template #header> this.shit! </template>
        </xz-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import XzForm from '@/base-ui/form'
import XzTable from '@/base-ui/table'
import { searchFormConfig } from './config/search.config'
import { tableConfig } from './config/table.config'
import { useStore } from '@/store'

export default defineComponent({
  name: 'user',
  components: {
    XzForm,
    XzTable
  },
  setup() {
    const formData = ref({
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })

    const store = useStore()
    store.dispatch('systemModule/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const userList = computed(() => store.state.systemModule.userList)

    const selectionChange = (value: any) => {
      console.log(value)
    }

    return {
      formData,
      searchFormConfig,
      userList,
      tableConfig,
      selectionChange
    }
  }
})
</script>

<style scoped>
.search-btn {
  text-align: right;
  padding: 0 90px 22px 0;
}
.table {
  padding: 20px;
  border-top: 20px solid #f0f2f5;
}
</style>
