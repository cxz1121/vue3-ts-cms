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
      <el-table :data="userList" border style="width: 100%">
        <el-table-column prop="name" label="昵称" width="" />
        <el-table-column prop="realname" label="真实姓名" width="" />
        <el-table-column prop="cellphone" label="电话号码" />
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import XzForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'
import { Refresh, Search } from '@element-plus/icons'
import { useStore } from '@/store'

export default defineComponent({
  name: 'user',
  components: {
    XzForm,
    Refresh,
    Search
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
    const userCount = computed(() => store.state.systemModule.userCount)

    return { formData, searchFormConfig, userList, userCount }
  }
})
</script>

<style scoped>
.search-btn {
  text-align: right;
  padding: 0 60px 22px 0;
}
</style>
