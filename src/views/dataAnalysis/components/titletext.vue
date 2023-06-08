<template>
  <div class="link-container">
      <a href="/dataAnalysis/da.pdf" target="_blank" class="title-link">數據分析</a>
      <a href="/downloads/da.zip" class="download-link">(下載)</a>
  </div>
</template>
  
<script setup>
</script>
  
<style scoped lang="scss">
.title-link {
    display: inline-block; // needed for transform to work
    text-decoration: none;
    color: black;
    font-size: 23px; // adjust as needed
    transition: transform 0.3s ease-in-out;
  
    &:hover {
      transform: scale(1.05);
    }
  
    &:active {
      transform: scale(0.95);
    }
}
.download-link {
    display: inline-block; // needed for transform to work
    text-decoration: none;
    color: black;
    font-size: 12px; // adjust as needed
    transition: transform 0.3s ease-in-out;
  
    &:hover {
      transform: scale(1.05);
    }
  
    &:active {
      transform: scale(0.95);
    }
}
</style>