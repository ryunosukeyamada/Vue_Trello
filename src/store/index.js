import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// localStorage.removeItem("trello-lists");

const savedLists = localStorage.getItem("trello-lists");
// console.log("Json parse↓");
// console.log(JSON.parse(savedLists));
// console.log("Json.stringify↓");
// console.log(savedLists);

const store = new Vuex.Store({
  state: {
    lists: savedLists
      ? JSON.parse(savedLists)
      : [{ title: "リストタイトル", cards: [{ body: "カードタイトル" }] }],
  },
  mutations: {
    addlist(state, payload) {
      state.lists.push({ title: payload, cards: [] });
    },
    removelist(state, payload) {
      state.lists.splice(payload.listIndex, 1);
    },
    addcard(state, payload) {
      // console.log(payload);
      state.lists[payload.listIndex].cards.push({ body: payload.body });
    },
    removecard(state, payload) {
      state.lists[payload.listIndex].cards.splice(payload.cardIndex, 1);
    },
    updateList(state, payload) {
      state.lists = payload;
    },
  },
  actions: {
    addlist(context, payload) {
      context.commit("addlist", payload);
    },
    removelist(context, payload) {
      context.commit("removelist", payload);
    },
    addcard(context, payload) {
      context.commit("addcard", payload);
    },
    removecard(context, payload) {
      context.commit("removecard", payload);
    },
    updateList(context, payload) {
      context.commit("updateList", payload);
    },
  },
  getters: {
    totalCardCount(state) {
      let count = 0;
      state.lists.map(item => {
        count += item.cards.length;
      });
      return count;
    },
  },
});

// subscribeはmutationsの後実行
store.subscribe((mutation, state) => {
  localStorage.setItem("trello-lists", JSON.stringify(state.lists));
});

export default store;
