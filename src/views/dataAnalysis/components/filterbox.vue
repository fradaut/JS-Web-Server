<template>
    <div>
      <input type="checkbox" id="filter" v-model="store.filterFlag">
      <label for="filter">統計</label>
    </div>
</template>
  
<script setup>
import { useDataStore } from '../store/data';

const store = useDataStore();
</script>