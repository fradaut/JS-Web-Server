<script setup>
import { ref, onMounted, watch } from 'vue';
// import Plotly from 'plotly.js-dist-min';
import { useDataStore } from './store/data';
import Header from './components/header.vue';

const tester = ref(null);
const store = useDataStore();

const plotData = async () => {
    let data = store.csvData;

    // Check if tester.value and data are not null and data has elements
    if (tester.value && data && data.length > 0) {
        const Plotly = await import('plotly.js-dist-min');

        let xData = data.map( row => row[store.selectedXField]);
        let yData = data.map( row => row[store.selectedYField]);

        let trace = {
            x: xData,
            y: yData,
            name: `${store.selectedXField}`,
            mode: `markers`,
            type: 'scatter'
        };

        Plotly.default.newPlot(tester.value, [trace]);
    }
};

onMounted(() => {
    // Watch for changes in csvData and replot when it changes
    watch(() => [store.csvData, store.selectedXField, store.selectedYField], plotData, { immediate: true });

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
