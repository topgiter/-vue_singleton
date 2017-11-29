import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/* eslint-disable */

export default new Vuex.Store({
  state: {
    todos: [{
      title: 'Todo A',
      project: 'Project A',
      done: false,
    }, {
      title: 'Todo B',
      project: 'Project B',
      done: true,
    }, {
      title: 'Todo C',
      project: 'Project C',
      done: false,
    }, {
      title: 'Todo D',
      project: 'Project D',
      done: false,
    }],
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    EDIT_TODO_TITLE(state, { todo, title }) {
      todo.title = title;
    },
    EDIT_TODO_PROJECT(state, { todo, project }) {
      todo.project = project;
    },
    REMOVE_TODO(state, todo) {
      const todos = state.todos;
      todos.splice(todos.indexOf(todo), 1);
    },
    COMPLETE_TODO(state, todo) {
      todo.done = !todo.done;
    },
  },
  actions: {
    addTodo({ commit }, todo) {
      commit('ADD_TODO', todo);
    },
    editTodoTitle({ commit }, payload) {
      commit('EDIT_TODO_TITLE', payload);
    },
    editTodoProject({ commit }, payload) {
      commit('EDIT_TODO_PROJECT', payload);
    },
    removeTodo({ commit }, todo) {
      commit('REMOVE_TODO', todo);
    },
    completeTodo({ commit }, todo) {
      commit('COMPLETE_TODO', todo);
    },
  },
  getters: {
    completedTodosCount: state => state.todos.filter(todo => todo.done).length,
    pendingTodosCount: state => state.todos.filter(todo => !todo.done).length,
  }
});
