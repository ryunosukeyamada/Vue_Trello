<template>
  <div>
    <div class="card">
      <button class="close-button" @click="removeCardFromList">×</button>
      <div class="body">
        {{ body }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    body: {
      type: String,
      required: true,
    },
    listIndex: {
      type: Number,
      required: true,
    },
    cardIndex: {
      type: Number,
      required: true,
    },
  },
  methods: {
    removeCardFromList() {
      if (confirm("本当にこのカードを削除しますか？")) {
        this.$store.dispatch("removecard", {
          cardIndex: this.cardIndex,
          listIndex: this.listIndex,
        });
      }
    },
  },
};
</script>