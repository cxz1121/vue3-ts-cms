<template>
  <div class="header">
    <div class="content">
      <div class="left-content">
        <el-icon
          size="22"
          @click="handleFoldClick"
          :class="{ unfold: !isFold }"
        >
          <fold />
        </el-icon>
        <div class="breadcrumb">11</div>
      </div>
      <div class="right-content">
        <el-dropdown placement="bottom-start">
          <div>
            <el-avatar
              class="avatar"
              :size="32"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item style="border-bottom: 1px solid #f8f8f9">
                用户信息
              </el-dropdown-item>
              <el-dropdown-item
                style="border-bottom: 1px solid #f8f8f9; padding: 2px 20px"
              >
                修改密码
              </el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Fold } from '@element-plus/icons'
export default defineComponent({
  components: {
    Fold
  },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(true)

    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left-content {
      display: flex;
      align-items: center;

      .el-icon {
        cursor: pointer;
      }

      .unfold {
        transform: rotate(180deg);
      }

      .breadcrumb {
        margin-left: 10px;
      }
    }
    .right-content {
      display: flex;
      align-items: center;

      .avatar {
        cursor: pointer;
      }
    }
  }
}
</style>
