<template>

  <div class="control" @click="changePage">
    ⚙
  </div>

  <div class="" v-if="isAdmin">
    <home />
  </div>

  <div class="" v-else>
    <admin />
  </div>



</template>

<script lang="ts" setup>
import { ref } from 'vue';
import home from './components/home/index.vue';
import admin from './components/admin/index.vue';

const isAdmin = ref<boolean>(false);

const changePage = () => {

  isAdmin.value = !isAdmin.value;
}

</script>

<style lang="scss" scoped>
.control {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: #e0e0e0;
  }
}
</style>