<template>
  <div>
    <header>
      My Rtello
    </header>

    <main>
      <p class="info-line">ALL: 0 tasks</p>
      <list-add></list-add>
    </main>
  </div>
</template>

<script>
import ListAdd from "./ListAdd.vue";
export default {
  components: {
    ListAdd
  }
};
</script>

<style scoped></style>
