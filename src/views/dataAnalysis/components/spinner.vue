<template>
    <div class="spinner" v-if="dataStore.isLoading"></div>
</template>

<script setup>
import { useDataStore } from '../store/data';

const dataStore = useDataStore();
</script>

<style scoped lang="scss">
.spinner {
    margin-left: 5px;
    border: 5px solid #f3f3f3;
    border: {
        radius: 50%;
        top: 5px solid #3498db;
    }
    width: 15px;
    height: 15px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>