<template>
  <div>
    <p>Completed Tasks: {{completedTasksCount}}</p>
    <p>Pending Tasks: {{pendingTasksCount}}</p>

    <todo v-for="todo in todos" v-bind:todo="todo" :key="todo.title"></todo>
  </div>
</template>

<script type = "text/javascript" >

  import Todo from './Todo';

  export default {
    components: {
      Todo,
    },
    computed: {
      todos() {
        return this.$store.state.todos;
      },
      completedTasksCount() {
        return this.$store.getters.completedTodosCount;
      },
      pendingTasksCount() {
        return this.$store.getters.pendingTodosCount;
      },
    },
  };
</script>
