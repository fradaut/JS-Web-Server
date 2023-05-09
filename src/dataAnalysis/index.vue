<script setup>
    import Header from './header.vue'
    import { ref, onMounted } from 'vue';
    import Plotly from 'plotly.js-dist-min';

    const tester = ref(null);

    onMounted(() => {
        Plotly.newPlot(tester.value, [
            {
              x: [1, 2, 3, 4, 5],
              y: [1, 2, 4, 8, 16],
            },
        ]);
    });
</script>

<template>
    <Header />
    <div class="content">
        <div id="tester" ref="tester" style="width:600px;height:250px;"></div>
    </div>
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

    .content {
        margin-top: 45px;
    }
  
    .title,
    .menu {
        cursor: pointer;
    }
</style>