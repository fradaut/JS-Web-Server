<template>
    <header>
        <div class="title" @click="handleTitleClick">Title</div>
        <upload />
        <nav class="nav">
            <NavLink label="Vue3" :to="vue" />
            <NavLink label="MC" :to="mc" />
            <NavLink label="IoT" :to="iot" />
            <NavLink label="D.A." :to="da" />
        </nav>
        <div class="menu" @click="handleMenuClick">Menu</div>
    </header>
</template>

<script setup>
    import NavLink from '../components/index/Nav.vue';
    import upload from './upload.vue';
  
    const vue = '#';
    const mc = '#';
    const iot = '#';
    const da = '#';
  
    function handleTitleClick() {
        // Title click logic here
        console.log('Title clicked');
    }
  
    function handleMenuClick() {
        // Menu click logic here
        console.log('Menu clicked');
    }
</script>
  
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
  
    .title,
    .menu {
        cursor: pointer;
    }
</style>