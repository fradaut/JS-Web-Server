<!-- src/pages/NewPage.vue -->
<script setup>
    import Header from './components/Header.vue'
</script>

<template>
    <Header />
    <div class="content">
        <h2>首頁</h2>
        <!-- 在此處添加頁面內容 -->
    </div>
</template>

<style scoped>
    html {
        font-family: "Noto Sans CJK TC", "Microsoft JhengHei", PingFang, STHeiti, sans-serif, serif;
    }
    .content {
        margin-top: 45px;
    }
</style>