'use strict';

import {getToken} from '@/utils/cookie'

let panUtil = {
    COMMON_SEPARATOR: '__,__',
    fileStatus: {
        PARSING: {
            code: 1,
            text: 'Parsing'
        },
        WAITING: {
            code: 2,
            text: 'Waiting for upload'
        },
        UPLOADING: {
            code: 3,
            text: 'Uploading'
        },
        PAUSE: {
            code: 4,
            text: 'Pause'
        },
        SUCCESS: {
            code: 5,
            text: 'Upload successful'
        },
        FAIL: {
            code: 6,
            text: 'Upload failed'
        },
        MERGE: {
            code: 7,
            text: 'Server processing'
        }
    },
    translateFileSize(fileSize) {
        let KB_STR = 'K',
            MB_STR = 'M',
            GB_STR = 'G',
            UNIT = 1024,
            fileSizeSuffix = KB_STR
        fileSize = fileSize / UNIT;
        if (fileSize >= UNIT) {
            fileSize = fileSize / UNIT;
            fileSizeSuffix = MB_STR;
        }
        if (fileSize >= UNIT) {
            fileSize = fileSize / UNIT;
            fileSizeSuffix = GB_STR;
        }
        return fileSize.toFixed(2) + fileSizeSuffix;
    },
    translateSpeed(byteSpeed) {
        return this.translateFileSize(byteSpeed) + '/s'
    },
    translateTime(timeRemaining) {
        if (!timeRemaining || Number.POSITIVE_INFINITY === timeRemaining) {
            return '--:--:--'
        }
        let timeRemainingInt = parseInt(timeRemaining),
            hNum = Math.floor(timeRemainingInt / 3600),
            mNum = Math.floor((timeRemainingInt / 60 % 60)),
            sNum = Math.floor((timeRemainingInt % 60)),
            h = hNum < 10 ? '0' + hNum : hNum,
            m = mNum < 10 ? '0' + mNum : mNum,
            s = sNum < 10 ? '0' + sNum : sNum
        return h + ':' + m + ':' + s
    },
    checkUsername(username) {
        return !!username && /^[0-9A-Za-z]{6,16}$/.test(username)
    },
    checkPassword(password) {
        return !!password && password.length >= 8 && password.length <= 16
    },
    showOperation(dom) {
        let parentDiv = dom.firstElementChild
        if (parentDiv && parentDiv.classList.contains('el-tooltip')) {
            let div = parentDiv.lastElementChild
            div.style.display = 'inline-block'
        }
    },
    hiddenOperation(dom) {
        let parentDiv = dom.firstElementChild
        if (parentDiv && parentDiv.classList.contains('el-tooltip')) {
            let div = parentDiv.lastElementChild
            div.style.display = 'none'
        }
    },
    getFileFontElement(type) {
        let tagStr = 'fa fa-file'
        switch (type) {
            case 0:
                tagStr = 'fa fa-folder-o'
                break
            case 2:
                tagStr = 'fa fa-file-archive-o'
                break
            case 3:
                tagStr = 'fa fa-file-excel-o'
                break
            case 4:
                tagStr = 'fa fa-file-word-o'
                break
            case 5:
                tagStr = 'fa fa-file-pdf-o'
                break
            case 6:
                tagStr = 'fa fa-file-text-o'
                break
            case 7:
                tagStr = 'fa fa-file-image-o'
                break
            case 8:
                tagStr = 'fa fa-file-audio-o'
                break
            case 9:
                tagStr = 'fa fa-file-video-o'
                break
            case 10:
                tagStr = 'fa fa-file-powerpoint-o'
                break
            case 11:
                tagStr = 'fa fa-file-code-o'
                break
            default:
                break
        }
        return tagStr
    },
    getPreviewUrl(fileId) {
        return this.getUrlPrefix() + '/file/preview?fileId=' + this.handleId(fileId) + '&authorization=' + getToken()
    },
    getUrlPrefix() {
        return 'https://cloakdrive.online/api/'
        //return 'http://127.0.0.1:8082'
    },
    getChunkSize() {
        if (this.getChunkUploadSwitch()) {
            return 1024 * 1024 * 1
        }
        return this.getMaxFileSize()
    },
    getMaxFileSize() {
        return 1024 * 1024 * 1024 * 3
    },
    getChunkUploadSwitch() {
        return true
    },
    goHome() {
        window.location.href = '/'
    },
    handleId(id) {
        return encodeURIComponent(id)
    }
}

export default panUtil
