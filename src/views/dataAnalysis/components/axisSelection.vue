<script setup>
import { useDataStore } from '../store/data';
import { computed } from 'vue';
import filterbox from './filterbox.vue';

const xAxisLabel = computed(() => {
    switch (store.selectedChart) {
        case 'pie':
            return '名稱';
        case 'histogram':
            return '數量';
        default:
            return 'X軸';
    }
});

const yAxisLabel = computed(() => {
    switch (store.selectedChart) {
        case 'pie':
            return '數值';
        default:
            return 'Y軸';
    }
});

const store = useDataStore();

const modes = ['markers', 'lines', 'lines+markers'];

const charts = ['histogram', 
                'pie', 'scatter', 'bar'];
const hideAxisY = ['histogram'];
</script>

<template>
    <div> <!-- 这里把<header>改为<div> -->
        <div>
            <label for="chart-type">Charts: </label>
            <select id="chart-type" v-model="store.selectedChart">
                <option v-if="store.selectedChart === 'none'" value="none">選擇圖表</option>
                <option v-for="chart in charts" :key="chart" :value="chart">
                    {{ chart }}
                </option>
            </select>
        </div>
        <div>
            <label for="x-field">{{ xAxisLabel }}: </label>
            <select id="x-field" v-model="store.selectedXField">
                <option v-if="store.selectedXField === 'none'" value="none">選擇欄位</option>
                <option v-for="(value, key) in store.csvData[0]" :key="key" :value="key">
                    {{ value }}
                </option>
            </select>
        </div>
        <div v-show="!hideAxisY.includes(store.selectedChart) && !store.filterFlag">
            <label for="y-field">{{ yAxisLabel }}: </label>
            <select id="y-field" v-model="store.selectedYField">
                <option v-if="store.selectedYField === 'none'" value="none">選擇欄位</option>
                <option v-for="(value, key) in store.csvData[0]" :key="key" :value="key">
                    {{ value }}
                </option>
            </select>
        </div>
        <div v-show="store.selectedChart === 'scatter'">
            <label for="chart-mode">Mode: </label>
            <select id="chart-mode" v-model="store.selectedMode">
                <option v-for="mode in modes" :key="mode" :value="mode">
                    {{ mode }}
                </option>
            </select>
        </div>
        <filterbox/>
    </div>
</template>

<style scoped lang="scss">
div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-right: 1rem;
    
    label {
        margin-right: 0.5rem;
    }

    select {
        width: 150px;
    }
}
</style>
