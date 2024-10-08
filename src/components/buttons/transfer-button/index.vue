<template>
    <div class="transfer-button-content">
        <el-button v-if="roundFlag" :size="size" round @click="transferFile">
            Move
            <el-icon class="el-icon--right">
                <Position/>
            </el-icon>
        </el-button>
        <el-button v-if="circleFlag" icon="Position" :size="size" circle @click="transferFile">
        </el-button>
        <el-dialog
            title="Move File"
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
import {ref} from 'vue'
import {useFileStore} from '@/stores/file'
import {storeToRefs} from 'pinia'
import {ElMessage} from 'element-plus'
import panUtil from '@/utils/common'

const fileStore = useFileStore()
const {multipleSelection} = storeToRefs(fileStore)
const treeRef = ref(null)

const transferFile = () => {
    if (!props.item && (!multipleSelection.value || multipleSelection.value.length == 0)) {
        ElMessage.error('Please select the files to move')
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

const doTransferFile = (targetParentId) => {
    let fileIds = ''
    if (props.item) {
        fileIds = props.item.fileId
    } else {
        let fileIdArr = new Array()
        multipleSelection.value.forEach(item => fileIdArr.push(item.fileId))
        fileIds = fileIdArr.join(panUtil.COMMON_SEPARATOR)
    }
    fileService.transfer({
        fileIds: fileIds,
        targetParentId: targetParentId
    }, res => {
        loading.value = false
        treeDialogVisible.value = false
        ElMessage.success('File moved successfully')
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
    doTransferFile(checkNode.id)
}

const loading = ref(false)

</script>

<style>

.transfer-button-content {
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