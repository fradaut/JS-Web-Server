<script setup>
import { useDataStore } from '../store/data';
import { computed } from 'vue';

const xAxisLabel = computed(() => {
    switch (dataStore.selectedChart) {
        case 'pie':
            return '名稱';
        case 'histogram':
            return '數量';
        default:
            return 'X軸';
    }
});

const yAxisLabel = computed(() => {
    switch (dataStore.selectedChart) {
        case 'pie':
            return '數值';
        default:
            return 'Y軸';
    }
});

const dataStore = useDataStore();

const updateXField = (event) => {
    dataStore.selectedXField = event.target.value;
};

const updateYField = (event) => {
    dataStore.selectedYField = event.target.value;
};

const modes = ['markers', 'lines', 'lines+markers'];

const charts = ['histogram', 
                'pie', 'scatter', 'bar'];
const hideAxisY = ['histogram'];
</script>

<template>
    <div> <!-- 这里把<header>改为<div> -->
        <div>
            <label for="chart-type">Charts: </label>
            <select id="chart-type" v-model="dataStore.selectedChart">
                <option v-for="chart in charts" :key="chart" :value="chart">
                    {{ chart }}
                </option>
            </select>
        </div>
        <div>
            <label for="x-field">{{ xAxisLabel }}: </label>
            <select id="x-field" v-model="selectedXField" @change="updateXField">
                <option v-if="dataStore.selectedXField === 'none'" value="none">選擇欄位</option>
                <option v-for="(value, key) in dataStore.csvData[0]" :key="key" :value="key">
                    {{ value }}
                </option>
            </select>
        </div>
        <div v-show="!hideAxisY.includes(dataStore.selectedChart)">
            <label for="y-field">{{ yAxisLabel }}: </label>
            <select id="y-field" v-model="selectedYField" @change="updateYField">
            <option v-if="dataStore.selectedYField === 'none'" value="none">選擇欄位</option>
            <option v-for="(value, key) in dataStore.csvData[0]" :key="key" :value="key">
                {{ value }}
            </option>
        </select>
        </div>
        <div v-show="dataStore.selectedChart === 'scatter'">
            <label for="chart-mode">Mode: </label>
            <select id="chart-mode" v-model="dataStore.selectedMode">
                <option v-for="mode in modes" :key="mode" :value="mode">
                    {{ mode }}
                </option>
            </select>
        </div>
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
