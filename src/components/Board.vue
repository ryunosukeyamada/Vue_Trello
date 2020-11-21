<template>
  <div>
    <header>My Trello</header>

    <main>
      <p class="info-line">All: {{ totalCardCount }} tasks</p>
      <list
        v-for="(item, index) in lists"
        :key="item.id"
        :title="item.title"
        :listIndex="index"
        :cards="item.cards"
      />
      <list-add> </list-add>
    </main>
  </div>
</template>

<script>
import ListAdd from "./ListAdd.vue";
import List from "./List.vue";
import { mapState } from "vuex";
export default {
  components: {
    ListAdd,
    List,
  },

  computed: {
    ...mapState(["lists"]),
    totalCardCount() {
      return this.$store.getters.totalCardCount;
    }
  },

  // created(){
  //   console.log(this.lists);
  // }
};
</script>

<style scoped></style>
