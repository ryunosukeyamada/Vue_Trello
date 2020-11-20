<template>
  <div id="app">
    <board-component></board-component>
  </div>
</template>

<script>
import BoardComponent from "./components/Board.vue";

export default {
  name: "app",
  components: {
    BoardComponent
  }
};
</script>

<style scoped></style>
