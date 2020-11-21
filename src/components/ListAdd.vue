<template>
  <div>
    <form class="addlist" @submit.prevent="addList">
      <input
        v-model="title"
        type="text"
        class="text-input"
        placeholder="Add new list"
        @focusin="startEditing"
        @focusout="finishEdeting"
      />
      <button tyoe="submit" class="add-button">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      isEditing: false
    };
  },
  methods: {
    addList() {
      this.$store.dispatch("addlist", { title: this.title });
      this.title = "";
    },
    startEditing() {
      this.isEditing = true;
    },
    finishEdeting() {
      this.isEditing = false;
    }
  }
};
</script>
