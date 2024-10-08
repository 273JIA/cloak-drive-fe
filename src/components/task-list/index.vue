<template>
    <div>
        <el-popover
            title="Upload task list"
            placement="bottom-end"
            width="600"
            trigger="click"
            v-model:visible="viewFlag"
        >
            <div class="pan-upload-task-items-content">
                <el-table
                    empty-text="No transmission tasks"
                    :data="taskList"
                    height="300px"
                    style="width: 100%">
                    <el-table-column
                        align="center"
                        header-align="center"
                        label="File Name"
                        prop="filename"
                        width="120"
                        :show-overflow-tooltip="true"
                    >
                    </el-table-column>
                    <el-table-column
                        align="center"
                        header-align="center"
                        label="File Status"
                        width="120">
                        <template #default="scope">
                            <el-popover trigger="hover" placement="top">
                                <p>Status: {{ scope.row.statusText }}</p>
                                <template #reference>
                                    <div class="name-wrapper">
                                        <el-button v-if="scope.row.status === fileStatus.WAITING.code" size="small"
                                                   icon="Clock" circle></el-button>
                                        <el-button v-if="scope.row.status === fileStatus.PAUSE.code" size="small"
                                                   icon="VideoPlay" circle></el-button>
                                        <el-button v-if="scope.row.status === fileStatus.UPLOADING.code"
                                                   size="small" icon="Upload" circle></el-button>
                                        <el-button v-if="scope.row.status === fileStatus.FAIL.code" size="small"
                                                   type="danger" icon="Warning" circle></el-button>
                                        <el-button v-if="scope.row.status === fileStatus.PARSING.code" size="small"
                                                   icon="Loading" circle loading></el-button>
                                        <el-button v-if="scope.row.status === fileStatus.MERGE.code" size="small"
                                                   icon="Coin" circle></el-button>
                                    </div>
                                </template>
                            </el-popover>
                        </template>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        header-align="center"
                        label="Upload progress"
                        width="180">
                        <template #default="scope">
                            <el-popover trigger="hover" placement="top" width="300">
                                <p>Upload Speed: {{ scope.row.speed }} </p>
                                <p>Upload Size: {{ scope.row.uploadedSize }}/{{ scope.row.fileSize }} </p>
                                <p>Time Remaining: {{ scope.row.timeRemaining }} </p>
                                <template #reference>
                                    <div class="name-wrapper">
                                        <el-progress :stroke-width="8" :color="colors"
                                                     :percentage="scope.row.percentage"></el-progress>
                                    </div>
                                </template>
                            </el-popover>
                        </template>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        header-align="center"
                        label="Action"
                        width="180">
                        <template #default="scope">
                            <el-space :size="3">
                                <el-tooltip class="item"
                                            effect="light" content="Pause" placement="top">
                                        <span>
                                            <el-button v-show="scope.row.status === fileStatus.UPLOADING.code"
                                                       @click="pause(scope.row.filename)" size="small" type="primary"
                                                       icon="VideoPause" circle></el-button>
                                        </span>
                                </el-tooltip>
                                <el-tooltip class="item"
                                            effect="light" content="Resume" placement="top">
                                        <span>
                                            <el-button v-show="scope.row.status === fileStatus.PAUSE.code"
                                                       @click="resume(scope.row.filename)" size="small" type="success"
                                                       icon="VideoPlay" circle></el-button>
                                        </span>
                                </el-tooltip>
                                <el-tooltip class="item"
                                            effect="light" content="Cancel" placement="top">
                                        <span>
                                            <el-button
                                                v-show="scope.row.status === fileStatus.UPLOADING.code || scope.row.status === fileStatus.WAITING.code || scope.row.status === fileStatus.PAUSE.code || scope.row.status === fileStatus.FAIL.code"
                                                @click="cancel(scope.row.filename)" size="small"
                                                type="danger" icon="SwitchButton" circle></el-button>
                                        </span>
                                </el-tooltip>
                                <el-tooltip class="item"
                                            effect="light" content="Retry" placement="top">
                                        <span>
                                            <el-button v-show="scope.row.status === fileStatus.FAIL.code"
                                                       @click="retry(scope.row.filename)" size="small" type="warning"
                                                       icon="RefreshRight" circle></el-button>
                                        </span>
                                </el-tooltip>
                            </el-space>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <template #reference>
                <el-badge :max="99" :value="uploadTaskNum" :hidden="uploadTaskFlag" class="item" type="danger">
                    <el-button size="small" icon="Sort"></el-button>
                </el-badge>
            </template>
        </el-popover>
    </div>
</template>

<script setup>

import {useTaskStore} from '@/stores/task'
import {storeToRefs} from 'pinia'
import panUtil from '@/utils/common'

const taskStore = useTaskStore()

const {uploadTaskNum, uploadTaskFlag, viewFlag, taskList} = storeToRefs(taskStore)
const {pause, resume, cancel, retry} = taskStore

const colors = [
    {color: '#909399', percentage: 30},
    {color: '#e6a23c', percentage: 70},
    {color: '#67c23a', percentage: 100}
]

const fileStatus = panUtil.fileStatus

</script>

<style scoped>
.pan-upload-task-items-content {
    height: 300px;
}

.pan-upload-task-items-content .infinite-list {
    height: 100%;
    overflow: auto;
}

.item {
    height: 24px;
    line-height: 24px;
}
</style>