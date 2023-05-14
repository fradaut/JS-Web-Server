<template>
    <div class="file-upload">
        <div class="file-info">
            <div class="file-name" contenteditable="true" @focus="preventDefault" @keydown="preventDefault">
                {{ uploadedFile?.name || 'No file selected' }}
            </div>
        </div>
        <div class="upload-button"  @click="triggerFileInput">
            <input type="file" ref="fileInput" @change="handleFileUpload" accept=".csv" />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const uploadedFile = ref(null);
        const fileInput = ref(null);
        
        function triggerFileInput() {
            fileInput.value.click();
        }
      
        function handleFileUpload(event) {
            const [file] = event.target.files;
            if (file) {
                // 檢查檔案類型
                if (file.name.endsWith('.csv')) {
                    uploadedFile.value = file;
                } else {
                    alert('請上傳一個 .csv 檔案');
                    event.target.value = null; // 清除已選擇的非 .csv 檔案
                }
            }
        }

        function preventDefault(e) {
            e.preventDefault();
        }
      
        return {
            uploadedFile,
            fileInput,
            triggerFileInput,
            handleFileUpload,
            preventDefault,
        };
    },
};
</script>

<style scoped lang="scss">
.file-upload {
    display: flex;
    align-items: center;
    height: 30px;
    width: 240px;
}

.file-info {
    margin-right: 5px;
    flex: none;
}

.file-name {
    height: 30px;
    width: 110px;
    line-height: 30px;
    padding: 0 1rem;
    background-color: white;
    border: none;
    border-radius: 8px;
    white-space: nowrap;
    overflow: {
        x: auto;
        y: hidden;
    }
    text-overflow: clip;
    &::-webkit-scrollbar {
        display: none;
    }
}

.upload-button {
    flex: none;

    input[type='file'] {
        display: none;
    }
    &::before {
        content: '上傳';
        display: inline-block;
        height: 30px;
        line-height: 30px;
        padding: 0 1rem;
        background-color: #007bff;
        color: #fff;
        border-radius: 8px;
        cursor: pointer;
    }
    input[type='file']:focus + .upload-button::before {
        outline: auto;
        box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
    }
}
</style>