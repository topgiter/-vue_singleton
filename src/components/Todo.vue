<template>
  <div class='ui centered card'>

    <div class="content" v-show="!isEditing">
      <div class='header'>
        {{ todo.title }}
      </div>
      <div class='meta'>
        {{ todo.project }}
      </div>
      <div class='extra content'>
        <span class='right floated edit icon' @click="showForm">
          <i class='edit icon'></i>
        </span>
        <span class='right floated trash icon' @click="deleteTodo(todo)">
          <i class='trash icon'></i>
        </span>
        <span class='right floated check icon' @click="completeTodo(todo)">
          <i class='check icon'></i>
        </span>
      </div>
    </div>

    <div class="content" v-show="isEditing">
      <div class='ui form'>
        <div class='field'>
          <label>Title</label>
          <input type='text' :value="todo.title" @change="updateTodoTitle(todo, $event)">
        </div>
        <div class='field'>
          <label>Project</label>
          <input type='text' :value="todo.project" @change="updateTodoProject(todo, $event)">
        </div>
        <div class='ui two button attached buttons'>
          <button class='ui basic blue button' @click="hideForm">
            Close X
          </button>
        </div>
      </div>
    </div>

    <div class='ui bottom attached green basic button' v-show="!isEditing &&todo.done" disabled>
      Completed
    </div>
    <div class='ui bottom attached red basic button' v-show="!isEditing && !todo.done">
      Pending
    </div>
  </div>
</template>

<script>
  export default {
    props: ['todo'],
    data() {
      return {
        isEditing: false,
      };
    },
    methods: {
      showForm() {
        this.isEditing = true;
      },
      hideForm() {
        this.isEditing = false;
      },
      deleteTodo(todo) {
        this.$store.dispatch('removeTodo', todo);
      },
      completeTodo(todo) {
        this.$store.dispatch('completeTodo', todo);
      },
      updateTodoTitle(todo, event) {
        const payload = {
          title: event.target.value,
          todo,
        };

        this.$store.dispatch('editTodoTitle', payload);
      },
      updateTodoProject(todo, event) {
        const payload = {
          project: event.target.value,
          todo,
        };

        this.$store.dispatch('editTodoProject', payload);
      },
    },
  };
</script>
