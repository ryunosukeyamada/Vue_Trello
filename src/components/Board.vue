<template>
  <div>
    <header>My Trello</header>

    <main>
      <p class="info-line">All: {{ totalCardCount }} tasks</p>
      <draggable class="list-index" :list="lists" @end="movingList()">
        <list
          v-for="(item, index) in lists"
          :key="item.id"
          :title="item.title"
          :listIndex="index"
          :cards="item.cards"
          @change="movingCard"
        />
      </draggable>
      <list-add> </list-add>
    </main>
  </div>
</template>

<script>
import ListAdd from "./ListAdd.vue";
import List from "./List.vue";

import { mapState } from "vuex";
import draggable from "vuedraggable";
export default {
  components: {
    ListAdd,
    List,
    draggable,
  },

  computed: {
    ...mapState(["lists"]),
    totalCardCount() {
      return this.$store.getters.totalCardCount;
    },
  },

  methods: {
    movingCard() {
      this.$store.dispatch("updateList", this.lists);
    },
    movingList() {
      this.$store.dispatch("updateList", this.lists);
    },
  },

  // created(){
  //   console.log(this.lists);
  // }
};
</script>

<style scoped></style>
