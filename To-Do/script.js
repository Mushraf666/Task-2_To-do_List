document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const taskList = document.getElementById('task-list');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const taskText = input.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            input.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = taskText;
        li.appendChild(span);

        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('task-buttons');

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', function () {
            li.classList.toggle('completed');
        });
        buttonsDiv.appendChild(completeBtn);

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', function () {
            const newText = prompt('Edit task:', taskText);
            if (newText !== null && newText.trim() !== '') {
                span.textContent = newText.trim();
            }
        });
        buttonsDiv.appendChild(editBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function () {
            li.remove();
        });
        buttonsDiv.appendChild(deleteBtn);

        li.appendChild(buttonsDiv);
        taskList.appendChild(li);
    }
});
