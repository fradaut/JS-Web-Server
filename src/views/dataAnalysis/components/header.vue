<script setup>
import upload from './upload.vue'
import axisSelection from './axisSelection.vue'
import titletext from './titletext.vue'
</script>

<template>
    <header>
        <div class="left-section">
            <titletext />
            <upload />
        </div>
        <axisSelection />
    </header>
</template>
  
<style scoped lang="scss">
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    background-color: #ffd9e6;
    padding: 0 20px;
    box-sizing: border-box;
}
.left-section {
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>