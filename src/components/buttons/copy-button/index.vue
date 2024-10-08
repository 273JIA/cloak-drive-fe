<template>
    <div class="copy-button-content">
        <el-button color="#626aef" v-if="roundFlag" :size="size" round @click="copyFile" plain>
            Copy
            <el-icon class="el-icon--right">
                <CopyDocument/>
            </el-icon>
        </el-button>
        <el-button v-if="circleFlag" icon="CopyDocument" :size="size" circle @click="copyFile">
        </el-button>
        <el-dialog
            title="Copy"
            v-model="treeDialogVisible"
            @open="loadTreeData"
            @closed="resetTreeData"
            width="30%"
            append-to-body
            :modal-append-to-body="false"
            center>
            <div class="tree-content">
                <el-tree
                    class="tree"
                    :data="treeData"
                    empty-text="No folder data"
                    default-expand-all
                    highlight-current
                    check-on-click-node
                    :expand-on-click-node="false"
                    ref="treeRef">
                    <template #default="{ node, data }">
                        <span class="custom-tree-node">
                            <el-icon :size="20" style="margin-right: 15px; cursor: pointer;"><Folder/></el-icon>
                            <span>{{ node.label }}</span>
<!--                          <span>All Files</span>-->
                        </span>
                    </template>
                </el-tree>
            </div>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="treeDialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="doChoseTreeNodeCallBack" :loading="loading">Confirm</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script setup>

const props = defineProps({
    roundFlag: Boolean,
    circleFlag: Boolean,
    size: String,
    item: Object
})

import fileService from '@/api/file'
import panUtil from '@/utils/common'
import {ref} from 'vue'
import {useFileStore} from '@/stores/file'
import {storeToRefs} from 'pinia'
import {ElMessage} from 'element-plus'

const fileStore = useFileStore()
const {multipleSelection} = storeToRefs(fileStore)
const treeRef = ref(null)

const copyFile = () => {
    if (!props.item && (!multipleSelection.value || multipleSelection.value.length == 0)) {
        ElMessage.error('Please select the file to copy')
        return
    }
    treeDialogVisible.value = true
}

const treeDialogVisible = ref(false)

const loadTreeData = () => {
    fileService.getFolderTree(res => {
        treeData.value = res.data
    }, res => {
        ElMessage.error(res.message)
    })
}

const resetTreeData = () => {
    treeData.value = new Array()
}

const treeData = ref([])

const doCopyFile = (targetParentId) => {
    let fileIds = ''
    if (props.item) {
        fileIds = props.item.fileId
    } else {
        let fileIdArr = new Array()
        multipleSelection.value.forEach(item => fileIdArr.push(item.fileId))
        fileIds = fileIdArr.join(panUtil.COMMON_SEPARATOR)
    }
    fileService.copy({
        fileIds: fileIds,
        targetParentId: targetParentId
    }, res => {
        loading.value = false
        treeDialogVisible.value = false
        ElMessage.success('File copied successfully')
        fileStore.loadFileList()
    }, res => {
        loading.value = false
        ElMessage.error(res.message)
    })
}

const doChoseTreeNodeCallBack = () => {
    loading.value = true
    let checkNode = treeRef.value.getCurrentNode()
    if (!checkNode) {
        ElMessage.error('Please select a folder')
        loading.value = false
        return
    }
    doCopyFile(checkNode.id)
}

const loading = ref(false)

</script>

<style scoped>

.copy-button-content {
    display: inline-block;
    margin-right: 10px;
}

.tree-content {
    height: 400px;
}

.tree-content .tree {
    height: 100%;
    overflow: auto;
}

</style>