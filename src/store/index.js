import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// localStorage.removeItem("trello-lists");

const savedLists = localStorage.getItem("trello-lists");
console.log(JSON.parse(savedLists));

const store = new Vuex.Store({
  state: {
    lists: savedLists
      ? JSON.parse(savedLists)
      : [
          {
            title: "Backlog",
            cards: [{ body: "English" }, { body: "PK" }],
          },
          {
            title: "Todo",
            cards: [{ body: "Science" }],
          },
          {
            title: "Doing",
            cards: [],
          },
        ],
  },
  mutations: {
    addlist(state, payload) {
      state.lists.push({ title: payload.title, cards: [] });
    },
    removelist(state, payload) {
      state.lists.splice(payload.listIndex, 1);
    }
  },
  actions: {
    addlist(context, payload) {
      context.commit("addlist", payload);
    },
    removelist(context, payload) {
      context.commit("removelist", payload);
    }
  },
  getters: {}
});

// subscribeはすべてのmutationsの後
store.subscribe((mutation, state) => {
  console.log(state.lists);
  localStorage.setItem("trello-lists", JSON.stringify(state.lists));
});

export default store;
