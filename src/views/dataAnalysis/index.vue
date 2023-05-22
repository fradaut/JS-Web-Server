<script setup>
import { ref, onMounted, watch } from 'vue';
import Plotly from 'plotly.js-dist-min';
import { useDataStore } from './store/data';
import Header from './components/header.vue';

const tester = ref(null);
const store = useDataStore();

const plotData = () => {
    let data = store.csvData;

    // Check if tester.value and data are not null and data has elements
    if (tester.value && data && data.length > 0) {
        let traces = [];
        for (let i=1; i<data[0].length; i++) {
            let trace = {
                x: data.map(row => row[0]),
                y: data.map(row => row[i]),
                name: `Trace ${i}`,
                type: 'scatter'
            };
            traces.push(trace);
        }

        Plotly.newPlot(tester.value, traces);
    }
};

onMounted(() => {
    // Watch for changes in csvData and replot when it changes
    watch(() => store.csvData, plotData, { immediate: true });

    plotData();
});
</script>

<template>
    <Header />
    <div class="content">
        <div id="tester" ref="tester" style="width:600px;height:250px;"></div>
    </div>
</template>

<style scoped lang="scss">
html {
    font-family: "Noto Sans CJK TC", "Microsoft JhengHei", PingFang, STHeiti, sans-serif, serif;
}

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
</style>
