<template>
  <div class="user">
    <div class="search">
      <xz-form v-bind="searchFormConfig" v-model="formData">
        <template #footer>
          <div class="search-btn">
            <el-button>
              <el-icon><refresh /></el-icon>
              <span>重置</span>
            </el-button>
            <el-button type="primary">
              <el-icon><search /></el-icon>
              <span>搜索</span>
            </el-button>
          </div>
        </template>
      </xz-form>
      <div class="table">
        <xz-table
          :listData="userList"
          :propsList="propsList"
          :showIndexColumn="showIndexColumn"
          :showSelectColumn="showSelectColumn"
          @selectionChange="selectionChange"
        >
          <template #enable="scope">
            <el-button>{{ scope.row.enable ? '启用' : '禁用' }}</el-button>
          </template>
          <template #createAt="scope">
            <span>{{ $filter.formatTime(scope.row.createAt) }}</span>
          </template>
          <template #updateAt="scope">
            <span>{{ $filter.formatTime(scope.row.updateAt) }}</span>
          </template>
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
import { Refresh, Search } from '@element-plus/icons'
import { useStore } from '@/store'

export default defineComponent({
  name: 'user',
  components: {
    XzForm,
    Refresh,
    Search,
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

    const propsList = [
      { prop: 'name', label: '用户名', minWidth: '100', slotName: 'name' },
      {
        prop: 'realname',
        label: '真实姓名',
        minWidth: '100',
        slotName: 'realname'
      },
      {
        prop: 'cellphone',
        label: '电话号码',
        minWidth: '100',
        slotName: 'cellphone'
      },
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'enable' },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '250',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '250',
        slotName: 'updateAt'
      }
    ]

    const showIndexColumn = true
    const showSelectColumn = true

    const selectionChange = (value: any) => {
      console.log(value)
    }

    return {
      formData,
      searchFormConfig,
      userList,
      propsList,
      showIndexColumn,
      showSelectColumn,
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
