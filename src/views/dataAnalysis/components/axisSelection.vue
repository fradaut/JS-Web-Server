<script setup>
import { useDataStore } from '../store/data';

const dataStore = useDataStore();

const updateXField = (event) => {
    dataStore.selectedXField = event.target.value;
};

const updateYField = (event) => {
    dataStore.selectedYField = event.target.value;
};

const charts = ['pie', 'histogram', 
                'scatter'];
const hideAxisY = ['pie', 'histogram'];
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
            <label for="x-field">X軸: </label>
            <select id="x-field" v-model="selectedXField" @change="updateXField">
                <option v-if="dataStore.selectedXField === 'none'" value="none">選擇欄位</option>
                <option v-for="(value, key) in dataStore.csvData[0]" :key="key" :value="key">
                    {{ value }}
                </option>
            </select>
        </div>
        <div v-show="!hideAxisY.includes(dataStore.selectedChart)">
            <label for="y-field">Y軸: </label>
            <select id="y-field" v-model="selectedYField" @change="updateYField">
            <option v-if="dataStore.selectedYField === 'none'" value="none">選擇欄位</option>
            <option v-for="(value, key) in dataStore.csvData[0]" :key="key" :value="key">
                {{ value }}
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
