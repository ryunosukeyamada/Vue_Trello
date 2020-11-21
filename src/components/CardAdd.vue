<template>
  <div>
    <form :class="classList" @submit.prevent="addCardToList">
      <input
        type="text"
        class="text-input"
        v-model="body"
        placeholder="Add new Card"
        @mousemove="startEditing"
        @mouseleave="finishEditing"
      />
      <button
        type="submit"
        class="add-button"
        v-show="bodyLengs"
        :disabled="isEditing"
      >
        Add
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    listIndex: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      body: "",
      isEditing: false,
    };
  },
  computed: {
    classList() {
      const classList = ["addcard"];
      if (this.isEditing === true) {
        classList.push("active");
      }
      if (this.bodyLengs) {
        classList.push("addable");
      }
      return classList;
    },
    bodyLengs() {
      return this.body.length > 0;
    },
  },

  methods: {
    addCardToList() {
      this.$store.dispatch("addcard", {
        body: this.body,
        listIndex: this.listIndex,
      });
      this.body = "";
    },
    startEditing() {
      this.isEditing = true;
    },
    finishEditing() {
      this.isEditing = false;
    },
  },
};
</script>