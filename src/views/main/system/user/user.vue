<template>
  <div class="user">
    <div class="search">
      <xz-form v-bind="searchFormConfig" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import XzForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    XzForm
  },
  setup() {
    return { searchFormConfig }
  }
})
</script>

<style scoped></style>
