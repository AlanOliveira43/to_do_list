document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('new-task');
    const todoList = document.getElementById('todo-list');

    // Função para adicionar uma nova tarefa
    todoForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar recarregamento da página

        const taskText = todoInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            todoInput.value = ""; // Limpar o campo de input
        }
    });

    // Função para criar e adicionar uma nova tarefa na lista
    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Botão para remover a tarefa
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.addEventListener('click', function () {
            todoList.removeChild(li);
        });

        li.appendChild(removeButton);
        todoList.appendChild(li);
    }
});
