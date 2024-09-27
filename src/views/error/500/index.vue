<template>
    <div class="page-500-content">
        <el-result title="Server busy" sub-title="Server busy" icon="error">
            <template #extra>
                <el-button type="primary" @click="goHome">Back</el-button>
            </template>
        </el-result>
    </div>
</template>

<script setup>
import panUtil from '@/utils/common'

const goHome = () => {
    panUtil.goHome()
}
</script>

<style scoped>

</style>