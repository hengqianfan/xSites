<script setup>
import Nav from './components/nav.vue';

</script>

<template>
  <div class="xs-all">
    <Nav></Nav>
  </div>

</template>

<style lang="scss" scoped>
@use './styles/reset.css';

.xs-all {
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
}
</style>
