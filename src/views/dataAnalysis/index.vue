<script setup>
import { ref, onMounted, watch } from 'vue';
import { useDataStore } from './store/data';
import Header from './components/header.vue';

const tester = ref(null);
const store = useDataStore();

const plotData = async () => {
    const waiting = async () => {
        store.isLoading = true;
    };
    await waiting();
    let data = store.csvData;

    // Check if tester.value and data are not null and data has elements
    if (tester.value && data && data.length > 0) {
        const Plotly = await import('plotly.js-dist-min');

        let xData = data.map( row => row[store.selectedXField]);
        let yData = data.map( row => row[store.selectedYField]);

        if (store.filterFlag) {
            let counter = {};
            xData.forEach(val => {
                if (val) {
                    val.split(';').forEach(item => {
                        item = item.trim().toLowerCase();
                        counter[item] = (counter[item] || 0) + 1;
                    });
                }
            });
            xData = Object.keys(counter);
            yData = Object.values(counter);
        }

        let trace = {
            type: store.selectedChart,
        };

        switch (store.selectedChart) {
            case 'pie':
                trace.values = yData;
                trace.labels = xData;
                break;
            case 'histogram':
                trace.x = yData;
                break;
            case 'scatter':
                trace.x = xData;
                trace.y = yData;
                trace.name = `${store.selectedXField}`;
                trace.mode = store.selectedMode;
                break;
            case 'bar':
                trace.x = xData;
                trace.y = yData;
                break;
        }

        let layout = {
            autosize: true,
        };

        let config = {responsive: true};

        Plotly.default.newPlot(tester.value, [trace], layout, config);
    }
    store.isLoading = false;
};

onMounted(() => {
    // Watch for changes in csvData and replot when it changes
    watch(() => [store.csvData, store.selectedChart, store.selectedMode, store.selectedXField, store.selectedYField, store.filterFlag], plotData, { immediate: true });

    plotData();
});
</script>

<template>
    <Header />
    <div class="content">
        <div id="tester" ref="tester"></div>
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
    height: calc(100% - 45px);
    #tester {
        width: 100%;
        height: 100%;
    }
}
</style>
