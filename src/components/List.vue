<template>
  <div class="list">
    <div class="listheader">
      <p class="list-title">{{ title }}</p>
      <span class="list-counter">total: {{ totalCard }}</span>
      <div class="deletelist" @click="removeList">✖</div>
    </div>
    
    <draggable group="cards" :list="cards" @end="$emit('change')">
      <Card
        v-for="(item, index) in cards"
        :key="item.id"
        :body="item.body"
        :listIndex="listIndex"
        :cardIndex="index"
      />
      <CardAdd :listIndex="listIndex"></CardAdd>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";

import CardAdd from "./CardAdd.vue";
import Card from "./Card.vue";

export default {
  components: {
    CardAdd,
    Card,
    draggable,
  },
  computed: {
    totalCard() {
      return this.cards.length;
    },
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    cards: {
      type: Array,
      required: true,
    },
    listIndex: {
      type: Number,
      required: true,
    },
  },
  methods: {
    removeList() {
      if (confirm("本当にこのリストを削除しますか？")) {
        this.$store.dispatch("removelist", { listIndex: this.listIndex });
      }
    },
  },
};
</script>