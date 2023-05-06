<template>
    <a class="nav-item" :href="to" @click="handleClick" @mouseover="handleMouseOver" @mouseout="handleMouseOut">
        {{ label }}
    </a>
</template>
  
<script setup>
    import { ref } from 'vue';
    
    const props = defineProps({
        label: String,
        to: String,
    });

    const isHovered = ref(false);

    function handleMouseOver() {
        isHovered.value = true;
    }

    function handleMouseOut() {
        isHovered.value = false;
    }
</script>
    
<style scoped>
.nav-item {
  display: inline-flex;
  align-items: center;
  height: 50px;
  padding: 0 15px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.3s;
}

.nav-item:hover {
    background-color: rgba(0, 0, 0, 0.1);
}
</style>