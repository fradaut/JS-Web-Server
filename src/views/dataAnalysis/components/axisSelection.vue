<script setup>
import { ref } from 'vue';
import { useDataStore } from '../store/data';

const dataStore = useDataStore();
const selectedXField = ref('none');
const selectedYField = ref('none');

const updateXField = (event) => {
    selectedXField.value = event.target.value;
};

const updateYField = (event) => {
    selectedYField.value = event.target.value;
};
</script>

<template>
    <div> <!-- 这里把<header>改为<div> -->
        <div>
            <label for="x-field">X軸: </label>
            <select id="x-field" v-model="selectedXField" @change="updateXField">
                <option v-if="selectedXField === 'none'" value="none">選擇欄位</option>
                <option v-for="(value, key) in dataStore.csvData[0]" :key="key" :value="value">
                    {{ value }}
                </option>
            </select>
        </div>
        <div>
            <label for="y-field">Y軸: </label>
            <select id="y-field" v-model="selectedYField" @change="updateYField">
            <option v-if="selectedYField === 'none'" value="none">選擇欄位</option>
            <option v-for="(value, key) in dataStore.csvData[0]" :key="key" :value="value">
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
