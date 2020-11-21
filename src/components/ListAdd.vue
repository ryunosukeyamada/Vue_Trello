<template>
  <div>
    <form :class="classList" @submit.prevent="addList">
      <input
        v-model="title"
        type="text"
        class="text-input"
        placeholder="Add new list"
        @mouseenter="startEditing"
        @mouseleave="finishEditing"
      />
      <button tyoe="submit" class="add-button" v-if="titleExists">
        Add
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      isEditing: false,
    };
  },
  computed: {
    classList() {
      const classList = ["addlist"];
      if (this.isEditing) {
        classList.push("active");
      }

      if (this.titleExists) {
        classList.push("addable");
      }
      return classList;
    },
    titleExists() {
      return this.title.length > 0;
    }
  },

  methods: {
    addList() {
      this.$store.dispatch("addlist", this.title);
      this.title = "";
    },
    startEditing() {
      this.isEditing = true;
    },
    finishEditing() {
      this.isEditing = false;
    }
  }
};
</script>
