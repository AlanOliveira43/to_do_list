<template>
    <div>
      <h1>To-Do List</h1>
      <form @submit.prevent="addTask">
        <input v-model="newTask" type="text" placeholder="Add a new task" required />
        <button type="submit">Add</button>
      </form>
  
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <span :class="{ completed: task.completed }">{{ task.title }}</span>
          <button @click="deleteTask(task.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        tasks: [],
        newTask: '',
      };
    },
    methods: {
      async fetchTasks() {
        const response = await axios.get('http://localhost:8080/api/tasks');
        this.tasks = response.data;
      },
      async addTask() {
        const response = await axios.post('http://localhost:8080/api/tasks', {
          title: this.newTask,
          completed: false,
        });
        this.tasks.push(response.data);
        this.newTask = '';
      },
      async deleteTask(id) {
        await axios.delete(`http://localhost:8080/api/tasks/${id}`);
        this.tasks = this.tasks.filter(task => task.id !== id);
      },
    },
    mounted() {
      this.fetchTasks();
    },
  };
  </script>
  
  <style scoped>
  .completed {
    text-decoration: line-through;
    color: gray;
  }
  </style>
  