<template>
    <header class="header">
        <div class="title" @click="handleTitleClick">Title</div>
        <nav class="nav">
            <NavLink label="Vue3" :to="linkA" />
            <NavLink label="MC" :to="linkB" />
            <NavLink label="IoT" :to="linkC" />
        </nav>
        <div class="menu" @click="handleMenuClick">Menu</div>
    </header>
</template>
  
<script setup>
    import NavLink from '../components/index/Nav.vue';
  
    const linkA = './vuedoc';
    const linkB = './minecraft';
    const linkC = './IoT';
  
    function handleTitleClick() {
        // Title click logic here
        console.log('Title clicked');
    }
  
    function handleMenuClick() {
        // Menu click logic here
        console.log('Menu clicked');
    }
</script>
  
<style scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 50px;
        background-color: #ffd9e6;
        padding: 0 20px;
        box-sizing: border-box;
    }
  
    .title,
    .menu {
        cursor: pointer;
    }
</style>